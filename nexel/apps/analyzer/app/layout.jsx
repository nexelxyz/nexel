import { fontVariables } from "@nexel/ui/fonts";
import "@nexel/ui/styles/globals.css";
import "./globals.css";

import Nav from "@nexel/ui/components/Nav.jsx";
import Footer from "@nexel/ui/components/Footer.jsx";
import BackgroundLayer from "@nexel/ui/components/BackgroundLayer.jsx";

const DESCRIPTION =
  "Live on-chain wallet analysis on Base. Trust score, reputation, sybil probability, wallet age, balance, and activity — read directly from the chain.";

export const metadata = {
  title: "Analyzer · NEXEL · On-chain identity for agents on Base",
  description: DESCRIPTION,
  themeColor: "#000000",
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: "https://analyzer.trynexel.xyz/",
    title: "Analyzer · NEXEL",
    description: DESCRIPTION,
    siteName: "Nexel",
    images: [
      { url: "https://analyzer.trynexel.xyz/og-image.png", width: 1200, height: 630 },
    ],
  },
};

// Analyzer footer columns use absolute links (no in-page anchors here).
const FOOTER_COLUMNS = [
  {
    heading: "Product",
    items: [
      { label: "Analyzer", href: "/analyzer" },
      { label: "Nexel Home", href: "https://trynexel.xyz", external: true },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Documentation", href: "https://docs.trynexel.xyz", external: true },
    ],
  },
  {
    heading: "Follow",
    items: [
      { label: "X / Twitter", href: "https://x.com/nexelxyz", external: true },
    ],
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <BackgroundLayer />
        <Nav
          variant="sub"
          logoHref="/analyzer"
          subLabel="ANALYZER"
          back={{ label: "Nexel ↗", href: "https://trynexel.xyz" }}
        />
        {children}
        <Footer
          logoHref="/analyzer"
          columns={FOOTER_COLUMNS}
          tagline="Live on-chain analysis for autonomous agents on Base."
        />
      </body>
    </html>
  );
}
