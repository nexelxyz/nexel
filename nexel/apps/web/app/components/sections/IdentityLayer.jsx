export default function IdentityLayer() {
  return (
    <section id="layer">
      <div className="section-num">04 — Identity Layer</div>
          <div className="section-label">Where Nexel sits in the stack</div>
          <h2>Identity is missing<br />from <em>every</em> agent stack.</h2>
          <p className="lead">
            Existing agent frameworks ship execution. None ship identity. Nexel is the
            horizontal layer underneath: protocol-agnostic, framework-agnostic, chain-anchored to Base.
          </p>

          <div className="taxonomy-wrap">
            <table className="tax-table">
              <thead>
                <tr>
                  <th>Layer</th>
                  <th>Examples</th>
                  <th>Identity</th>
                  <th>Reputation</th>
                  <th>Verification</th>
                  <th>Audit Trail</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-tier">L1 · Compute</td>
                  <td>Model providers</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td>Inference</td>
                </tr>
                <tr>
                  <td className="row-tier">L2 · Framework</td>
                  <td>Agent SDKs</td>
                  <td className="mid">◊</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td className="mid">◊</td>
                  <td>Tooling</td>
                </tr>
                <tr>
                  <td className="row-tier">L3 · Launchpad</td>
                  <td>Agent tokens</td>
                  <td className="mid">◊</td>
                  <td className="mid">◊</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td>Deploy</td>
                </tr>
                <tr>
                  <td className="row-tier">L4 · Settlement</td>
                  <td>Payment rails</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td className="no">—</td>
                  <td className="mid">◊</td>
                  <td>Transact</td>
                </tr>
                <tr className="highlight">
                  <td className="row-tier">L5 · Identity</td>
                  <td><strong>NEXEL</strong></td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                  <td className="yes">✓</td>
                  <td>Trust</td>
                </tr>
              </tbody>
            </table>
          </div>
    </section>
  );
}
