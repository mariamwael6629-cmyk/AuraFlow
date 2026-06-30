import { useEffect, useState } from "react";
import { schedulerApi } from "../../api/endpoints";

export default function Scheduler() {
  const [triggers, setTriggers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState(null);

  function load() {
    setLoading(true);
    schedulerApi
      .list()
      .then((res) => setTriggers(res.data))
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  async function toggle(trigger) {
    setBusyId(trigger.id);
    try {
      const nextStatus = trigger.status === "on" ? "off" : "on";
      await schedulerApi.update(trigger.id, { status: nextStatus });
      load();
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <div className="dash-page-head">
        <div>
          <h1>Scheduler</h1>
          <p>Time-based, event-driven, and webhook triggers.</p>
        </div>
      </div>

      {loading ? (
        <div className="page-loading" style={{ minHeight: "30vh" }}>
          <div className="spinner"></div> Loading triggers…
        </div>
      ) : (
        <div className="sched-list">
          {triggers.length === 0 && (
            <p style={{ fontSize: 13, color: "var(--t3)" }}>No triggers configured yet.</p>
          )}
          {triggers.map((t) => (
            <div className="trigger-row" key={t.id} onClick={() => toggle(t)}>
              <div className="trigger-icon" style={{ background: "rgba(99,102,241,.1)", color: "var(--in)" }}>
                {t.icon}
              </div>
              <div className="trigger-info">
                <h5>{t.name}</h5>
                <p>{t.description}</p>
              </div>
              <button
                className={`t-status ${t.status === "on" ? "t-on" : "t-off"}`}
                disabled={busyId === t.id}
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(t);
                }}
              >
                {t.status === "on" ? "ON" : "PAUSED"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
