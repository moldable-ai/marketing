import { Download, User, Lightbulb, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { UseCase } from "@/data/use-cases";
import Link from "next/link";

interface UseCaseHeroProps {
  useCase: UseCase;
}

export function UseCaseHero({ useCase }: UseCaseHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-muted/10 pb-16 pt-32">
      <div className="mx-auto max-w-3xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/use-cases" className="hover:text-foreground transition-colors">
            Use cases
          </Link>
          <span>/</span>
          <span className="text-foreground">{useCase.title}</span>
        </nav>

        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          {useCase.title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {useCase.description}
        </p>

        {/* Metadata row */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <MetadataItem icon={User} label="Author" value={useCase.author} />
          <MetadataItem icon={Lightbulb} label="Category" value={useCase.category} />
          {useCase.features.length > 0 && (
            <div className="flex items-center gap-2">
              <Puzzle className="size-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {useCase.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="/#download">
              <Download className="mr-2 size-4" />
              Try in Moldable
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function MetadataItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="size-4 text-muted-foreground" />
      <span className="text-sm text-muted-foreground">{label}:</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}
