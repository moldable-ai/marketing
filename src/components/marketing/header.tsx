"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Apps", href: "#apps" },
  { label: "Features", href: "#features" },
  { label: "GitHub", href: "https://github.com/moldable-ai/moldable" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to show/hide border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Outer wrapper */}
      <div className="mx-auto max-w-7xl px-6 pt-4">
        {/* Floating header - styling only shows when scrolled */}
        <div
          className={cn(
            "rounded-xl border transition-all duration-200",
            isScrolled
              ? "border-border bg-background/80 shadow-lg shadow-black/5 backdrop-blur-md"
              : "border-transparent bg-transparent shadow-none"
          )}
        >
          {/* Inner content */}
          <div className="flex h-12 items-center px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.svg"
                alt=""
                className="size-6"
                aria-hidden="true"
              />
              <img
                src="/logo-text.svg"
                alt="Moldable"
                className="h-5 dark:invert"
              />
            </Link>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Separator */}
            <div className="mx-4 hidden h-8 w-px bg-linear-to-b from-transparent via-white/15 to-transparent md:block" />

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <Button size="sm" className="gap-2 rounded-lg" asChild>
                <Link href="/download/mac-arm64">
                  <Download className="size-4" />
                  Download
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mt-2 rounded-xl border border-border bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button size="sm" className="mt-2 w-full gap-2 rounded-lg" asChild>
                <Link href="/download/mac-arm64">
                  <Download className="size-4" />
                  Download
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
