// One signal line, identical to the landing Inspector's .signal-row.
// { mark, cls, text, pts } — cls: "" | "pos" | "neg" | "warn"
export default function SignalRow({ mark, cls = "", text, pts }) {
  const ptsClass = cls === "pos" || cls === "" ? "pos" : "";
  return (
    <div className="signal-row">
      <span className={`signal-mark ${cls}`}>{mark}</span>
      <span className="signal-text">{text}</span>
      <span className={`signal-pts ${ptsClass}`}>{pts}</span>
    </div>
  );
}
