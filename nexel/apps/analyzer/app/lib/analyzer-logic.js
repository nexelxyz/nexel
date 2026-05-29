// =====================================================================
// Nexel Analyzer — scoring logic.
//
// PRESERVED VERBATIM from the original analyzer (app/analyzer/page.js).
// Thresholds, branches, order of evaluation, and the score formula are
// byte-for-byte identical. DO NOT modify reputation / sybil / wallet age /
// risk / score computations.
// =====================================================================

/**
 * Derive the qualitative + numeric analysis from on-chain primitives.
 * @param {{ txCount: number, balance: string|number }} input
 *   balance is the ETH-formatted string from ethers.formatEther (as before).
 */
export function deriveAnalysis({ txCount, balance }) {
  let walletAge = "New";
  if (txCount > 20) {
    walletAge = "Medium";
  }
  if (txCount > 100) {
    walletAge = "Old";
  }

  let reputation = "Low";
  if (txCount > 20) {
    reputation = "Good";
  }
  if (txCount > 100) {
    reputation = "Excellent";
  }

  let sybil = "High";
  if (txCount > 20) {
    sybil = "Medium";
  }
  if (txCount > 100) {
    sybil = "Low";
  }

  let risk = "High";
  if (Number(balance) > 0.1) {
    risk = "Medium";
  }
  if (Number(balance) > 1) {
    risk = "Low";
  }

  const score = Math.min(100, Math.floor(txCount / 5 + Number(balance) * 10));

  return { walletAge, reputation, sybil, risk, score };
}
