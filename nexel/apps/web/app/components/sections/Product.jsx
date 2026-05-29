export default function Product() {
  return (
    <section id="product">
      <div className="section-num">02 — The Product</div>
          <div className="section-label">Identity / Reputation / Verification</div>
          <h2>Four primitives that<br />make agents <em>trustable</em>.</h2>
          <p className="lead">
            Nexel is not a wallet. Not a registry. It's the cryptographic substrate that lets
            agents prove who they are, what they've done, and how they behave.
          </p>

          <div className="flow-grid">
            <div className="flow-card">
              <div className="flow-step"><span>01 / PRIMITIVE</span><span className="status-coming-soon">COMING SOON</span></div>
              <div className="flow-icon">I</div>
              <div className="flow-title">Sovereign Identity</div>
              <div className="flow-desc">
                Soulbound NFT identity per agent. Operator-bound via signed attestation.
                Portable across smart accounts. Revocable by holder.
              </div>
            </div>
            <div className="flow-card">
              <div className="flow-step"><span>02 / PRIMITIVE</span><span className="status-coming-soon">COMING SOON</span></div>
              <div className="flow-icon">R</div>
              <div className="flow-title">Reputation Graph</div>
              <div className="flow-desc">
                On-chain attestations from counterparties, protocols, and outcomes.
                Designed for EAS schemas. Cryptographically verifiable post-deployment.
              </div>
            </div>
            <div className="flow-card">
              <div className="flow-step"><span>03 / PRIMITIVE</span><span className="status-live">LIVE</span></div>
              <div className="flow-icon">F</div>
              <div className="flow-title">On-Chain Footprint</div>
              <div className="flow-desc">
                Real activity verified from chain state. Tx count, balance, age,
                contract interactions. Sourced live from Base RPC.
              </div>
            </div>
            <div className="flow-card">
              <div className="flow-step"><span>04 / PRIMITIVE</span><span className="status-coming-soon">COMING SOON</span></div>
              <div className="flow-icon">A</div>
              <div className="flow-title">Audit Receipts</div>
              <div className="flow-desc">
                Every agent action emits a signed receipt. Intent, context, outcome,
                counterparty. Tamper-evident. Exportable. Permanent.
              </div>
            </div>
          </div>

          <div className="receipt">
            <div className="receipt-header">
              <span>SAMPLE RECEIPT FORMAT</span>
              <span className="status-coming-soon">COMING SOON</span>
            </div>
            <div className="receipt-row">
              <div className="receipt-key">Agent ID</div>
              <div className="receipt-val">nexel://&lt;agent-address&gt; <span className="tag">VERIFIED</span></div>
            </div>
            <div className="receipt-row">
              <div className="receipt-key">Intent</div>
              <div className="receipt-val">Execute LP rebalance on Aerodrome cbETH / ETH</div>
            </div>
            <div className="receipt-row">
              <div className="receipt-key">Authority Tier</div>
              <div className="receipt-val">Tier 3 — Bounded autonomous, max $50k notional</div>
            </div>
            <div className="receipt-row">
              <div className="receipt-key">Outcome</div>
              <div className="receipt-val">+0.34% net of gas — counterparty attestation signed</div>
            </div>
            <div className="receipt-row">
              <div className="receipt-key">Reputation Δ</div>
              <div className="receipt-val">+12 points — 847 lifetime — top 4.2%</div>
            </div>
            <div className="receipt-footnote">
              Illustrative format. Live receipts emit once attestation contracts deploy on Base.
            </div>
          </div>
    </section>
  );
}
