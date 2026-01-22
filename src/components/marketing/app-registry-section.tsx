"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ZoomableImage } from "@/components/ui/zoomable-image";
import { apps } from "@/data/apps";

export function AppRegistrySection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <Sparkles className="size-4 text-primary" />
            Free starter apps
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Start with the essentials
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Install these official apps for free, or prompt Moldable to build
            something entirely new for you. Goodbye subscriptions — just imagine it, and Moldable will build it.
          </p>
        </div>

        {/* Apps grid - Bento style */}
        <div className="flex flex-wrap justify-center gap-4">
          {apps.map((app) => (
            <Link
              key={app.id}
              href={`/apps/${app.id}`}
              className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]"
            >
              <GlassCard className="h-full transition-all hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 overflow-hidden">
                    <Image
                      src={app.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{app.name}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground leading-relaxed min-h-[2.5rem]">
                      {app.description}
                    </p>
                  </div>
                </div>

                {/* App Screenshot with zoom on hover */}
                <div className="mt-5 aspect-video overflow-hidden rounded-lg border border-white/5 bg-white/3 dark:border-white/5 dark:bg-white/3">
                  <ZoomableImage
                    src={app.image}
                    alt={`${app.name} screenshot`}
                    width={2400}
                    height={1350}
                    zoomScale={2.5}
                    className="size-full object-cover"
                  />
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlassCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl bg-linear-to-br from-white/8 via-white/2 to-transparent p-5 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:border before:border-white/8 before:bg-linear-to-br before:from-white/12 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 dark:from-white/8 dark:via-white/2 dark:to-transparent dark:before:border-white/8 ${className ?? ""}`}>
      {/* Gradient border overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          padding: "1px",
          background:
            "linear-gradient(to bottom right, rgba(255,255,255,0.15), transparent 50%)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
