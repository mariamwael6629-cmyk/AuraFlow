import { useState } from "react";
import { FAQS } from "../../data/landing";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section style={{ background: "rgba(244,241,234,.5)" }}>
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
  );
}
