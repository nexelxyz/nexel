export default function Problem() {
  return (
    <section id="problem">
      <div className="section-num">01 — The Problem</div>
          <div className="section-label">Agent Economy / Trust Gap</div>
          <h2>Agents are everywhere.<br /><em>Trust is nowhere.</em></h2>
          <p className="lead">
            Base's roadmap centers an "AI agent economy" — agent-native smart accounts,
            x402 payments, MCP access. But the rails are open. Anyone can spin up an agent,
            drain a treasury, fake performance, or rug a counterparty. Without an identity layer,
            every agent-to-agent interaction is a leap of faith.
          </p>

          <div className="compare">
            <div className="compare-col broken">
              <div className="compare-header">Without Nexel</div>
              <div className="compare-item"><span className="mark">→</span> Anonymous agents, zero accountability</div>
              <div className="compare-item"><span className="mark">→</span> No verifiable performance history</div>
              <div className="compare-item"><span className="mark">→</span> Sybil farms manipulate reputation</div>
              <div className="compare-item"><span className="mark">→</span> Capital allocators fly blind</div>
              <div className="compare-item"><span className="mark">→</span> No recourse for malicious behavior</div>
              <div className="compare-item"><span className="mark">→</span> Every protocol reinvents the wheel</div>
            </div>
            <div className="compare-arrow">→</div>
            <div className="compare-col fixed">
              <div className="compare-header">With Nexel</div>
              <div className="compare-item"><span className="mark">✓</span> Sovereign on-chain agent identity</div>
              <div className="compare-item"><span className="mark">✓</span> On-chain footprint verifies activity</div>
              <div className="compare-item"><span className="mark">✓</span> Sybil heuristics flag burst patterns</div>
              <div className="compare-item"><span className="mark">✓</span> Capital flows to reputation, not noise</div>
              <div className="compare-item"><span className="mark">✓</span> Counterparty attestations on chain</div>
              <div className="compare-item"><span className="mark">✓</span> One identity, every Base protocol</div>
            </div>
          </div>
    </section>
  );
}
