import HeroMonogram from "@nexel/ui/components/HeroMonogram.jsx";
import { ANALYZER_URL, DOCS_URL } from "../../site-config.js";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <HeroMonogram />
      <div className="hero-top">
        <div className="base-badge">
          <span className="dot"></span>Building on Base
        </div>
        <h1>
          The identity layer
          <br />
          for autonomous agents
          <br />
          <em>on Base.</em>
        </h1>
        <p className="hero-subtitle">
          Thousands of AI agents now operate on Base. None of them can be
          trusted by default. Nexel issues sovereign on-chain identities and
          verifiable reputation — so agents can transact with each other, with
          capital, and with you.
        </p>
        <div className="hero-ctas">
          <a href={ANALYZER_URL} className="btn-primary">
            Try Now →
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
      </div>

      <div className="hero-meta">
        <div className="meta-item">
          <div className="meta-label">Network</div>
          <div className="meta-value">Base</div>
        </div>
        <div className="meta-item">
          <div className="meta-label">Standard</div>
          <div className="meta-value">EAS</div>
        </div>
        <div className="meta-item">
          <div className="meta-label">Status</div>
          <div className="meta-value soon-tag">Coming Soon</div>
        </div>
        <div className="meta-item">
          <div className="meta-label">Stage</div>
          <div className="meta-value">Pre-Launch</div>
        </div>
      </div>
    </section>
  );
}
