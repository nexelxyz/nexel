// Single source of truth for outbound destinations used across the landing.
//
// ANALYZER_URL is intentionally "/analyzer" per the current requirement.
// For the production subdomain split, change this ONE line to
//   "https://analyzer.trynexel.xyz"
// (or add a Next redirect from /analyzer -> the subdomain). Nothing else
// in the landing needs to change.
export const ANALYZER_URL = "https://analyzer.trynexel.xyz";

// Docs destination — DO NOT CHANGE (must stay identical to the live site).
export const DOCS_URL = "https://docs.trynexel.xyz";
