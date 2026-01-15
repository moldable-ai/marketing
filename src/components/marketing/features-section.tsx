"use client";

import { Cpu, Database, FolderKanban, RefreshCw, Terminal } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <span className="text-primary">✦</span>
            How it works
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Software that evolves with you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Moldable flips the script on how software is built and owned.
          </p>
        </div>

        {/* Bento grid - Linear style */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {/* Row 1: Summon (4 cols) + Local-first (2 cols) */}
          <GlassCard className="md:col-span-4">
            <CardHeader icon={Cpu} title="Describe → Generate → Use" />
            <p className="mt-2 text-sm text-muted-foreground">
              Tell Moldable what you need in natural language. The AI agent
              writes the code, starts the server, and displays your app — all in
              seconds.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <PromptExample prompt="Build me a meeting notes app that records audio and transcribes" />
              <PromptExample
                prompt="Build a custom CRM to track leads and automated follow-ups"
                dimmed
              />
              <PromptExample
                prompt="I need an expense tracker with receipt scanning"
                dimmed
              />
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-2">
            <CardHeader icon={Database} title="Local-first" />
            <p className="mt-2 text-sm text-muted-foreground">
              Your data stays on your machine. Connect to AI when you choose,
              but you own everything.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <InfoRow label="Code" value="On your machine" />
              <InfoRow label="Data" value="SQLite / Local" />
              <InfoRow label="AI" value="Opt-in APIs" highlight />
            </div>
          </GlassCard>

          {/* Row 2: Three equal columns */}
          <GlassCard className="md:col-span-2">
            <CardHeader icon={RefreshCw} title="Built for change" />
            <p className="mt-2 text-sm text-muted-foreground">
              Apps evolve through conversation. Need a new feature? Just ask.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Pill>"Add dark mode"</Pill>
              <Pill>"Export to PDF"</Pill>
              <Pill>"Show stats"</Pill>
              <Pill>"Connect to Slack"</Pill>
              <Pill>"Add CSV export"</Pill>
              <Pill>"Make it responsive"</Pill>
              <Pill>"Send email alerts"</Pill>
              <Pill>"Add user auth"</Pill>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-2">
            <CardHeader icon={FolderKanban} title="Workspaces" />
            <p className="mt-2 text-sm text-muted-foreground">
              Organize apps into contexts — Personal, Work, Side Projects — each
              isolated.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <WorkspaceRow name="Personal" color="bg-emerald-500" apps={4} />
              <WorkspaceRow name="Work" color="bg-blue-500" apps={6} />
              <WorkspaceRow
                name="Side Project"
                color="bg-purple-500"
                apps={2}
              />
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-2">
            <CardHeader icon={Terminal} title="Skills & MCPs" />
            <p className="mt-2 text-sm text-muted-foreground">
              Extend capabilities with CLI skills and Model Context Protocol
              integrations.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Pill variant="subtle">audio-transcribe</Pill>
              <Pill variant="subtle">pdf-extract</Pill>
              <Pill variant="subtle">pptx</Pill>
              <Pill variant="subtle">web-search</Pill>
              <Pill variant="subtle">github</Pill>
              <Pill variant="subtle">slack</Pill>
              <Pill variant="subtle">google-calendar</Pill>
              <Pill variant="subtle">notion</Pill>
              <Pill variant="subtle">stripe</Pill>
              <Pill variant="subtle">postgres</Pill>
              <Pill variant="subtle">sqlite</Pill>
              <Pill variant="subtle">filesystem</Pill>
              <Pill variant="subtle">docker</Pill>
              <Pill variant="subtle">csv-analyzer</Pill>
              <Pill variant="subtle">image-resize</Pill>
              <Pill variant="subtle">browser-automation</Pill>
              <Pill variant="subtle">email-sender</Pill>
            </div>
          </GlassCard>
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

function PromptExample({
  prompt,
  dimmed,
}: {
  prompt: string;
  dimmed?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg border border-white/5 bg-white/3 px-3 py-2.5 transition-colors duration-150 hover:bg-white/6 dark:border-white/5 dark:bg-white/3 dark:hover:bg-white/6 ${
        dimmed ? "opacity-50" : ""
      }`}
    >
      <span className="text-primary text-sm">→</span>
      <span className="text-sm">{prompt}</span>
    </div>
  );
}

function InfoRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg px-3 py-2 ${
        highlight
          ? "border border-primary/20 bg-primary/10"
          : "border border-white/5 bg-white/3 dark:border-white/5 dark:bg-white/3"
      }`}
    >
      <span className="text-sm text-muted-foreground">{label}</span>
      <span
        className={`text-sm font-medium ${highlight ? "text-primary" : ""}`}
      >
        {value}
      </span>
    </div>
  );
}

function WorkspaceRow({
  name,
  color,
  apps,
}: {
  name: string;
  color: string;
  apps: number;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/3 px-3 py-2.5 transition-colors duration-150 hover:bg-white/6 dark:border-white/5 dark:bg-white/3 dark:hover:bg-white/6">
      <div className="flex items-center gap-3">
        <div className={`size-3 rounded-full ${color}`} />
        <span className="text-sm font-medium">{name}</span>
      </div>
      <span className="text-xs text-muted-foreground">{apps} apps</span>
    </div>
  );
}

function Pill({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "success" | "subtle";
}) {
  const variantClasses = {
    success: "border-primary/20 bg-primary/10 text-primary",
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
