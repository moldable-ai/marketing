import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/marketing/header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { PromptBox } from "@/components/use-cases";
import { getAppById, getAllAppIds } from "@/data/apps";
import { ArrowLeft, Download, Sparkles } from "lucide-react";

export const runtime = "nodejs";
export const dynamic = "force-static";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAppIds().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppById(slug);

  if (!app) {
    return { title: "App Not Found - Moldable" };
  }

  return {
    title: `${app.name} - Moldable Apps`,
    description: app.description,
  };
}

export default async function AppPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppById(slug);

  if (!app) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Back link */}
          <Link
            href="/apps"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All apps
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left column - App info */}
            <div>
              {/* App header */}
              <div className="flex items-start gap-4">
                <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl">
                  <Image
                    src={app.icon}
                    alt=""
                    width={64}
                    height={64}
                    className="size-full object-cover"
                  />
                </div>
                <div>
                  <div className="mb-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium capitalize text-muted-foreground">
                      {app.category}
                    </span>
                  </div>
                  <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    {app.name}
                  </h1>
                </div>
              </div>

              <p className="mt-6 text-lg text-muted-foreground">
                {app.description}
              </p>

              {/* The magic section */}
              <div className="mt-10">
                <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium">
                  <Sparkles className="size-4 text-primary" />
                  The prompt that built this
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  This entire app was generated in a few minutes. Here's
                  what we asked Moldable:
                </p>
                <PromptBox content={app.samplePrompt} />
              </div>

              {/* CTA */}
              <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="text-lg font-semibold">
                  Install it or build your own version
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Install this app in Moldable, or use this prompt as a starting
                  point to build something completely
                  different. You have powers now, go use them.
                </p>
                <a
                  href="/#download"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Download className="size-4" />
                  Download Moldable
                </a>
              </div>
            </div>

            {/* Right column - Screenshot */}
            <div className="lg:sticky lg:top-8">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2">
                <Image
                  src={app.image}
                  alt={`${app.name} screenshot`}
                  width={1200}
                  height={646}
                  className="w-full rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More apps section */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-2xl font-semibold">Explore more apps</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {getAllAppIds()
              .filter((id) => id !== app.id)
              .slice(0, 4)
              .map((id) => {
                const otherApp = getAppById(id)!;
                return (
                  <Link
                    key={id}
                    href={`/apps/${id}`}
                    className="group flex min-w-[280px] items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/8"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                      <Image
                        src={otherApp.icon}
                        alt=""
                        width={40}
                        height={40}
                        className="size-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{otherApp.name}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {otherApp.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/apps"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all apps →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
