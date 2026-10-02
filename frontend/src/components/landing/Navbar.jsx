import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <a className="nav-logo" href="#home">
        <div className="logo-mark">⚡</div>
        AuraFlow
      </a>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#integrations">Integrations</a></li>
        <li><a href="#templates">Templates</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
      <div className="nav-right">
        <Link className="btn-ghost" to="/login">
          Log in
        </Link>
        <Link className="btn-primary" to="/register">
          Get Started Free
        </Link>
      </div>
    </nav>
  );
}
