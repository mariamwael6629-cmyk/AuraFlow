export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="nav-logo" href="#home" style={{ fontSize: 17 }}>
            <div className="logo-mark">A</div>AuraFlow
          </a>
          <p>The AI-powered automation platform for modern teams. Build, connect, and automate everything.</p>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <a>Workflow Builder</a><a>AI Assistant</a><a>Integrations</a><a>Templates</a><a>Pricing</a>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <a>Documentation</a><a>API Reference</a><a>Blog</a><a>Changelog</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a>About</a><a>Careers</a><a>Security</a><a>Privacy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 AuraFlow, Inc. All rights reserved.</span>
        <span style={{ color: "var(--in)" }}>Built for the automation generation</span>
      </div>
    </footer>
  );
}
