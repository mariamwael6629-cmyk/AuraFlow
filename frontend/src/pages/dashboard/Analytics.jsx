import { useEffect, useState } from "react";
import { analyticsApi } from "../../api/endpoints";

export default function Analytics() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    analyticsApi
      .summary()
      .then((res) => setSummary(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading || !summary) {
    return (
      <div className="page-loading" style={{ minHeight: "40vh" }}>
        <div className="spinner"></div> Loading analytics…
      </div>
    );
  }

  const maxExec = Math.max(1, ...summary.weekly_executions.map((d) => d.executions));

  return (
    <div>
      <div className="dash-page-head">
        <div>
          <h1>Analytics</h1>
          <p>Prove the ROI of automation across your workspace.</p>
        </div>
      </div>

      <div className="an-grid">
        <div className="an-card">
          <div className="an-lbl">Time saved</div>
          <div className="an-val" style={{ color: "var(--em)" }}>
            {summary.time_saved_hours}h
          </div>
          <div className="an-change">Estimated this period</div>
        </div>
        <div className="an-card">
          <div className="an-lbl">Tasks automated</div>
          <div className="an-val" style={{ color: "var(--in)" }}>
            {summary.tasks_automated.toLocaleString()}
          </div>
          <div className="an-change">Across all workflows</div>
        </div>
        <div className="an-card">
          <div className="an-lbl">Cost saved</div>
          <div className="an-val" style={{ color: "var(--cy)" }}>
            ${summary.cost_saved.toLocaleString()}
          </div>
          <div className="an-change">Estimated savings</div>
        </div>
        <div className="an-card">
          <div className="an-lbl">Error rate</div>
          <div className="an-val" style={{ color: "var(--am)" }}>
            {summary.error_rate}%
          </div>
          <div className="an-change">{summary.success_rate}% success rate</div>
        </div>
      </div>

      <div className="chart-card">
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: "0.5rem" }}>
          Weekly automation executions
        </div>
        <div className="weekly-bars">
          {summary.weekly_executions.map((d) => (
            <div className="weekly-bar-col" key={d.day}>
              <div
                className="weekly-bar"
                style={{ height: `${Math.max(4, (d.executions / maxExec) * 100)}%` }}
                title={`${d.executions} executions`}
              ></div>
              <span className="weekly-bar-lbl">{d.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
