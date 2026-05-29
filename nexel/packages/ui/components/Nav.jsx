import { LogoMark } from "./Logo.jsx";

// Default landing nav links. Note: the old "03 App" entry is now "03 Analyzer"
// since the App section (Inspector + Calculator) is replaced by the Analyzer
// section. Docs link is preserved verbatim.
const DEFAULT_LINKS = [
  { label: "01 Problem", href: "#problem" },
  { label: "02 Product", href: "#product" },
  { label: "03 Analyzer", href: "#analyzer" },
  { label: "04 Identity", href: "#layer" },
  { label: "05 Docs", href: "https://docs.trynexel.xyz", external: true },
  { label: "06 Research", href: "#research" },
];

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/**
 * Shared top navigation. Identical styling for both apps.
 *
 * variant="landing": logo + section links + social + CTA   (trynexel.xyz)
 * variant="sub":     logo + sublabel + social + back button (analyzer.trynexel.xyz)
 */
export default function Nav({
  variant = "landing",
  logoHref = "#hero",
  links = DEFAULT_LINKS,
  cta = { label: "Try Now →", href: "#analyzer" },
  back = { label: "Nexel ↗", href: "https://trynexel.xyz" },
  subLabel = null,
  social = { x: "https://x.com/nexelxyz" },
  showSocial = true,
}) {
  return (
    <nav>
      <a href={logoHref} className="logo">
        <LogoMark />
        NEXEL
        {subLabel ? <span className="logo-sub">{subLabel}</span> : null}
      </a>

      {variant === "landing" ? (
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href + l.label}>
              <a
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener" }
                  : {})}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="nav-right">
        {showSocial && social?.x ? (
          <a
            href={social.x}
            target="_blank"
            rel="noopener"
            className="nav-icon"
            aria-label="Nexel on X"
          >
            <XIcon />
          </a>
        ) : null}

        {variant === "landing" ? (
          <a
            href={cta.href}
            className="nav-cta"
            {...(cta.external ? { target: "_blank", rel: "noopener" } : {})}
          >
            {cta.label}
          </a>
        ) : (
          <a
            href={back.href}
            className="nav-back"
            {...(back.external !== false
              ? { target: "_blank", rel: "noopener" }
              : {})}
          >
            {back.label}
          </a>
        )}
      </div>
    </nav>
  );
}
