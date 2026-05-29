import MetricGrid from "./MetricGrid.jsx";
import SignalRow from "./SignalRow.jsx";

// Full result panel, identical to the landing Inspector's .inspect-result.
// Generic and data-source-agnostic so the analyzer can feed its own values.
//
// props:
//   address   string
//   typeLabel string  (e.g. "EOA" | "SMART CONTRACT")
//   score     number|string
//   tier      string  (e.g. "TIER II · VERIFIED")
//   metrics   [{ label, value, sub }]
//   signals   [{ mark, cls, text, pts }]
//   note      ReactNode  (optional footnote)
export default function ResultCard({
  address,
  typeLabel = "EOA",
  score,
  tier,
  metrics = [],
  signals = [],
  note = null,
}) {
  return (
    <div className="inspect-result">
      <div className="inspect-header">
        <div>
          <div className="inspect-addr-label">Inspected Address</div>
          <div className="inspect-addr">{address}</div>
          <div
            style={{
              fontSize: "10px",
              color: "var(--fg-faint)",
              marginTop: "6px",
              letterSpacing: "0.1em",
            }}
          >
            {typeLabel} · BASE MAINNET
          </div>
        </div>
        <div className="inspect-score">
          <div className="inspect-score-num">{score}</div>
          <div className="inspect-score-tier">{tier}</div>
        </div>
      </div>

      {metrics.length ? <MetricGrid cells={metrics} /> : null}

      {signals.length ? (
        <div className="inspect-signals">
          <div className="signals-header">Signal Breakdown</div>
          {signals.map((s, i) => (
            <SignalRow key={i} {...s} />
          ))}
        </div>
      ) : null}

      {note ? (
        <div
          style={{
            marginTop: "28px",
            padding: "16px 20px",
            border: "1px dashed var(--line-strong)",
            fontSize: "11px",
            color: "var(--fg-faint)",
            lineHeight: 1.7,
          }}
        >
          {note}
        </div>
      ) : null}
    </div>
  );
}
