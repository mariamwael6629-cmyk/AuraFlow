import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Icon from "../../components/Icon";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Overview", icon: "overview", end: true },
  { to: "/dashboard/workflows", label: "Workflows", icon: "flow" },
  { to: "/dashboard/templates", label: "Templates", icon: "templates" },
  { to: "/dashboard/integrations", label: "Integrations", icon: "link" },
  { to: "/dashboard/analytics", label: "Analytics", icon: "chart" },
  { to: "/dashboard/scheduler", label: "Scheduler", icon: "clock" },
  { to: "/dashboard/team", label: "Team", icon: "users" },
  { to: "/dashboard/settings", label: "Settings", icon: "gear" },
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
          <div className="logo-mark" aria-hidden="true"></div>
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
                <span><Icon name={item.icon} size={18} /></span> {item.label}
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
            <Icon name="logout" size={18} />
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
