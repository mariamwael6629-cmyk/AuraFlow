import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const FAQS = [
  {
    q: "Do I need to know how to code?",
    a: "Not at all. AuraFlow is built for everyone, from developers to business users. Our visual canvas and AI assistant let you build complex automations without writing code.",
  },
  {
    q: "How does the AI workflow generator work?",
    a: "Describe what you want to automate in plain English. Our AI interprets your intent, identifies the right apps and triggers, and builds the entire workflow. You review, adjust and activate it, usually in under 60 seconds.",
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
          <div className="logo-mark" aria-hidden="true"></div>
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
          <div className="badge-dot"></div> Powered by AI · v3.0
        </div>
        <h1>
          Automate Everything.
          <br />
          <span className="grad">Build Smarter Flows.</span>
        </h1>
        <p>
          Write what should happen in plain English and AuraFlow turns it into a running
          automation. Connect 500+ apps, put jobs on a schedule, and watch every run live.
        </p>
        <div className="hero-ctas">
          <Link className="btn-hero" to="/register">
            Start building, free
          </Link>
          <Link className="btn-hero2" to="/login">
            View the live dashboard
          </Link>
        </div>

        <div className="canvas-wrap">
          <div className="canvas-topbar">
                        <span className="canvas-title">Customer Onboarding Automation</span>
            <span className="canvas-running">Live</span>
            <span className="canvas-meta">6 nodes · 99.8% success · 1.2s avg</span>
          </div>
          <svg className="wf-svg" viewBox="0 0 920 220" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="warp" width="10" height="220" patternUnits="userSpaceOnUse"><line x1="5" y1="0" x2="5" y2="220" stroke="rgba(42,36,32,.07)" strokeWidth="1" /></pattern>
            </defs>
            <rect width="920" height="220" fill="#FBF9F5" />
            <rect width="920" height="220" fill="url(#warp)" />
            <path d="M152 110 L222 110" fill="none" stroke="#23395B" strokeOpacity=".25" strokeWidth="7" strokeLinecap="round" />
            <path d="M152 110 L222 110" fill="none" stroke="#23395B" strokeWidth="3" strokeLinecap="round" strokeDasharray="9 6" className="fl" />
            <path d="M322 110 C 352 110, 362 76, 392 76" fill="none" stroke="#B88A1E" strokeOpacity=".25" strokeWidth="7" strokeLinecap="round" />
            <path d="M322 110 C 352 110, 362 76, 392 76" fill="none" stroke="#B88A1E" strokeWidth="3" strokeLinecap="round" strokeDasharray="9 6" className="fl2" />
            <path d="M322 110 C 352 110, 362 144, 392 144" fill="none" stroke="#23395B" strokeOpacity=".25" strokeWidth="7" strokeLinecap="round" />
            <path d="M322 110 C 352 110, 362 144, 392 144" fill="none" stroke="#23395B" strokeWidth="3" strokeLinecap="round" strokeDasharray="9 6" className="fl" />
            <path d="M502 76 C 532 76, 542 92, 572 92" fill="none" stroke="#B0412E" strokeOpacity=".25" strokeWidth="7" strokeLinecap="round" />
            <path d="M502 76 C 532 76, 542 92, 572 92" fill="none" stroke="#B0412E" strokeWidth="3" strokeLinecap="round" strokeDasharray="9 6" className="fl2" />
            <path d="M502 144 C 532 144, 542 156, 572 156" fill="none" stroke="#23395B" strokeOpacity=".25" strokeWidth="7" strokeLinecap="round" />
            <path d="M502 144 C 532 144, 542 156, 572 156" fill="none" stroke="#23395B" strokeWidth="3" strokeLinecap="round" strokeDasharray="9 6" className="fl" />
            <path d="M672 92 C 697 92, 697 110, 722 110" fill="none" stroke="#4F7A3A" strokeOpacity=".25" strokeWidth="7" strokeLinecap="round" />
            <path d="M672 92 C 697 92, 697 110, 722 110" fill="none" stroke="#4F7A3A" strokeWidth="3" strokeLinecap="round" strokeDasharray="9 6" className="fl" />
            <path d="M672 156 C 697 156, 697 110, 722 110" fill="none" stroke="#4F7A3A" strokeOpacity=".25" strokeWidth="7" strokeLinecap="round" />
            <path d="M672 156 C 697 156, 697 110, 722 110" fill="none" stroke="#4F7A3A" strokeWidth="3" strokeLinecap="round" strokeDasharray="9 6" className="fl2" />
            <rect x="22" y="76" width="130" height="68" rx="3" fill="#FBF9F5" stroke="#2A2420" strokeWidth="1.5" />
            <rect x="22" y="76" width="6" height="68" fill="#23395B" />
            <text x="90.0" y="106.0" fontFamily="Karla,sans-serif" fontSize="13" fill="#2A2420" textAnchor="middle" fontWeight="700">Webhook</text>
            <text x="90.0" y="124.0" fontFamily="Karla,sans-serif" fontSize="10.5" fill="#7A716A" textAnchor="middle" fontWeight="600">New signup event</text>
            <rect x="222" y="76" width="100" height="68" rx="3" fill="#FBF9F5" stroke="#2A2420" strokeWidth="1.5" />
            <rect x="222" y="76" width="6" height="68" fill="#B88A1E" />
            <text x="275.0" y="106.0" fontFamily="Karla,sans-serif" fontSize="13" fill="#2A2420" textAnchor="middle" fontWeight="700">Branch</text>
            <text x="275.0" y="124.0" fontFamily="Karla,sans-serif" fontSize="10.5" fill="#7A716A" textAnchor="middle" fontWeight="600">Plan check</text>
            <rect x="392" y="46" width="110" height="60" rx="3" fill="#FBF9F5" stroke="#2A2420" strokeWidth="1.5" />
            <rect x="392" y="46" width="6" height="60" fill="#B0412E" />
            <text x="450.0" y="81.0" fontFamily="Karla,sans-serif" fontSize="13" fill="#2A2420" textAnchor="middle" fontWeight="700">Personalise</text>
            <rect x="392" y="114" width="110" height="60" rx="3" fill="#FBF9F5" stroke="#2A2420" strokeWidth="1.5" />
            <rect x="392" y="114" width="6" height="60" fill="#23395B" />
            <text x="450.0" y="149.0" fontFamily="Karla,sans-serif" fontSize="13" fill="#2A2420" textAnchor="middle" fontWeight="700">Slack</text>
            <rect x="572" y="62" width="100" height="60" rx="3" fill="#FBF9F5" stroke="#2A2420" strokeWidth="1.5" />
            <rect x="572" y="62" width="6" height="60" fill="#4F7A3A" />
            <text x="625.0" y="97.0" fontFamily="Karla,sans-serif" fontSize="13" fill="#2A2420" textAnchor="middle" fontWeight="700">Email</text>
            <rect x="572" y="128" width="100" height="56" rx="3" fill="#FBF9F5" stroke="#2A2420" strokeWidth="1.5" />
            <rect x="572" y="128" width="6" height="56" fill="#23395B" />
            <text x="625.0" y="161.0" fontFamily="Karla,sans-serif" fontSize="13" fill="#2A2420" textAnchor="middle" fontWeight="700">Slack DM</text>
            <rect x="722" y="76" width="122" height="68" rx="3" fill="#FBF9F5" stroke="#2A2420" strokeWidth="1.5" />
            <rect x="722" y="76" width="6" height="68" fill="#4F7A3A" />
            <text x="786.0" y="106.0" fontFamily="Karla,sans-serif" fontSize="13" fill="#2A2420" textAnchor="middle" fontWeight="700">Update CRM</text>
            <text x="786.0" y="124.0" fontFamily="Karla,sans-serif" fontSize="10.5" fill="#4F7A3A" textAnchor="middle" fontWeight="600">Executed 2s ago</text>
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
        <div className="sec-tag">Platform</div>
        <h2 className="sec-title">
          Everything you need to
          <br />
          <span className="grad2">automate your business</span>
        </h2>
        <p className="sec-sub">
          Two-step flows and large automations across teams run on the same canvas, with no
          code.
        </p>
        <div className="feat-grid">
          <div className="feat-card">
            <div className="feat-icon fi-indigo"><Icon name="canvas" /></div>
            <h3>Visual Workflow Builder</h3>
            <p>Drag-and-drop canvas with animated node connections and conditional branches.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon fi-pink"><Icon name="spark" /></div>
            <h3>AI Automation Assistant</h3>
            <p>Describe your workflow in plain English and get a running automation in seconds.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon fi-cyan"><Icon name="link" /></div>
            <h3>App Integrations Hub</h3>
            <p>Connect 500+ apps including Slack, Salesforce, Gmail, Stripe, and any REST API.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon fi-emerald"><Icon name="pulse" /></div>
            <h3>Real-time Monitoring</h3>
            <p>Watch automations execute live and get AI-powered diagnostics on failures.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon fi-amber"><Icon name="clock" /></div>
            <h3>Smart Scheduler</h3>
            <p>Time-based, event-driven, and API-triggered automations in one place.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon fi-teal"><Icon name="users" /></div>
            <h3>Team Collaboration</h3>
            <p>Shared workspaces, role-based permissions, and full version history.</p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section style={{ background: "rgba(242, 238, 230,.6)" }}>
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
              maps the data, and builds the whole workflow. You review it and switch it on.
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
              <div className="chat-ava" aria-hidden="true"></div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>AuraFlow AI</div>
                <div style={{ fontSize: 11, color: "var(--em)" }}>Online</div>
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

      <section id="integrations" className="center" style={{ background: "rgba(242, 238, 230,.5)" }}>
        <div className="sec-tag">Integrations</div>
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
          <div className="int-chip" style={{ borderColor: "rgba(35, 57, 91,0.3)", color: "var(--in)" }}>
            <strong>+ 488 more</strong>
          </div>
        </div>
      </section>

      <div className="divider"></div>

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
            Browse all 100+ templates
          </Link>
        </div>
      </section>

      <div className="divider"></div>

      <section id="pricing" className="center" style={{ background: "rgba(242, 238, 230,.5)" }}>
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
            <div className="price-badge">Most popular</div>
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

      <section style={{ background: "rgba(242, 238, 230,.5)" }}>
        <div className="center">
          <div className="sec-tag">FAQ</div>
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
            Start for free, no card needed
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
              <div className="logo-mark" aria-hidden="true"></div>AuraFlow
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
          <span style={{ color: "var(--in)" }}>Built for teams that automate</span>
        </div>
      </footer>
    </>
  );
}
