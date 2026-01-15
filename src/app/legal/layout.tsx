import Link from "next/link";
import { Header } from "@/components/marketing/header";
import { SiteFooter } from "@/components/marketing/site-footer";

/**
 * Shared layout for legal pages (terms, privacy, etc.)
 */
export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main content container */}
      <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6">
        <div className="mb-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Back to Home
          </Link>
        </div>
        <div className="rounded-xl border bg-card p-6 sm:p-8">{children}</div>
      </div>

      <SiteFooter />
    </div>
  );
}
