import { Link } from "react-router-dom";
import WorkflowPreview from "./WorkflowPreview";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>
      <div className="hero-badge">
        <div className="badge-dot"></div> Powered by AI · Now in v3.0
      </div>
      <h1>
        Automate Everything.
        <br />
        <span className="grad">Build Smarter Flows.</span>
      </h1>
      <p>
        AuraFlow is the AI-powered workflow platform that turns plain English into running
        automations. Connect 500+ apps, schedule processes, and monitor everything in real time.
      </p>
      <div className="hero-ctas">
        <Link className="btn-hero" to="/register">
          Start Building — Free
        </Link>
        <Link className="btn-hero2" to="/login">
          ▶ View Live Dashboard
        </Link>
      </div>

      <WorkflowPreview />
    </section>
  );
}
