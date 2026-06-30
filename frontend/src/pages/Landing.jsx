import { useState } from "react";
import { Link } from "react-router-dom";

const FAQS = [
  {
    q: "Do I need to know how to code?",
    a: "Not at all. AuraFlow is designed for everyone — from developers to business users. Our visual canvas and AI assistant let you build complex automations without writing code.",
  },
  {
    q: "How does the AI workflow generator work?",
    a: "Describe what you want to automate in plain English. Our AI interprets your intent, identifies the right apps and triggers, and builds the entire workflow. You review, adjust, and activate — usually in under 60 seconds.",
  },
  {
    q: "What happens if a workflow fails?",
    a: "AuraFlow has built-in error handling with automatic retries, exponential backoff, and detailed diagnostics. You get instant notifications and can replay failed executions after the issue is resolved.",
  },
  {
    q: "Can I connect custom APIs and databases?",
    a: "Yes. AuraFlow supports custom HTTP requests, webhooks, REST APIs, and direct database connections. You can build custom integrations and publish them to your team's library.",
  },
  {
    q: "Is my data secure?",
    a: "Security is our top priority. All data is encrypted in transit and at rest. Enterprise plans include SSO, SAML, and full audit logs.",
  },
];

const INTEGRATIONS = [
  ["Slack", "#4a154b"],
  ["Jira", "#0052cc"],
  ["Gmail", "#ea4335"],
  ["HubSpot", "#ff7a59"],
  ["Salesforce", "#00a1e0"],
  ["Stripe", "#6772e5"],
  ["Shopify", "#96bf48"],
  ["GitHub", "#24292e"],
  ["Notion", "#000000"],
  ["Figma", "#f24e1e"],
  ["AWS", "#ff9900"],
  ["Google Sheets", "#34a853"],
];

export default function Landing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
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
            ⚡ Start Building — Free
          </Link>
          <Link className="btn-hero2" to="/login">
            ▶ View Live Dashboard
          </Link>
        </div>

        <div className="canvas-wrap">
          <div className="canvas-topbar">
            <div className="dot-r"></div>
            <div className="dot-y"></div>
            <div className="dot-g"></div>
            <span className="canvas-title">Customer Onboarding Automation</span>
            <span className="canvas-running">● live</span>
            <span className="canvas-meta">6 nodes · 99.8% success · 1.2s avg</span>
          </div>
          <svg className="wf-svg" viewBox="0 0 920 220" xmlns="http://www.w3.org/2000/svg">
            <rect width="920" height="220" fill="#07090f" />
            <line x1="152" y1="110" x2="222" y2="110" stroke="#6366f1" strokeWidth="1.8" strokeDasharray="6 4" className="fl" />
            <line x1="322" y1="110" x2="392" y2="76" stroke="#06b6d4" strokeWidth="1.8" strokeDasharray="6 4" className="fl2" />
            <line x1="322" y1="110" x2="392" y2="144" stroke="#6366f1" strokeWidth="1.8" strokeDasharray="5 5" className="fl" />
            <line x1="502" y1="76" x2="572" y2="92" stroke="#06b6d4" strokeWidth="1.8" strokeDasharray="6 4" className="fl2" />
            <line x1="502" y1="144" x2="572" y2="128" stroke="#6366f1" strokeWidth="1.8" strokeDasharray="5 5" className="fl" />
            <line x1="672" y1="100" x2="722" y2="110" stroke="#10b981" strokeWidth="1.8" strokeDasharray="6 4" className="fl" />
            <line x1="672" y1="120" x2="722" y2="110" stroke="#10b981" strokeWidth="1.8" strokeDasharray="5 5" className="fl2" />

            <rect x="22" y="76" width="130" height="68" rx="13" fill="rgba(99,102,241,.07)" stroke="rgba(99,102,241,.45)" strokeWidth="1.5" />
            <text x="87" y="106" fontFamily="Inter,sans-serif" fontSize="13" fill="#eef0f9" textAnchor="middle" fontWeight="700">🔗 Webhook</text>
            <text x="87" y="124" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(238,240,249,.4)" textAnchor="middle">New signup event</text>

            <rect x="222" y="76" width="100" height="68" rx="13" fill="rgba(6,182,212,.07)" stroke="rgba(6,182,212,.4)" strokeWidth="1.5" />
            <text x="272" y="106" fontFamily="Inter,sans-serif" fontSize="13" fill="#eef0f9" textAnchor="middle" fontWeight="700">🔀 Branch</text>
            <text x="272" y="124" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(238,240,249,.4)" textAnchor="middle">Plan check</text>

            <rect x="392" y="46" width="110" height="60" rx="13" fill="rgba(236,72,153,.08)" stroke="rgba(236,72,153,.4)" strokeWidth="1.5" />
            <text x="447" y="80" fontFamily="Inter,sans-serif" fontSize="12" fill="#eef0f9" textAnchor="middle" fontWeight="700">✨ Personalise</text>

            <rect x="392" y="114" width="110" height="60" rx="13" fill="rgba(99,102,241,.07)" stroke="rgba(99,102,241,.3)" strokeWidth="1.5" />
            <text x="447" y="148" fontFamily="Inter,sans-serif" fontSize="12" fill="#eef0f9" textAnchor="middle" fontWeight="700">💬 Slack</text>

            <rect x="572" y="62" width="100" height="60" rx="13" fill="rgba(16,185,129,.08)" stroke="rgba(16,185,129,.4)" strokeWidth="1.5" />
            <text x="622" y="96" fontFamily="Inter,sans-serif" fontSize="12" fill="#eef0f9" textAnchor="middle" fontWeight="700">📧 Email</text>

            <rect x="572" y="128" width="100" height="56" rx="13" fill="rgba(6,182,212,.07)" stroke="rgba(6,182,212,.3)" strokeWidth="1.5" />
            <text x="622" y="160" fontFamily="Inter,sans-serif" fontSize="12" fill="#eef0f9" textAnchor="middle" fontWeight="700">💬 Slack DM</text>

            <rect x="722" y="76" width="122" height="68" rx="13" fill="rgba(16,185,129,.1)" stroke="rgba(16,185,129,.55)" strokeWidth="1.5" />
            <text x="782" y="106" fontFamily="Inter,sans-serif" fontSize="13" fill="#eef0f9" textAnchor="middle" fontWeight="700">📊 Update CRM</text>
            <text x="782" y="124" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(16,185,129,.75)" textAnchor="middle" fontWeight="600">● Executed 2s ago</text>
          </svg>
        </div>
      </section>

      <div className="stats-bar">
        <div>
          <div className="stat-num">47M+</div>
          <div className="stat-lbl">Automations run</div>
        </div>
        <div>
          <div className="stat-num">12,400+</div>
          <div className="stat-lbl">Teams worldwide</div>
        </div>
        <div>
          <div className="stat-num">500+</div>
          <div className="stat-lbl">App integrations</div>
        </div>
        <div>
          <div className="stat-num">99.97%</div>
          <div className="stat-lbl">Uptime SLA</div>
        </div>
        <div>
          <div className="stat-num">18 hrs</div>
          <div className="stat-lbl">Saved per team / week</div>
        </div>
      </div>

      <div className="divider"></div>

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

      <div className="divider"></div>

      <section style={{ background: "rgba(7,9,15,.6)" }}>
        <div className="sec-tag">🤖 AI-powered</div>
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
              <div className="chat-ava">⚡</div>
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

      <div className="divider"></div>

      <section id="integrations" className="center" style={{ background: "rgba(7,9,15,.5)" }}>
        <div className="sec-tag">🔗 Integrations</div>
        <h2 className="sec-title">
          Connect your
          <br />
          <span className="grad2">entire stack</span>
        </h2>
        <p className="sec-sub">500+ integrations ready. If it has an API, AuraFlow connects to it.</p>
        <div className="int-grid">
          {INTEGRATIONS.map(([name, color]) => (
            <div className="int-chip" key={name}>
              <div className="idot" style={{ background: color }}></div>
              {name}
            </div>
          ))}
          <div className="int-chip" style={{ borderColor: "rgba(99,102,241,0.3)", color: "var(--in)" }}>
            <strong>+ 488 more →</strong>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="templates">
        <div className="sec-tag">📋 Templates</div>
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

      <div className="divider"></div>

      <section id="pricing" className="center" style={{ background: "rgba(7,9,15,.5)" }}>
        <div className="sec-tag">💎 Pricing</div>
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

      <div className="divider"></div>

      <section style={{ background: "rgba(7,9,15,.5)" }}>
        <div className="center">
          <div className="sec-tag">❓ FAQ</div>
          <h2 className="sec-title">
            Frequently asked
            <br />
            <span className="grad2">questions</span>
          </h2>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div className="faq-item" key={item.q} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="faq-question">
                {item.q}
                <span className={`faq-icon ${openFaq === i ? "open" : ""}`}>+</span>
              </div>
              <div className={`faq-answer ${openFaq === i ? "open" : ""}`}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <div className="cta-banner">
        <h2>
          Ready to automate
          <br />
          <span className="grad">everything?</span>
        </h2>
        <p>Join 12,400+ teams saving 18+ hours per week with AuraFlow. Start free, no card required.</p>
        <div className="cta-ctas">
          <Link className="btn-hero" to="/register">
            ⚡ Start for free — no card needed
          </Link>
          <a className="btn-hero2" href="mailto:sales@auraflow.io">
            Talk to sales
          </a>
        </div>
      </div>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="nav-logo" href="#home" style={{ fontSize: 17 }}>
              <div className="logo-mark">⚡</div>AuraFlow
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
          <span style={{ color: "var(--in)" }}>Built for the automation generation ⚡</span>
        </div>
      </footer>
    </>
  );
}
