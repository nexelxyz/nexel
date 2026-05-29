// Animated construction-to-glyph monogram. Pure CSS animation (keyframes in
// globals.css drive .corner / .guide-* / .hexagon / .anchor / .stroke-*),
// so no client JS is required. Geometry identical to the live landing hero.
export default function HeroMonogram() {
  return (
    <div className="hero-monogram" aria-hidden="true">
      <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
        {/* Corner brackets */}
        <g
          className="corners"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.45"
        >
          <path d="M 12 12 L 12 32 M 12 12 L 32 12" className="corner c-tl" />
          <path d="M 308 12 L 308 32 M 308 12 L 288 12" className="corner c-tr" />
          <path d="M 12 308 L 12 288 M 12 308 L 32 308" className="corner c-bl" />
          <path d="M 308 308 L 308 288 M 308 308 L 288 308" className="corner c-br" />
        </g>

        {/* Construction guides */}
        <g
          className="guides"
          stroke="currentColor"
          strokeWidth="0.7"
          fill="none"
          strokeOpacity="0.25"
        >
          <line x1="160" y1="40" x2="160" y2="280" className="guide-v" />
          <line x1="40" y1="160" x2="280" y2="160" className="guide-h" />
          <circle cx="160" cy="160" r="110" className="guide-circle" />
        </g>

        {/* Hexagon outline */}
        <polygon
          points="160,68 240,114 240,206 160,252 80,206 80,114"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.55"
          className="hexagon"
        />

        {/* Inner hexagon */}
        <polygon
          points="160,86 224,123 224,197 160,234 96,197 96,123"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.18"
          className="hexagon-inner"
        />

        {/* Vertex anchor dots */}
        <g className="anchors" fill="currentColor">
          <circle cx="160" cy="68" r="3.5" className="anchor a1" />
          <circle cx="240" cy="114" r="3.5" className="anchor a2" />
          <circle cx="240" cy="206" r="3.5" className="anchor a3" />
          <circle cx="160" cy="252" r="3.5" className="anchor a4" />
          <circle cx="80" cy="206" r="3.5" className="anchor a5" />
          <circle cx="80" cy="114" r="3.5" className="anchor a6" />
        </g>

        {/* The angular N (3 strokes drawn in sequence) */}
        <g
          className="strokes"
          stroke="currentColor"
          strokeWidth="11"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="125" y1="110" x2="125" y2="210" className="stroke-1" />
          <line x1="125" y1="110" x2="195" y2="210" className="stroke-2" />
          <line x1="195" y1="110" x2="195" y2="210" className="stroke-3" />
        </g>
      </svg>
    </div>
  );
}
