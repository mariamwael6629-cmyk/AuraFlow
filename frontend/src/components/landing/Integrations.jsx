import { INTEGRATIONS } from "../../data/landing";

export default function Integrations() {
  return (
    <section id="integrations" className="center" style={{ background: "rgba(244,241,234,.5)" }}>
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
        <div className="int-chip" style={{ borderColor: "rgba(194,65,12,0.3)", color: "var(--in)" }}>
          <strong>+ 488 more →</strong>
        </div>
      </div>
    </section>
  );
}
