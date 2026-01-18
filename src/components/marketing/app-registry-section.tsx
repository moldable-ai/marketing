"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import { ZoomableImage } from "@/components/ui/zoomable-image";

const apps = [
  {
    id: "meetings",
    name: "Meetings",
    description:
      "Record, transcribe, and summarize meetings with real-time AI transcription",
    icon: "/apps/meetings-icon.png",
    image: "/apps/meetings.png",
    category: "productivity",
  },
  {
    id: "scribo",
    name: "Scribo Languages",
    description: "Language learning journal with AI-powered translations",
    icon: "/apps/scribo-icon.png",
    image: "/apps/scribo.png",
    category: "productivity",
  },
  {
    id: "calendar",
    name: "Calendar",
    description: "Integrated calendar with Google Calendar connection",
    icon: "/apps/calendar-icon.png",
    image: "/apps/calendar.png",
    category: "productivity",
  },
  {
    id: "notes",
    name: "Notes",
    description:
      "A Google Keep-style note taking app with pinning and markdown support",
    icon: "/apps/notes-icon.png",
    image: "/apps/notes.png",
    category: "productivity",
  },
  {
    id: "todo",
    name: "Todo",
    description:
      "Simple task management with quick add and completion tracking",
    icon: "/apps/todo-icon.png",
    image: "/apps/todos.png",
    category: "productivity",
  },
  {
    id: "time-tracker",
    name: "Time Tracker",
    description:
      "Track time spent on projects and tasks with simple start/stop controls",
    icon: "/apps/time-tracker-icon.png",
    image: "/apps/time-tracker.png",
    category: "productivity",
  },
  {
    id: "git-flow",
    name: "Git",
    description:
      "Simple Git client for branch management, staging, and diffing",
    icon: "/apps/git-icon.png",
    image: "/apps/git.png",
    category: "developer",
  },
];

export function AppRegistrySection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <Sparkles className="size-4 text-primary" />
            Free starter apps
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Start with the essentials
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Install these official apps for free, or prompt Moldable to build
            something entirely new for you.
          </p>
        </div>

        {/* Apps grid - Bento style */}
        <div className="flex flex-wrap justify-center gap-4">
          {apps.map((app) => (
            <GlassCard key={app.id} className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 overflow-hidden">
                  <Image
                    src={app.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{app.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>

              {/* App Screenshot with zoom on hover */}
              <ZoomableImage
                src={app.image}
                alt={`${app.name} screenshot`}
                width={2400}
                height={1292}
                zoomScale={2.5}
                className="mt-5 aspect-2400/1292 rounded-lg border border-white/5 bg-white/3 dark:border-white/5 dark:bg-white/3"
              />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlassCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl bg-linear-to-br from-white/8 via-white/2 to-transparent p-5 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:border before:border-white/8 before:bg-linear-to-br before:from-white/12 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 dark:from-white/8 dark:via-white/2 dark:to-transparent dark:before:border-white/8 ${className ?? ""}`}>
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
