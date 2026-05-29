import { NextResponse } from "next/server";
import { ethers } from "ethers";
import { deriveAnalysis } from "../../lib/analyzer-logic.js";

// Server-side only. The Alchemy key lives in process.env.ALCHEMY_API_KEY
// (NO NEXT_PUBLIC_ prefix) so it is never shipped to the browser.
// The on-chain reads (getBalance / getTransactionCount) and the validation
// (ethers.isAddress) are identical to the original client implementation —
// they have simply moved from the browser into this route.
export async function POST(request) {
  try {
    const { address } = await request.json();

    if (!ethers.isAddress(address)) {
      return NextResponse.json({ error: "Invalid wallet" }, { status: 400 });
    }

    const provider = new ethers.JsonRpcProvider(
      "https://base-mainnet.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY
    );

    const balanceWei = await provider.getBalance(address);
    const balance = ethers.formatEther(balanceWei);
    const txCount = await provider.getTransactionCount(address);

    const derived = deriveAnalysis({ txCount, balance });

    // Same result shape the UI consumed before: balance, txCount, walletAge,
    // reputation, sybil, risk, score.
    return NextResponse.json({ balance, txCount, ...derived });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Failed to analyze wallet" },
      { status: 500 }
    );
  }
}
