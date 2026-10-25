export default function AiAssistant() {
  return (
    <section style={{ background: "rgba(240,239,238,.6)" }}>
      <div className="sec-tag">AI-powered</div>
      <h2 className="sec-title">
        Build automations
        <br />
        <span className="grad2">with plain English</span>
      </h2>
      <div className="ai-grid">
        <div>
          <p className="sec-sub" style={{ marginBottom: "1.5rem" }}>
            Describe what you want to automate. AuraFlow AI picks the right apps and triggers,
            maps the data, and builds the entire workflow — you review and activate.
          </p>
          <div className="feat-check-list">
            <div><span>✓</span>Understands natural language</div>
            <div><span>✓</span>Auto-selects the right integrations</div>
            <div><span>✓</span>Detects bottlenecks and suggests fixes</div>
            <div><span>✓</span>One-click deploy from chat</div>
          </div>
        </div>
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-ava">A</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>AuraFlow AI</div>
              <div style={{ fontSize: 11, color: "var(--em)" }}>● Online</div>
            </div>
          </div>
          <div className="chat-messages">
            <div className="msg-u">
              When a new lead fills my Typeform, add them to HubSpot, send a personalised
              welcome email, and notify the sales team on Slack.
            </div>
            <div className="msg-a">
              Built it! 4-step workflow: Typeform → HubSpot → Gmail → Slack. Estimated time
              saved: ~4 min per lead. Activate now?
            </div>
          </div>
          <div className="chat-input-bar">
            <input className="chat-inp" placeholder="Describe your automation…" disabled />
            <button className="chat-send">↑</button>
          </div>
        </div>
      </div>
    </section>
  );
}
