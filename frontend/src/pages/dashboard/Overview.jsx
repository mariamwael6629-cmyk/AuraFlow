import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataIcon } from "../../components/Icon";
import {
  analyticsApi,
  executionsApi,
  notificationsApi,
  workflowsApi,
} from "../../api/endpoints";

export default function Overview() {
  const [summary, setSummary] = useState(null);
  const [executions, setExecutions] = useState([]);
  const [workflows, setWorkflows] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      analyticsApi.summary(),
      executionsApi.list(),
      workflowsApi.list(),
      notificationsApi.list(),
    ])
      .then(([summaryRes, execRes, wfRes, notifRes]) => {
        setSummary(summaryRes.data);
        setExecutions(execRes.data);
        setWorkflows(wfRes.data);
        setNotifications(notifRes.data);
      })
      .finally(() => setLoading(false));
  }, []);

  function workflowName(id) {
    return workflows.find((w) => w.id === id)?.name || `Workflow #${id}`;
  }

  if (loading) {
    return (
      <div className="page-loading" style={{ minHeight: "40vh" }}>
        <div className="spinner"></div> Loading overview…
      </div>
    );
  }

  return (
    <div>
      <div className="dash-page-head">
        <div>
          <h1>Overview</h1>
          <p>A live snapshot of your automations and executions.</p>
        </div>
        <Link className="btn-primary" to="/dashboard/workflows">
          + New workflow
        </Link>
      </div>

      <div className="mon-grid">
        <div className="mon-card">
          <div className="mon-head">
            <span className="mon-lbl">Executions today</span>
            <span className="status-badge s-live">LIVE</span>
          </div>
          <div className="mon-val" style={{ color: "var(--in)" }}>
            {summary.executions_today}
          </div>
          <div className="mon-sub">{summary.tasks_automated} total automated</div>
        </div>
        <div className="mon-card">
          <div className="mon-head">
            <span className="mon-lbl">Success rate</span>
            <span className="status-badge s-live">{summary.success_rate}%</span>
          </div>
          <div className="mon-val" style={{ color: "var(--em)" }}>
            {summary.success_rate}%
          </div>
          <div className="mon-sub">{summary.error_rate}% error rate</div>
        </div>
        <div className="mon-card">
          <div className="mon-head">
            <span className="mon-lbl">Avg response</span>
            <span className="status-badge s-warn">{summary.avg_response_seconds}s</span>
          </div>
          <div className="mon-val" style={{ color: "var(--am)" }}>
            {summary.avg_response_seconds}s
          </div>
          <div className="mon-sub">Across all workflows</div>
        </div>
        <div className="mon-card">
          <div className="mon-head">
            <span className="mon-lbl">Active workflows</span>
            <span className="status-badge s-live">{summary.active_workflows}</span>
          </div>
          <div className="mon-val" style={{ color: "var(--in)" }}>
            {summary.active_workflows}
          </div>
          <div className="mon-sub">
            {summary.paused_workflows} paused · {summary.draft_workflows} drafts
          </div>
        </div>
      </div>

      <div className="exec-log">
        <div className="log-head">
          <span style={{ fontSize: 14, fontWeight: 700 }}>Recent executions</span>
          <span style={{ fontSize: 12, color: "var(--em)", fontWeight: 700 }}>● live</span>
        </div>
        {executions.length === 0 && (
          <p style={{ fontSize: 13, color: "var(--t3)" }}>No executions yet. Run a workflow to see activity here.</p>
        )}
        {executions.slice(0, 6).map((exec) => (
          <div className="log-item" key={exec.id}>
            <div className={`log-dot ld-${exec.status}`}></div>
            <div className="log-name">{workflowName(exec.workflow_id)} — {exec.message}</div>
            <div className="log-time">{new Date(exec.created_at).toLocaleTimeString()}</div>
          </div>
        ))}
      </div>

      <div className="exec-log">
        <div className="log-head">
          <span style={{ fontSize: 14, fontWeight: 700 }}>Notifications</span>
        </div>
        {notifications.length === 0 && (
          <p style={{ fontSize: 13, color: "var(--t3)" }}>You're all caught up.</p>
        )}
        {notifications.slice(0, 5).map((n) => (
          <div className="log-item" key={n.id}>
            <span style={{ display: "inline-flex", color: "var(--t2)" }}><DataIcon emoji={n.icon} size={16} /></span>
            <div className="log-name">{n.message}</div>
            <div className="log-time">{new Date(n.created_at).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
