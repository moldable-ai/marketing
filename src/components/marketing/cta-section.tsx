"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-4xl px-6">
        {/* Main CTA card - Glass style */}
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-xl md:rounded-3xl md:p-12 dark:from-white/10 dark:via-white/5 dark:to-transparent">
          {/* Gradient border overlay */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl"
            style={{
              padding: "1px",
              background:
                "linear-gradient(to bottom right, rgba(255,255,255,0.2), transparent 50%)",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Ready to build your own software?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Download Moldable and start creating personal apps that work
              exactly the way you think.
            </p>

            {/* Two paths */}
            <div className="mt-10 grid grid-rows-[1fr] gap-4 sm:grid-cols-2">
              {/* Download */}
              <div className="group relative flex flex-col overflow-hidden rounded-xl border border-white/8 bg-white/5 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/8 dark:border-white/8 dark:bg-white/5 dark:hover:border-white/15 dark:hover:bg-white/8">
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    padding: "1px",
                    background:
                      "linear-gradient(to bottom right, rgba(255,255,255,0.12), transparent 50%)",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                  }}
                />
                <div className="relative flex h-full flex-col">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <img
                      src="/logo.svg"
                      alt=""
                      className="size-5"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-2 text-base font-semibold">
                    Download Moldable
                  </h3>
                  <p className="mb-5 flex-1 text-sm text-muted-foreground">
                    Get the desktop app for macOS and start creating apps in
                    minutes. Windows and Linux coming soon.
                  </p>
                  <Button className="group/btn w-full gap-2 rounded-lg" asChild>
                    <Link href="https://github.com/moldable-ai/moldable/releases">
                      <Download className="size-4" />
                      Download for Free
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Explore source */}
              <div className="group relative flex flex-col overflow-hidden rounded-xl border border-white/8 bg-white/5 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/8 dark:border-white/8 dark:bg-white/5 dark:hover:border-white/15 dark:hover:bg-white/8">
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    padding: "1px",
                    background:
                      "linear-gradient(to bottom right, rgba(255,255,255,0.12), transparent 50%)",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                  }}
                />
                <div className="relative flex h-full flex-col">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-accent/10 text-xl">
                    🔧
                  </div>
                  <h3 className="mb-2 text-base font-semibold">
                    Explore the Code
                  </h3>
                  <p className="mb-5 flex-1 text-sm text-muted-foreground">
                    Moldable is open source. Browse the code, contribute new
                    apps, submit issues, or just say hello.
                  </p>
                  <Button
                    variant="outline"
                    className="group/btn w-full gap-2 rounded-lg border-white/10 bg-white/5 hover:bg-white/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                    asChild
                  >
                    <Link href="https://github.com/moldable-ai/moldable">
                      View on GitHub
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
