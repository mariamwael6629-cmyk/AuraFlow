import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <section id="pricing" className="center" style={{ background: "rgba(244,241,234,.5)" }}>
      <div className="sec-tag">Pricing</div>
      <h2 className="sec-title">
        Simple, transparent
        <br />
        <span className="grad2">pricing</span>
      </h2>
      <p className="sec-sub">Start free, scale as you grow. No hidden fees or per-task charges.</p>
      <div className="price-grid">
        <div className="price-card">
          <div className="price-name">Starter</div>
          <div className="price-value">$0</div>
          <div className="price-period">Free forever</div>
          <ul className="price-feats">
            <li>5 active workflows</li>
            <li>1,000 executions / month</li>
            <li>50+ integrations</li>
            <li className="no">AI assistant</li>
            <li className="no">Team workspaces</li>
          </ul>
          <Link className="price-btn" to="/register">Get started free</Link>
        </div>
        <div className="price-card featured">
          <div className="price-badge">MOST POPULAR</div>
          <div className="price-name">Pro</div>
          <div className="price-value">$49</div>
          <div className="price-period">per month</div>
          <ul className="price-feats">
            <li>Unlimited workflows</li>
            <li>100,000 executions / month</li>
            <li>500+ integrations</li>
            <li>AI automation assistant</li>
            <li>5 team members</li>
          </ul>
          <Link className="price-btn feat" to="/register">Start 14-day free trial</Link>
        </div>
        <div className="price-card">
          <div className="price-name">Enterprise</div>
          <div className="price-value">Custom</div>
          <div className="price-period">contact us</div>
          <ul className="price-feats">
            <li>Unlimited everything</li>
            <li>99.99% SLA guarantee</li>
            <li>SSO &amp; SAML</li>
            <li>24/7 priority support</li>
          </ul>
          <a className="price-btn" href="mailto:sales@auraflow.io">Contact sales</a>
        </div>
      </div>
    </section>
  );
}
