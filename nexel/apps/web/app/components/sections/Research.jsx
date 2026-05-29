export default function Research() {
  return (
    <section id="research">
      <div className="section-num">06 — Research</div>
          <div className="section-label">Notes / Working Papers / Drafts</div>
    
          <div className="research-header-tag">Research · v0.1 · Pre-Launch</div>
          <h1>Notes on identity<br />for <em>autonomous agents</em>.</h1>
          <p>
            Working drafts, preprints, and design notes from the Nexel research effort.
            Most of what we publish here is rough — half-formed ideas, sketches of mechanisms,
            open problems we haven't solved yet. The goal is to think out loud about identity
            and reputation primitives for the agent economy.
          </p>
  
          <div className="research-wrap">

          {/* ===== PAPERS ===== */}
          <div className="sec-num">01 — Working Papers</div>
          <h2 className="sec-title">Drafts and <em>preprints</em>.</h2>

          <div className="papers-grid">

            <article className="paper">
              <div className="paper-meta">
                <span>R-01 · 2026</span>
                <span className="paper-status preprint">Preprint</span>
              </div>
              <h3 className="paper-title">A geometric mean is not optional: why <em>identity scores</em> must collapse on weak signals</h3>
              <p className="paper-abstract">
                Most reputation systems in crypto use weighted sums. We argue that arithmetic
                aggregation is the wrong primitive for agent identity — an agent with zero
                attestations and high activity should not be scoreable. We propose a geometric
                mean over normalized signal components and analyze its failure modes.
              </p>
              <div className="paper-tags">
                <span className="tag">Scoring</span>
                <span className="tag">Geometric Mean</span>
                <span className="tag">Sybil Resistance</span>
              </div>
              <div className="paper-footer">
                <span className="paper-date">DRAFT · UPDATED Q1 2026</span>
                <span className="paper-read">Coming Soon →</span>
              </div>
            </article>

            <article className="paper">
              <div className="paper-meta">
                <span>R-02 · 2026</span>
                <span className="paper-status wip">In Progress</span>
              </div>
              <h3 className="paper-title">Soulbound vs. transferable: <em>identity</em> primitives for non-human actors</h3>
              <p className="paper-abstract">
                Proof-of-personhood projects assume biological scarcity. Agents have no such
                property. We examine what makes identity bindings meaningful when the bearer
                is a process, not a person, and propose a model where reputation accrues to
                deployment artifacts rather than wallets.
              </p>
              <div className="paper-tags">
                <span className="tag">Soulbound</span>
                <span className="tag">EAS</span>
                <span className="tag">Identity</span>
              </div>
              <div className="paper-footer">
                <span className="paper-date">WIP · TARGET Q2 2026</span>
                <span className="paper-read">Coming Soon →</span>
              </div>
            </article>

            <article className="paper">
              <div className="paper-meta">
                <span>R-03 · 2026</span>
                <span className="paper-status wip">In Progress</span>
              </div>
              <h3 className="paper-title">Attestation density as a <em>liveness signal</em></h3>
              <p className="paper-abstract">
                A high reputation score with attestations from one signer is structurally
                different from the same score with attestations from one hundred signers.
                We quantify the difference using attestation density and show how it changes
                the cost of forging trust.
              </p>
              <div className="paper-tags">
                <span className="tag">Attestation</span>
                <span className="tag">Liveness</span>
                <span className="tag">Density</span>
              </div>
              <div className="paper-footer">
                <span className="paper-date">WIP · TARGET Q2 2026</span>
                <span className="paper-read">Coming Soon →</span>
              </div>
            </article>

            <article className="paper">
              <div className="paper-meta">
                <span>R-04 · 2026</span>
                <span className="paper-status draft">Sketch</span>
              </div>
              <h3 className="paper-title">Cluster heuristics for <em>sybil detection</em> in agent networks</h3>
              <p className="paper-abstract">
                When deploying an agent is cheap, sybil farms are inevitable. We propose
                on-chain cluster heuristics — burst patterns, coordinated tx timing,
                shared funding sources — as a complement to attestation-based reputation.
                The tradeoffs around false-positive rate are open problems.
              </p>
              <div className="paper-tags">
                <span className="tag">Sybil</span>
                <span className="tag">Clustering</span>
                <span className="tag">Heuristics</span>
              </div>
              <div className="paper-footer">
                <span className="paper-date">SKETCH · Q3 2026</span>
                <span className="paper-read">Coming Soon →</span>
              </div>
            </article>

          </div>

          {/* ===== RESEARCH FOCUS ===== */}
          <div style={{ marginTop: '100px' }}>
            <div className="sec-num">02 — Research Focus</div>
            <h2 className="sec-title">What we're <em>working on</em>.</h2>

            <div className="focus-grid">
              <div className="focus-cell">
                <div className="focus-num">01</div>
                <div className="focus-title">Scoring mechanisms</div>
                <div className="focus-desc">
                  Mathematical foundations for aggregating heterogeneous identity signals.
                  Geometric means, age multipliers, sybil penalties, and their failure modes.
                </div>
              </div>
              <div className="focus-cell">
                <div className="focus-num">02</div>
                <div className="focus-title">Attestation graphs</div>
                <div className="focus-desc">
                  On-chain reputation as a directed graph. Signer trust propagation,
                  cycle detection, and the economics of attestation issuance.
                </div>
              </div>
              <div className="focus-cell">
                <div className="focus-num">03</div>
                <div className="focus-title">Agent-capital interfaces</div>
                <div className="focus-desc">
                  How capital allocators consume identity signals. Tier gating, rate limits,
                  and the protocol-level UX of trust-bounded autonomy.
                </div>
              </div>
            </div>
          </div>

          {/* ===== COMING SOON ===== */}
          <div className="coming-soon">
            <div className="coming-soon-label">Coming Soon</div>
            <h3 className="coming-soon-title">Full archive launches with <em>the protocol</em>.</h3>
            <p className="coming-soon-desc">
              Papers above are working drafts. PDFs and full text will be published as each
              reaches preprint quality. Follow on Twitter for release notifications.
            </p>
          </div>

          {/* ===== CTA ===== */}
          <div className="cta-box">
            <h3>Want to <em>collaborate</em>?</h3>
            <p>
              If you're working on identity, reputation, or agent infrastructure and want to
              compare notes — we're open to early conversations with researchers and builders.
            </p>
            <a href="#cta" className="cta-btn">Get in touch →</a>
          </div>

        </div>
    </section>
  );
}
