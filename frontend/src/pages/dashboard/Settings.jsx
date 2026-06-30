import { useAuth } from "../../context/AuthContext";

export default function Settings() {
  const { user } = useAuth();

  return (
    <div>
      <div className="dash-page-head">
        <div>
          <h1>Settings</h1>
          <p>Manage your account details.</p>
        </div>
      </div>

      <div className="settings-card">
        <h3>Account</h3>
        <div className="settings-row">
          <span>Name</span>
          <span>{user?.name}</span>
        </div>
        <div className="settings-row">
          <span>Email</span>
          <span>{user?.email}</span>
        </div>
        <div className="settings-row">
          <span>Role</span>
          <span>{user?.role}</span>
        </div>
        <div className="settings-row">
          <span>Member since</span>
          <span>{user?.created_at ? new Date(user.created_at).toLocaleDateString() : "—"}</span>
        </div>
      </div>
    </div>
  );
}
