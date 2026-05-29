// Shared brand mark (hexagon + angular N). Inlined SVG, currentColor-driven,
// identical geometry to the live site logo.
export function LogoMark() {
  return (
    <span className="logo-mark" aria-label="Nexel">
      <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="14,2 24,8 24,20 14,26 4,20 4,8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <g
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="10" y1="9" x2="10" y2="19" />
          <line x1="10" y1="9" x2="18" y2="19" />
          <line x1="18" y1="9" x2="18" y2="19" />
        </g>
      </svg>
    </span>
  );
}
