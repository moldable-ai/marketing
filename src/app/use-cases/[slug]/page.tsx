import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/marketing/header";
import { SiteFooter } from "@/components/marketing/site-footer";
import {
  UseCaseHero,
  UseCaseStep,
  StarterAppCallout,
} from "@/components/use-cases";
import {
  getUseCaseBySlug,
  getAllUseCaseSlugs,
} from "@/data/use-cases";

export const runtime = "nodejs";
export const dynamic = "force-static";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllUseCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    return { title: "Use Case Not Found - Moldable" };
  }

  return {
    title: `${useCase.title} - Moldable Use Cases`,
    description: useCase.description,
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <UseCaseHero useCase={useCase} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Starter app callout */}
          {useCase.starterApp && (
            <div className="mb-12">
              <StarterAppCallout starterApp={useCase.starterApp} />
            </div>
          )}

          {/* Steps */}
          <div>
            {useCase.steps.map((step, index) => (
              <UseCaseStep
                key={index}
                step={step}
                stepNumber={index + 1}
                isLast={index === useCase.steps.length - 1}
              />
            ))}

            {/* Final CTA */}
            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <h3 className="text-lg font-semibold">Ready to build your own?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Download Moldable and start creating apps that work exactly the
                way you want.
              </p>
              <a
                href="/#download"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Download Moldable
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
