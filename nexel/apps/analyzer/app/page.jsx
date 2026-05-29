import { redirect } from "next/navigation";

// The analyzer subdomain root redirects to the tool at /analyzer.
export default function Home() {
  redirect("/analyzer");
}
