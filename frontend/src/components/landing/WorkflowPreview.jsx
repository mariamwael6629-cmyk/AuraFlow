export default function WorkflowPreview() {
  return (
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
  );
}
