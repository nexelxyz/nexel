"use client";

import { useState } from "react";
import ResultCard from "@nexel/ui/components/result/ResultCard.jsx";

// Lightweight client-side format check for instant feedback. Authoritative
// validation (ethers.isAddress) still happens server-side in /api/analyze.
const ADDR_RE = /^0x[a-fA-F0-9]{40}$/;

export default function Analyzer() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    cls: "",
    node: (
      <>
        → Awaiting address. Paste any Base mainnet address to read its live
        on-chain footprint.
      </>
    ),
  });

  async function analyze() {
    const addr = address.trim();
    if (!ADDR_RE.test(addr)) {
      setStatus({ cls: "", node: "→ Invalid Base address. Expected 0x + 40 hex characters." });
      return;
    }

    setLoading(true);
    setResult(null);
    setStatus({
      cls: "live",
      node: <strong>Querying Base mainnet via Alchemy…</strong>,
    });

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: addr }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to analyze wallet");

      setResult({ address: addr, ...data });
      setStatus({ cls: "", node: "→ Query complete. Data fetched from Base mainnet." });
    } catch (e) {
      setStatus({ cls: "", node: "→ " + (e.message || "Failed to analyze wallet") });
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter") analyze();
  }

  const metrics = result
    ? [
        { label: "Balance", value: `${result.balance} ETH`, sub: "native ETH on Base" },
        { label: "Transactions", value: result.txCount, sub: "total tx count" },
        { label: "Wallet Age", value: result.walletAge, sub: "activity tier" },
        { label: "Reputation", value: result.reputation, sub: "from on-chain activity" },
        { label: "Sybil Probability", value: result.sybil, sub: "lower is safer" },
        { label: "Risk Level", value: result.risk, sub: "from balance" },
      ]
    : [];

  return (
    <main>
      <div className="app-header">
        <div className="app-header-tag">Analyzer · v0.1 · Base Mainnet</div>
        <h1>
          Inspect any agent.
          <br />
          Score any <em>address.</em>
        </h1>
        <p>
          Paste any Base mainnet address. Nexel queries the chain directly
          through Alchemy and returns its real on-chain footprint, trust score,
          and risk signals. No synthetic registry, no mock data.
        </p>
      </div>

      <div className="app-wrap">
        <div className="inspector-input-row">
          <input
            type="text"
            className="form-input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="0x… — any Base mainnet address"
            spellCheck="false"
            autoComplete="off"
          />
          <button
            className="inspect-btn"
            onClick={analyze}
            disabled={loading}
          >
            {loading ? "Analyzing…" : "Analyze →"}
          </button>
        </div>

        <div className={`inspect-status ${status.cls}`}>{status.node}</div>

        {result ? (
          <div style={{ marginTop: "24px" }}>
            <ResultCard
              address={result.address}
              typeLabel="WALLET"
              score={result.score}
              tier="TRUST SCORE"
              metrics={metrics}
              note={
                <>
                  <strong style={{ color: "var(--fg)", letterSpacing: "0.1em" }}>
                    LIVE:
                  </strong>{" "}
                  Balance and transaction count are read from Base mainnet
                  server-side via Alchemy. Score, reputation, sybil, wallet age,
                  and risk are computed by the Nexel analyzer.
                </>
              }
            />
          </div>
        ) : (
          <div className="inspect-empty" style={{ marginTop: "24px" }}>
            <div className="inspect-empty-icon">⌕</div>
            <div
              style={{
                fontFamily: "var(--serif)",
                fontSize: "22px",
                color: "var(--fg-dim)",
                marginBottom: "8px",
              }}
            >
              No address analyzed yet
            </div>
            <div style={{ fontSize: "12px" }}>
              Enter an address above to see live on-chain analysis.
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
