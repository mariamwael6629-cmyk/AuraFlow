import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Overview", end: true },
  { to: "/dashboard/workflows", label: "Workflows" },
  { to: "/dashboard/templates", label: "Templates" },
  { to: "/dashboard/integrations", label: "Integrations" },
  { to: "/dashboard/analytics", label: "Analytics" },
  { to: "/dashboard/scheduler", label: "Scheduler" },
  { to: "/dashboard/team", label: "Team" },
  { to: "/dashboard/settings", label: "Settings" },
];

export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <div className="dash-shell">
      <aside className="dash-sidebar">
        <a className="nav-logo" href="/">
          <div className="logo-mark">A</div>
          AuraFlow
        </a>
        <ul className="dash-nav">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="dash-user">
          <div className="dash-user-av">{user?.avatar_initials || "?"}</div>
          <div className="dash-user-info">
            <div className="dash-user-name">{user?.name}</div>
            <div className="dash-user-email">{user?.email}</div>
          </div>
          <button className="dash-logout" title="Log out" onClick={handleLogout}>
            ⎋
          </button>
        </div>
      </aside>
      <div className="dash-main">
        <div className="dash-topbar">
          <span className="dash-topbar-title">Workspace</span>
          <span style={{ fontSize: 12, color: "var(--t3)" }}>{user?.role}</span>
        </div>
        <main className="dash-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
