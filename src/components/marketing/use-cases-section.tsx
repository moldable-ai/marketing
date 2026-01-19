import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lightbulb } from "lucide-react";
import { useCases } from "@/data/use-cases";

export function UseCasesSection() {
  // Show first 6 use cases on the home page
  const featuredUseCases = useCases.slice(0, 6);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <Lightbulb className="size-4 text-primary" />
            Step-by-step guides
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Learn by building
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Follow along with these guides to see how Moldable turns a simple
            prompt into a fully functional app running locally on your machine.
            <br /><br />
            All software, data, and privacy are yours.
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {featuredUseCases.map((useCase) => (
            <Link
              key={useCase.slug}
              href={`/use-cases/${useCase.slug}`}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/8 dark:border-white/10 dark:bg-white/5"
            >
              {/* Image preview */}
              {useCase.starterApp?.image && (
                <div className="mb-4 overflow-hidden rounded-lg border border-white/5">
                  <Image
                    src={useCase.starterApp.image}
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
              <h3 className="text-lg font-semibold">{useCase.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                {useCase.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                View guide
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* View more link */}
        {useCases.length > 6 && (
          <div className="mt-10 text-center">
            <Link
              href="/use-cases"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View more use cases
              <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
