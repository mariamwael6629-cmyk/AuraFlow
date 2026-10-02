export default function Features() {
  return (
    <section id="features">
      <div className="sec-tag">⚡ Platform</div>
      <h2 className="sec-title">
        Everything you need to
        <br />
        <span className="grad2">automate your business</span>
      </h2>
      <p className="sec-sub">
        From simple two-step flows to complex enterprise automations — AuraFlow handles it all
        with zero code.
      </p>
      <div className="feat-grid">
        <div className="feat-card">
          <div className="feat-icon fi-indigo">🎨</div>
          <h3>Visual Workflow Builder</h3>
          <p>Drag-and-drop canvas with animated node connections and conditional branches.</p>
        </div>
        <div className="feat-card">
          <div className="feat-icon fi-pink">🤖</div>
          <h3>AI Automation Assistant</h3>
          <p>Describe your workflow in plain English and get a running automation in seconds.</p>
        </div>
        <div className="feat-card">
          <div className="feat-icon fi-cyan">🔗</div>
          <h3>App Integrations Hub</h3>
          <p>Connect 500+ apps including Slack, Salesforce, Gmail, Stripe, and any REST API.</p>
        </div>
        <div className="feat-card">
          <div className="feat-icon fi-emerald">📡</div>
          <h3>Real-time Monitoring</h3>
          <p>Watch automations execute live and get AI-powered diagnostics on failures.</p>
        </div>
        <div className="feat-card">
          <div className="feat-icon fi-amber">⏰</div>
          <h3>Smart Scheduler</h3>
          <p>Time-based, event-driven, and API-triggered automations in one place.</p>
        </div>
        <div className="feat-card">
          <div className="feat-icon fi-teal">👥</div>
          <h3>Team Collaboration</h3>
          <p>Shared workspaces, role-based permissions, and full version history.</p>
        </div>
      </div>
    </section>
  );
}
