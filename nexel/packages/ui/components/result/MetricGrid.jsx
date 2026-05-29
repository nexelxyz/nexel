// 2-up metric grid, identical to the landing Inspector's .inspect-grid.
// cells: [{ label, value, sub }]
export default function MetricGrid({ cells = [] }) {
  return (
    <div className="inspect-grid">
      {cells.map((c, i) => (
        <div className="inspect-cell" key={c.label + i}>
          <div className="inspect-cell-label">{c.label}</div>
          <div className="inspect-cell-val">{c.value}</div>
          {c.sub ? <div className="inspect-cell-sub">{c.sub}</div> : null}
        </div>
      ))}
    </div>
  );
}
