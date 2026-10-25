import { useEffect, useState } from "react";
import { teamApi } from "../../api/endpoints";

const PERM_CLASS = { admin: "pt-admin", edit: "pt-editor", view: "pt-viewer" };
const PERM_LABEL = { admin: "Admin", edit: "Edit", view: "View" };
const AV_COLORS = [
  { bg: "rgba(194,65,12,.15)", fg: "var(--in)" },
  { bg: "rgba(133,68,30,.12)", fg: "var(--em)" },
  { bg: "rgba(136,19,55,.12)", fg: "var(--pk)" },
];

export default function Team() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", role: "Viewer", department: "" });
  const [submitting, setSubmitting] = useState(false);

  function load() {
    setLoading(true);
    teamApi
      .list()
      .then((res) => setMembers(res.data))
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  async function handleInvite(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setSubmitting(true);
    try {
      await teamApi.invite({ ...form, permission_level: "view" });
      setForm({ name: "", email: "", role: "Viewer", department: "" });
      setShowModal(false);
      load();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <div className="dash-page-head">
        <div>
          <h1>Team</h1>
          <p>Shared workspaces with role-based permissions.</p>
        </div>
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          + Invite teammate
        </button>
      </div>

      {loading ? (
        <div className="page-loading" style={{ minHeight: "30vh" }}>
          <div className="spinner"></div> Loading team…
        </div>
      ) : (
        <div className="team-grid">
          {members.map((m, idx) => {
            const colors = AV_COLORS[idx % AV_COLORS.length];
            return (
              <div className="team-card" key={m.id}>
                <div className="member-row">
                  <div className="member-av" style={{ background: colors.bg, color: colors.fg }}>
                    {m.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <div className="member-name">{m.name}</div>
                    <div className="member-role">
                      {m.role} {m.department && `· ${m.department}`}
                    </div>
                  </div>
                </div>
                <div className="perm-row">
                  <span className="perm-lbl">Access level</span>
                  <span className={`perm-tag ${PERM_CLASS[m.permission_level] || "pt-viewer"}`}>
                    {PERM_LABEL[m.permission_level] || m.permission_level}
                  </span>
                </div>
                <div className="perm-row">
                  <span className="perm-lbl">Email</span>
                  <span style={{ color: "var(--t3)", fontSize: 11 }}>{m.email}</span>
                </div>
              </div>
            );
          })}
          <div className="team-card team-invite-card" onClick={() => setShowModal(true)}>
            <div style={{ textAlign: "center", color: "var(--t3)" }}>
              <div style={{ fontSize: 30, marginBottom: 8 }}>+</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--t2)" }}>Invite teammate</div>
              <div style={{ fontSize: 11, marginTop: 4 }}>Add collaborators</div>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3>Invite teammate</h3>
            <form onSubmit={handleInvite}>
              <div className="form-field">
                <label htmlFor="t-name">Name</label>
                <input
                  id="t-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="form-field">
                <label htmlFor="t-email">Email</label>
                <input
                  id="t-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="form-field">
                <label htmlFor="t-dept">Department</label>
                <input
                  id="t-dept"
                  value={form.department}
                  onChange={(e) => setForm({ ...form, department: e.target.value })}
                  placeholder="e.g. Marketing"
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-ghost" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? "Inviting…" : "Send invite"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
