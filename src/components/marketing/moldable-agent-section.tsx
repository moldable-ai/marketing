"use client";

import Image from "next/image";
import {
  BicepsFlexed,
  Bot,
  FileText,
  FolderKanban,
  LineChart,
  Wrench,
} from "lucide-react";

const MODEL_LOGOS = [
  {
    name: "Anthropic Opus 4.5",
    lightSrc: "/llms/vendor=anthropic.svg",
    darkSrc: "/llms/vendor=anthropic-dark.svg",
  },
  {
    name: "OpenAI GPT 5.2",
    lightSrc: "/llms/vendor=openai.svg",
    darkSrc: "/llms/vendor=openai-dark.svg",
  },
  {
    name: "Gemini 3 Flash",
    lightSrc: "/llms/vendor=google.svg",
    darkSrc: "/llms/vendor=google-dark.svg",
  },
  {
    name: "MiniMax M2.1",
    lightSrc: "/llms/vendor=minimax.svg",
    darkSrc: "/llms/vendor=minimax-dark.svg",
  },
];

export function MoldableAgentSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <Bot className="size-4 text-primary" />
            Moldable Agent
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Your personal software, your way
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            The Moldable Agent works on your machine to build, improve, and
            automate across your files, apps, and data. You stay in control --
            approve actions, pick models, and keep everything local.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          {/* Image */}
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="aspect-1302/994 overflow-hidden">
              <Image
                src="/moldable-agent.png"
                alt="Moldable Agent working locally"
                width={1302}
                height={994}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl" />
          </div>

          {/* Panels */}
          <div className="grid gap-4">
            <GlassCard>
              <CardHeader icon={Wrench} title="Build and reshape apps" />
              <p className="mt-2 text-sm text-muted-foreground">
                Create new apps from a prompt, then polish existing ones with
                quick changes and live previews.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Generate new apps</Pill>
                <Pill>Improve existing apps</Pill>
                <Pill>Adjust the look fast</Pill>
              </div>
            </GlassCard>

            <GlassCard>
              <CardHeader icon={Bot} title="Choose your model" />
              <p className="mt-2 text-sm text-muted-foreground">
                Pick the model that feels right. Switch anytime.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {MODEL_LOGOS.map((model) => (
                  <div
                    key={model.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm font-medium">{model.name}</span>
                    <div className="flex items-center gap-2">
                      <Image
                        src={model.lightSrc}
                        alt={`${model.name} logo`}
                        width={92}
                        height={24}
                        className="h-6 w-auto dark:hidden"
                      />
                      <Image
                        src={model.darkSrc}
                        alt={`${model.name} logo`}
                        width={92}
                        height={24}
                        className="hidden h-6 w-auto dark:block"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <CardHeader icon={BicepsFlexed} title="Skills that extend reach" />
              <p className="mt-2 text-sm text-muted-foreground">
                Install skills (small add-ons) to read PDFs, create decks,
                pull info from files, and automate workflows.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill variant="subtle">pdf-extract</Pill>
                <Pill variant="subtle">pptx-builder</Pill>
                <Pill variant="subtle">audio-transcribe</Pill>
                <Pill variant="subtle">browser-automation</Pill>
              </div>
            </GlassCard>

            <GlassCard>
              <CardHeader icon={FolderKanban} title="Organize your machine" />
              <p className="mt-2 text-sm text-muted-foreground">
                Tidy folders, rename files, sync assets, and keep projects
                consistent without the manual busywork.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Batch rename</Pill>
                <Pill>Archive projects</Pill>
                <Pill>Structure assets</Pill>
              </div>
            </GlassCard>

            <GlassCard>
              <CardHeader icon={LineChart} title="Analyze local data" />
              <p className="mt-2 text-sm text-muted-foreground">
                Parse CSVs, compare metrics, and generate insights — all on your
                machine.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>CSV + JSON analysis</Pill>
                <Pill>Charts + summaries</Pill>
                <Pill>Export reports</Pill>
              </div>
            </GlassCard>
          </div>
        </div>

      </div>
    </section>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-linear-to-br from-white/8 via-white/2 to-transparent p-5 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:border before:border-white/8 before:bg-linear-to-br before:from-white/12 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 dark:from-white/8 dark:via-white/2 dark:to-transparent dark:before:border-white/8 ${className}`}
    >
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

function CardHeader({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="size-4 text-primary" />
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
    </div>
  );
}

function Pill({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "subtle";
}) {
  const variantClasses = {
    default:
      "border-white/8 bg-white/5 text-muted-foreground dark:border-white/8 dark:bg-white/5",
    subtle:
      "border-white/5 bg-white/3 text-muted-foreground dark:border-white/5 dark:bg-white/3",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-medium ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
