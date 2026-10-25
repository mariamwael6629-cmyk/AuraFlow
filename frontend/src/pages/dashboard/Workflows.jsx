import { useEffect, useState } from "react";
import { workflowsApi } from "../../api/endpoints";

const STATUS_LABEL = {
  active: "Active",
  paused: "Paused",
  draft: "Draft",
};

export default function Workflows() {
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", description: "" });
  const [busyId, setBusyId] = useState(null);

  function load() {
    setLoading(true);
    workflowsApi
      .list()
      .then((res) => setWorkflows(res.data))
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  async function handleCreate(e) {
    e.preventDefault();
    if (!form.name.trim()) return;
    await workflowsApi.create({ name: form.name, description: form.description, nodes: [] });
    setForm({ name: "", description: "" });
    setShowModal(false);
    load();
  }

  async function handleRun(id) {
    setBusyId(id);
    try {
      await workflowsApi.run(id);
      load();
    } finally {
      setBusyId(null);
    }
  }

  async function handleToggleStatus(workflow) {
    const nextStatus = workflow.status === "active" ? "paused" : "active";
    setBusyId(workflow.id);
    try {
      await workflowsApi.update(workflow.id, { status: nextStatus });
      load();
    } finally {
      setBusyId(null);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this workflow? This cannot be undone.")) return;
    setBusyId(id);
    try {
      await workflowsApi.remove(id);
      load();
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <div className="dash-page-head">
        <div>
          <h1>Workflows</h1>
          <p>Build, run, and manage your automations.</p>
        </div>
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          + New workflow
        </button>
      </div>

      {loading ? (
        <div className="page-loading" style={{ minHeight: "30vh" }}>
          <div className="spinner"></div> Loading workflows…
        </div>
      ) : workflows.length === 0 ? (
        <div className="wf-table">
          <div className="empty-state">
            <h3>No workflows yet</h3>
            <p>Create your first automation to get started.</p>
            <button className="btn-primary" onClick={() => setShowModal(true)}>
              + New workflow
            </button>
          </div>
        </div>
      ) : (
        <div className="wf-table">
          <div className="wf-row wf-head">
            <span>Name</span>
            <span>Status</span>
            <span>Executions</span>
            <span>Success rate</span>
            <span></span>
          </div>
          {workflows.map((wf) => (
            <div className="wf-row" key={wf.id}>
              <div className="wf-name">
                {wf.name}
                <span>{wf.description || "No description"}</span>
              </div>
              <span className={`status-pill status-${wf.status}`}>
                {STATUS_LABEL[wf.status] || wf.status}
              </span>
              <span className="wf-stat" data-label="Executions">{wf.executions_count}</span>
              <span className="wf-stat" data-label="Success rate">{wf.success_rate}%</span>
              <div className="row-actions">
                <button disabled={busyId === wf.id} onClick={() => handleRun(wf.id)}>
                  Run
                </button>
                <button disabled={busyId === wf.id} onClick={() => handleToggleStatus(wf)}>
                  {wf.status === "active" ? "Pause" : "Activate"}
                </button>
                <button
                  className="danger"
                  disabled={busyId === wf.id}
                  onClick={() => handleDelete(wf.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3>New workflow</h3>
            <form onSubmit={handleCreate}>
              <div className="form-field">
                <label htmlFor="wf-name">Name</label>
                <input
                  id="wf-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Lead nurture pipeline"
                />
              </div>
              <div className="form-field">
                <label htmlFor="wf-desc">Description</label>
                <input
                  id="wf-desc"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="What does this automation do?"
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-ghost" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
