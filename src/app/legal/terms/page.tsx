import type { Metadata } from "next";
import { Markdown } from "@/components/ui/markdown";
import { readLegalMarkdown } from "../_lib/read-legal-markdown";

export const runtime = "nodejs";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms of Service - Moldable",
  description: "Terms of Service for Moldable desktop application",
};

export default async function TermsPage() {
  const markdown = await readLegalMarkdown("terms");

  return <Markdown markdown={markdown} proseSize="sm" />;
}
