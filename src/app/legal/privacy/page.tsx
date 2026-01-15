import type { Metadata } from "next";
import { Markdown } from "@/components/ui/markdown";
import { readLegalMarkdown } from "../_lib/read-legal-markdown";

export const runtime = "nodejs";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy - Moldable",
  description: "Privacy Policy for Moldable desktop application",
};

export default async function PrivacyPage() {
  const markdown = await readLegalMarkdown("privacy");

  return <Markdown markdown={markdown} proseSize="sm" />;
}
