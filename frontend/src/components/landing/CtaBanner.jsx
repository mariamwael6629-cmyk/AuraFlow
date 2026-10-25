import { Link } from "react-router-dom";

export default function CtaBanner() {
  return (
    <div className="cta-banner">
      <h2>
        Ready to automate
        <br />
        <span className="grad">everything?</span>
      </h2>
      <p>Join 12,400+ teams saving 18+ hours per week with AuraFlow. Start free, no card required.</p>
      <div className="cta-ctas">
        <Link className="btn-hero" to="/register">
          Start for free — no card needed
        </Link>
        <a className="btn-hero2" href="mailto:sales@auraflow.io">
          Talk to sales
        </a>
      </div>
    </div>
  );
}
