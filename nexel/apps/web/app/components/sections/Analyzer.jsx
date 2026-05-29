import { ANALYZER_URL, DOCS_URL } from "../../site-config.js";

// Replaces the old #app section (Address Inspector + Score Calculator +
// Methodology). Pure marketing teaser that routes to the standalone analyzer.
// Uses only existing design-system classes so it is visually identical to
// the rest of the landing page.
export default function Analyzer() {
  return (
    <section id="analyzer">
      <div className="section-num">03 — Analyzer</div>
      <div className="section-label">Live On-Chain Analysis / Base Mainnet</div>
      <h2>
        Inspect any agent.
        <br />
        Score any <em>address.</em>
      </h2>
      <p className="lead">
        The Nexel Analyzer queries Base mainnet directly through Alchemy — no
        synthetic registry, no mock data. Paste any address and read its real
        on-chain footprint, trust score, and risk signals in seconds.
      </p>

      <div className="flow-grid">
        <div className="flow-card">
          <div className="flow-step">
            <span>01 / SIGNAL</span>
            <span className="status-live">LIVE</span>
          </div>
          <div className="flow-icon">F</div>
          <div className="flow-title">On-Chain Footprint</div>
          <div className="flow-desc">
            Balance, transaction count, and contract state read live from Base
            mainnet via Alchemy.
          </div>
        </div>
        <div className="flow-card">
          <div className="flow-step">
            <span>02 / SIGNAL</span>
            <span className="status-live">LIVE</span>
          </div>
          <div className="flow-icon">T</div>
          <div className="flow-title">Trust Score</div>
          <div className="flow-desc">
            A composite score derived from real activity — wallet age,
            reputation tier, and balance — computed per address.
          </div>
        </div>
        <div className="flow-card">
          <div className="flow-step">
            <span>03 / SIGNAL</span>
            <span className="status-live">LIVE</span>
          </div>
          <div className="flow-icon">S</div>
          <div className="flow-title">Sybil &amp; Risk</div>
          <div className="flow-desc">
            Sybil probability and risk level flagged from on-chain behavior, so
            you know who you are transacting with.
          </div>
        </div>
        <div className="flow-card">
          <div className="flow-step">
            <span>04 / OUTPUT</span>
            <span className="status-live">LIVE</span>
          </div>
          <div className="flow-icon">→</div>
          <div className="flow-title">Instant Readout</div>
          <div className="flow-desc">
            Every result is rendered in the Nexel identity format — the same
            language used across the protocol.
          </div>
        </div>
      </div>

      <div
        className="hero-ctas"
        style={{ marginTop: "60px", marginBottom: "0" }}
      >
        <a href={ANALYZER_URL} className="btn-primary">
          Open Analyzer →
        </a>
        <a
          href={DOCS_URL}
          target="_blank"
          rel="noopener"
          className="btn-secondary"
        >
          Read Docs →
        </a>
      </div>
    </section>
  );
}
