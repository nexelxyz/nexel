import { LogoMark } from "./Logo.jsx";

// Default footer columns reflecting the post-refactor IA: the old Tools column
// (Address Inspector / Score Calculator / Methodology) is replaced by a single
// link to the Analyzer subdomain. Resources & Follow are preserved.
const DEFAULT_COLUMNS = [
  {
    heading: "Product",
    items: [
      { label: "Analyzer", href: "https://analyzer.trynexel.xyz", external: true },
      { label: "Identity Layer", href: "#layer" },
      { label: "Primitives", href: "#product" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Documentation", href: "https://docs.trynexel.xyz", external: true },
      { label: "Research", href: "#research" },
    ],
  },
  {
    heading: "Follow",
    items: [
      { label: "X / Twitter", href: "https://x.com/nexelxyz", external: true },
    ],
  },
];

export default function Footer({
  logoHref = "#hero",
  tagline = "The identity and reputation layer for autonomous agents on Base. Built for the agent economy.",
  columns = DEFAULT_COLUMNS,
}) {
  return (
    <footer>
      <div className="foot-brand">
        <a href={logoHref} className="logo">
          <LogoMark />
          NEXEL
        </a>
        <p className="foot-tag">{tagline}</p>
      </div>

      {columns.map((col) => (
        <div className="foot-col" key={col.heading}>
          <h4>{col.heading}</h4>
          <ul>
            {col.items.map((it) => (
              <li key={it.href + it.label}>
                <a
                  className="item"
                  href={it.href}
                  {...(it.external
                    ? { target: "_blank", rel: "noopener" }
                    : {})}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="foot-bottom">
        <span>© 2026 NEXEL</span>
        <span>BUILT ON BASE</span>
      </div>
    </footer>
  );
}
