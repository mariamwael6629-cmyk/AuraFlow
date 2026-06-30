import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>This page doesn't exist or has been moved.</p>
      <Link className="btn-primary" to="/">
        Back to home
      </Link>
    </div>
  );
}
