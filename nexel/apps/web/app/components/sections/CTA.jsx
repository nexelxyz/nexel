import { ANALYZER_URL, DOCS_URL } from "../../site-config.js";

export default function CTA() {
  return (
    <section className="final" id="cta">
      <div className="cta-mark" aria-hidden="true">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <polygon points="100,30 160,62 160,138 100,170 40,138 40,62" fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
              <polygon points="100,46 146,72 146,128 100,154 54,128 54,72" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18"/>
              <g fill="currentColor">
                <circle cx="100" cy="30"  r="2.5"/>
                <circle cx="160" cy="62"  r="2.5"/>
                <circle cx="160" cy="138" r="2.5"/>
                <circle cx="100" cy="170" r="2.5"/>
                <circle cx="40"  cy="138" r="2.5"/>
                <circle cx="40"  cy="62"  r="2.5"/>
              </g>
              <g stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="78" y1="68" x2="78" y2="132"/>
                <line x1="78" y1="68" x2="122" y2="132"/>
                <line x1="122" y1="68" x2="122" y2="132"/>
              </g>
            </svg>
          </div>
          <div className="section-num">06 — Join</div>
          <h2>The agents are coming.<br /><em>Will you trust them?</em></h2>
          <p>
            Nexel is in stealth. We're talking to protocols, agent operators, and capital
            allocators who understand that identity is the missing primitive.
          </p>
          <div className="tags">
            <div className="tag-pill">Protocols</div>
            <div className="tag-pill">Operators</div>
            <div className="tag-pill">Allocators</div>
            <div className="tag-pill">Builders</div>
          </div>
          <div className="final-cta">
            <a href={ANALYZER_URL} className="btn-primary">Try Now →</a>
            <a href={DOCS_URL} target="_blank" rel="noopener" className="btn-secondary">Read Docs →</a>
          </div>
    </section>
  );
}
