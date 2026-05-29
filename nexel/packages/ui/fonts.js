import { JetBrains_Mono, Fraunces } from "next/font/google";

// Mirrors the exact weights the live landing page loaded via Google Fonts:
// JetBrains Mono 300;400;500;600  ·  Fraunces 300;400;500;600;700 (italic incl.)
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// Convenience: spread onto <html className={...}> to expose both CSS vars.
export const fontVariables = `${jetbrainsMono.variable} ${fraunces.variable}`;
