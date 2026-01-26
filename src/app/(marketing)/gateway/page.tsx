import type { Metadata } from "next";
import Link from "next/link";
import {
  KeyRound,
  MessageSquare,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Header } from "@/components/marketing/header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { DownloadButton } from "@/components/marketing/download-button";

export const metadata: Metadata = {
  title: "Gateway - Moldable",
  description:
    "Connect Moldable to chat channels like Telegram, keep control local, and add remote access only when you need it.",
};

const benefits = [
  {
    title: "Chat-native control",
    body:
      "Run Moldable from channels you already live in. Ask for changes, approvals, and updates without opening the desktop.",
    icon: MessageSquare,
  },
  {
    title: "Local-first by default",
    body:
      "The gateway runs on your machine and starts disabled. You choose when remote access is on and how far it can reach.",
    icon: ShieldCheck,
  },
  {
    title: "Pairing and tokens",
    body:
      "Remote sessions require pairing with an auth token, giving you an explicit approval gate before anyone can issue commands.",
    icon: KeyRound,
  },
  {
    title: "Workspace-aware sessions",
    body:
      "Route remote conversations into the right workspace so your personal, client, and experimental projects stay separated.",
    icon: Workflow,
  },
  {
    title: "Flexible setups",
    body:
      "Use a Telegram bot for the safest path, stay on the same Wi-Fi, or tunnel access while traveling. Pick the risk level you want.",
    icon: Smartphone,
  },
  {
    title: "Built for iteration",
    body:
      "The gateway pairs well with Moldable's loop: describe, generate, and tweak. Remote access just makes that loop more available.",
    icon: Sparkles,
  },
];

const setups = [
  {
    title: "Telegram bot (recommended)",
    detail:
      "No public port exposure. Moldable polls Telegram and responds once a user is paired with the bot.",
  },
  {
    title: "Just me, on my laptop",
    detail:
      "Local-only control for a single device. Useful for testing and keeping any exposure tiny.",
  },
  {
    title: "Phone + laptop on the same Wi-Fi",
    detail:
      "LAN-only access. Great for quick remote control at home or in the office within a trusted network.",
  },
  {
    title: "Travel mode (tunnel)",
    detail:
      "Keep the gateway bound locally and expose it through a tunnel like Tailscale or SSH when you need it.",
  },
];

export default function GatewayPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20 py-28">
        <div className="bg-grid-pattern-fade pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <div className="relative w-full rounded-2xl bg-linear-to-br from-background/95 via-background/90 to-background/80 px-6 py-12 backdrop-blur-xl md:px-12">
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                padding: "1px",
                background:
                  "linear-gradient(to bottom right, rgba(255,255,255,0.2), transparent 50%)",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                WebkitMaskComposite: "xor",
              }}
            />
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <span className="text-primary">✦</span>
              Gateway
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Moldable, wherever you are
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
              The gateway lets you control Moldable from chat channels like
              Telegram while keeping your data private and local. It is
              optional, disabled by default, and designed to add reach without
              giving up ownership.
            </p>

            <div className="mt-10 flex justify-center">
              <DownloadButton size="lg" className="rounded-xl" />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-24 bg-linear-to-t from-muted/20 to-transparent" />
      </section>

      <section className="pb-8 mt-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Why Moldable users enable the gateway
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              The gateway is not just remote access. It is a set of controls for
              how messages arrive, how they are authorized, and where they land.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="relative flex h-full flex-col gap-3 overflow-hidden rounded-xl bg-linear-to-br from-white/8 via-white/2 to-transparent p-6 backdrop-blur-sm transition-colors before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:border before:border-white/8 before:bg-linear-to-br before:from-white/12 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
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
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/12">
                  <benefit.icon className="size-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {benefit.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Choose the setup that matches your risk tolerance
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Moldable's gateway settings walk you through recommended setups
              from "keep it local" to "remote while traveling." Each option
              makes the tradeoffs explicit before you turn it on.
            </p>

            <div className="mt-8 grid gap-3">
              {setups.map((setup) => (
                <div
                  key={setup.title}
                  className="rounded-2xl border border-border bg-muted/30 p-5"
                >
                  <p className="text-base font-semibold">{setup.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {setup.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative self-start overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-primary/15 via-primary/5 to-transparent p-8">
            <div className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative flex flex-col">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Safety rails
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Remote access with explicit gates
              </h3>
              <ul className="mt-6 list-disc space-y-3 pl-5 text-sm text-muted-foreground marker:text-primary/70">
                <li>
                  Pair new users before the bot or gateway will respond.
                </li>
                <li>
                  Require an authentication token for gateway connections.
                </li>
                <li>
                  Keep the gateway bound locally and tunnel only when needed.
                </li>
                <li>
                  Route sessions into a specific workspace to limit scope.
                </li>
              </ul>
              <div className="mt-8 flex justify-center">
                <DownloadButton size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
