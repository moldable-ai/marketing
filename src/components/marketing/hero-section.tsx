"use client";

import { Button } from "@/components/ui/button";
import { DownloadButton } from "@/components/marketing/download-button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      {/* Background grid pattern */}
      <div className="bg-grid-pattern-fade pointer-events-none absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 lg:pt-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="animate-fade-in-blur mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
            </span>
            <span className="text-muted-foreground">
              Your personal software factory
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in-blur max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            Personal software.
            <br />
            <span className="text-gradient">Built for change.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-in-blur mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            Instead of buying apps or hoping someone builds what you need, you
            describe it — and Moldable creates it. Everything runs locally on
            your machine.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in-blur relative z-20 mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <DownloadButton size="lg" className="rounded-xl" />
            <Button
              size="lg"
              variant="outline"
              className="h-12 gap-2 rounded-xl border-white/10 bg-white/5 px-6 text-base hover:bg-white/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              asChild
            >
              <Link href="https://github.com/moldable-ai/moldable">
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero visualization */}
        <div
          className="animate-fade-in-blur relative z-10 mt-16 flex items-center justify-center md:mt-24"
          style={{ animationDelay: "400ms" }}
        >
          <HeroVisualization />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-linear-to-t from-muted/20 to-transparent" />
    </section>
  );
}

function HeroVisualization() {
  return (
    <div className="relative w-full max-w-4xl">
      {/* Main card - Linear glass style */}
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-background/95 via-background/90 to-background/80 backdrop-blur-xl dark:from-background/95 dark:via-background/90 dark:to-background/80">
        {/* Gradient border overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            padding: "1px",
            background:
              "linear-gradient(to bottom right, rgba(255,255,255,0.2), transparent 50%)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
          }}
        />

        {/* Hero Image */}
        <div className="aspect-2378/1312 overflow-hidden">
          <Image
            src="/hero.png"
            alt="Moldable Interface"
            width={2378}
            height={1312}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Floating decoration */}
      <div className="absolute -top-6 -right-6 size-32 rounded-full bg-linear-to-br from-primary/20 to-accent/20 blur-3xl" />
      <div className="absolute -bottom-6 -left-6 size-24 rounded-full bg-linear-to-br from-accent/20 to-primary/20 blur-3xl" />
    </div>
  );
}
