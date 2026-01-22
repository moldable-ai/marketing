import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/marketing/header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { apps } from "@/data/apps";
import { ZoomableImage } from "@/components/ui/zoomable-image";
import { ArrowRight, Github, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Apps - Moldable",
  description:
    "Explore the official Moldable starter apps. Install them in Moldable, or use them as inspiration to build your own version.",
};

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative overflow-hidden py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="size-4 text-primary" />
              Starter Apps
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Apps built with Moldable
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Each of these apps was created with a simple prompt. Browse them
              for inspiration. Install it or build your own version.
            </p>
          </div>

          {/* Apps grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => (
              <Link
                key={app.id}
                href={`/apps/${app.id}`}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/8"
              >
                {/* App icon and name */}
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                    <Image
                      src={app.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{app.name}</h2>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground min-h-[2.5rem]">
                      {app.description}
                    </p>
                  </div>
                </div>

                {/* Category badge */}
                <div className="mt-4 mb-4">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium capitalize text-muted-foreground">
                    {app.category}
                  </span>
                </div>

                {/* Image preview */}
                <div className="aspect-video overflow-hidden rounded-lg border border-white/5">
                  <ZoomableImage
                    src={app.image}
                    alt={app.name}
                    width={2400}
                    height={1350}
                    zoomScale={2}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                  See how it was built
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source CTA */}
      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-xl font-semibold">
                These apps are open source
              </h2>
              <p className="mt-2 max-w-lg text-muted-foreground">
                Browse the source code, learn how they work, or use them as a
                starting point for your own apps.
              </p>
            </div>
            <a
              href="https://github.com/moldable-ai/moldable-apps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 font-medium transition-colors hover:bg-white/10"
            >
              <Github className="size-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
