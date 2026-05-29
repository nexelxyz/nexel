import { fontVariables } from "@nexel/ui/fonts";
import "@nexel/ui/styles/globals.css";
import "./globals.css";

import Nav from "@nexel/ui/components/Nav.jsx";
import Footer from "@nexel/ui/components/Footer.jsx";
import BackgroundLayer from "@nexel/ui/components/BackgroundLayer.jsx";
import { ANALYZER_URL, DOCS_URL } from "./site-config.js";

const DESCRIPTION =
  "Sovereign on-chain identity and verifiable reputation for AI agents. Building on Base. Pre-launch — no token, no contracts deployed yet.";

export const metadata = {
  title: "NEXEL · The identity layer for autonomous agents on Base",
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
    url: "https://trynexel.xyz/",
    title: "NEXEL · The identity layer for autonomous agents on Base",
    description: DESCRIPTION,
    siteName: "Nexel",
    images: [{ url: "https://trynexel.xyz/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexelxyz",
    creator: "@nexelxyz",
    title: "NEXEL · The identity layer for autonomous agents on Base",
    description: DESCRIPTION,
    images: ["https://trynexel.xyz/og-image.png"],
  },
};

// Footer columns wired to the centralized destinations (keeps /analyzer +
// Docs consistent with the rest of the landing).
const FOOTER_COLUMNS = [
  {
    heading: "Product",
    items: [
      { label: "Analyzer", href: ANALYZER_URL },
      { label: "Identity Layer", href: "#layer" },
      { label: "Primitives", href: "#product" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Documentation", href: DOCS_URL, external: true },
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <BackgroundLayer />
        <Nav cta={{ label: "Try Now →", href: ANALYZER_URL }} />
        {children}
        <Footer columns={FOOTER_COLUMNS} />
      </body>
    </html>
  );
}
