import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/marketing/header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { useCases } from "@/data/use-cases";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Use Cases - Moldable",
  description:
    "Explore practical examples of what you can build with Moldable. From meeting notes to custom CRMs, see how others are using AI-generated apps.",
};

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative overflow-hidden py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <span className="text-primary">✦</span>
              Use Cases
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              What will you build?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Explore step-by-step guides for building apps with Moldable. Each
              example shows real prompts and results you can recreate.
            </p>
          </div>

          {/* Use cases grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <Link
                key={useCase.slug}
                href={`/use-cases/${useCase.slug}`}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/8"
              >
                {/* Image preview */}
                {useCase.image && (
                  <div className="mb-4 overflow-hidden rounded-lg border border-white/5">
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      width={600}
                      height={323}
                      className="w-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Category badge */}
                <div className="mb-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {useCase.category}
                  </span>
                </div>

                {/* Title and description */}
                <h2 className="text-lg font-semibold">{useCase.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {useCase.description}
                </p>

                {/* Features */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {useCase.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="text-xs text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                  View guide
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state for future */}
          {useCases.length === 0 && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-12 text-center">
              <p className="text-muted-foreground">
                Use cases coming soon. Check back later!
              </p>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
