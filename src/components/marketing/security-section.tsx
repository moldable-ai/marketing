"use client";

import {
  Eye,
  HardDrive,
  Lock,
  Shield,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function SecuritySection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <Shield className="size-4 text-primary" />
            Built for privacy
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Your data stays on your machine
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Moldable is designed with privacy at its core. Your code and data
            live on your machine — connect to AI and services when you choose,
            but you control what gets shared.
          </p>
        </div>

        {/* Main highlight card */}
        <div className="mb-6 rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <ShieldCheck className="size-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold md:text-2xl">
                Local-first architecture
              </h3>
              <p className="mt-2 text-muted-foreground">
                Everything runs on your computer. Your apps, conversations, and
                data live in{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm">
                  ~/.moldable/
                </code>{" "}
                — we never see it, store it, or have access to it. Connect to AI
                providers when you choose, but the code and data stay with you.
              </p>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <SecurityCard
            icon={HardDrive}
            title="We don't store your data"
            description="Your apps, code, and data live on your machine. We don't have servers that store your content."
          />
          <SecurityCard
            icon={Eye}
            title="No telemetry"
            description="We don't collect analytics or usage data. If we add telemetry in the future, it will be opt-in."
          />
          <SecurityCard
            icon={Lock}
            title="Sandboxed AI"
            description="AI agent commands run in a sandbox with restricted network and filesystem access. Your SSH keys and sensitive files stay protected."
          />
          <SecurityCard
            icon={Sparkles}
            title="You own everything"
            description="Your apps, your code, your data. Inspect, modify, export, or delete anything at any time."
          />
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-emerald-500" />
            <span>No account required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-emerald-500" />
            <span>No cookies or tracking</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-emerald-500" />
            <span>Apps run locally</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-emerald-500" />
            <span>Open source packages</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecurityCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-linear-to-br from-white/8 via-white/2 to-transparent p-5 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:border before:border-white/8 before:bg-linear-to-br before:from-white/12 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 dark:from-white/8 dark:via-white/2 dark:to-transparent dark:before:border-white/8">
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
      <div className="relative">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="size-5 text-primary" />
        </div>
        <h3 className="mt-4 text-base font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
