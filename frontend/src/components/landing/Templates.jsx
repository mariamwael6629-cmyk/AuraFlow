import { Link } from "react-router-dom";

export default function Templates() {
  return (
    <section id="templates">
      <div className="sec-tag">Templates</div>
      <h2 className="sec-title">
        Deploy in seconds
        <br />
        <span className="grad2">with 100+ templates</span>
      </h2>
      <div className="tpl-grid">
        <div className="tpl-card">
          <span className="tpl-tag tt-popular">Popular</span>
          <h4>Lead Nurture Pipeline</h4>
          <p>Qualify leads, enrich data, add to CRM, and trigger personalised email sequences.</p>
          <div className="tpl-nodes"><span className="tpl-node">Typeform</span><span className="tpl-node">HubSpot</span><span className="tpl-node">Gmail</span></div>
        </div>
        <div className="tpl-card">
          <span className="tpl-tag tt-ai">AI-powered</span>
          <h4>AI Customer Support Triage</h4>
          <p>Classify inbound tickets, route to the right team, and auto-reply to common queries.</p>
          <div className="tpl-nodes"><span className="tpl-node">Zendesk</span><span className="tpl-node">AI</span><span className="tpl-node">Slack</span></div>
        </div>
        <div className="tpl-card">
          <span className="tpl-tag tt-new">New</span>
          <h4>E-commerce Order Workflow</h4>
          <p>From purchase to fulfilment: inventory check, shipping label, confirmation.</p>
          <div className="tpl-nodes"><span className="tpl-node">Shopify</span><span className="tpl-node">ShipBob</span><span className="tpl-node">Klaviyo</span></div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <Link className="btn-ghost" style={{ padding: "12px 28px", fontSize: 14 }} to="/register">
          Browse all 100+ templates →
        </Link>
      </div>
    </section>
  );
}
