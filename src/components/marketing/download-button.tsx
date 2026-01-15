"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, ChevronDown, Apple, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Platform = "mac-arm64" | "mac-intel" | "windows" | "linux" | "unknown";

interface PlatformInfo {
  platform: Platform;
  label: string;
  shortLabel: string;
  icon: React.ReactNode;
  available: boolean;
}

const PLATFORMS: Record<Platform, PlatformInfo> = {
  "mac-arm64": {
    platform: "mac-arm64",
    label: "Download for Mac (Apple Silicon)",
    shortLabel: "Mac (Apple Silicon)",
    icon: <Apple className="size-4" />,
    available: true,
  },
  "mac-intel": {
    platform: "mac-intel",
    label: "Download for Mac (Intel)",
    shortLabel: "Mac (Intel)",
    icon: <Apple className="size-4" />,
    available: true,
  },
  windows: {
    platform: "windows",
    label: "Download for Windows",
    shortLabel: "Windows",
    icon: <Monitor className="size-4" />,
    available: false, // Coming soon
  },
  linux: {
    platform: "linux",
    label: "Download for Linux",
    shortLabel: "Linux",
    icon: <Monitor className="size-4" />,
    available: false, // Coming soon
  },
  unknown: {
    platform: "unknown",
    label: "Download",
    shortLabel: "Download",
    icon: <Download className="size-4" />,
    available: true,
  },
};

function detectPlatform(): Platform {
  if (typeof window === "undefined") return "unknown";

  const ua = navigator.userAgent.toLowerCase();
  const platform = navigator.platform?.toLowerCase() || "";

  // Check for Mac
  if (ua.includes("mac") || platform.includes("mac")) {
    // Check for Apple Silicon
    // M1/M2/M3 Macs report as ARM or have specific indicators
    // Unfortunately, detection isn't 100% reliable, but we can make educated guesses

    // Check if running on ARM (Apple Silicon)
    // Modern Safari on M1+ reports ARM in platform
    if (
      platform.includes("arm") ||
      // Check for iOS-like indicators that appear on M1 Macs
      (ua.includes("mac") &&
        typeof navigator.maxTouchPoints === "number" &&
        navigator.maxTouchPoints > 0)
    ) {
      return "mac-arm64";
    }

    // For other Macs, we'll default to ARM since most new Macs are Apple Silicon
    // Users can always select Intel from the dropdown
    return "mac-arm64";
  }

  // Check for Windows
  if (ua.includes("windows") || platform.includes("win")) {
    return "windows";
  }

  // Check for Linux
  if (ua.includes("linux") && !ua.includes("android")) {
    return "linux";
  }

  return "unknown";
}

interface DownloadButtonProps {
  size?: "default" | "lg";
  className?: string;
}

export function DownloadButton({
  size = "default",
  className,
}: DownloadButtonProps) {
  const [detectedPlatform, setDetectedPlatform] = useState<Platform>("unknown");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDetectedPlatform(detectPlatform());
    setMounted(true);
  }, []);

  const currentPlatform = PLATFORMS[detectedPlatform];
  const otherPlatforms = Object.values(PLATFORMS).filter(
    (p) => p.platform !== detectedPlatform && p.platform !== "unknown"
  );

  // Show a simple button until client-side detection runs
  if (!mounted) {
    return (
      <Link
        href="/download/mac-arm64"
        className={cn(
          "inline-flex items-center gap-2 rounded-lg bg-primary px-4 font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          size === "lg" && "h-12 rounded-xl px-6 text-base",
          size === "default" && "h-10",
          className
        )}
      >
        <Download className="size-4" />
        Download
      </Link>
    );
  }

  const downloadHref = currentPlatform.available
    ? `/download/${currentPlatform.platform}`
    : "https://github.com/moldable-ai/moldable/releases/latest";

  return (
    <div
      className={cn(
        "inline-flex overflow-hidden rounded-lg bg-primary text-primary-foreground",
        size === "lg" && "rounded-xl",
        className
      )}
    >
      {/* Main download button */}
      <Link
        href={downloadHref}
        className={cn(
          "inline-flex flex-1 items-center gap-2 px-4 transition-colors hover:bg-primary-foreground/10",
          size === "lg" ? "h-12 px-6 text-base" : "h-10"
        )}
      >
        {currentPlatform.icon}
        <span className="font-medium">
          {currentPlatform.available
            ? currentPlatform.label
            : `${currentPlatform.shortLabel} (Coming Soon)`}
        </span>
      </Link>

      {/* Divider */}
      <div className="my-2 w-px shrink-0 bg-primary-foreground/20" />

      {/* Dropdown trigger */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={cn(
              "inline-flex shrink-0 items-center px-3 transition-colors hover:bg-primary-foreground/10 focus:outline-none",
              size === "lg" ? "h-12" : "h-10"
            )}
          >
            <ChevronDown className="size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {otherPlatforms.map((platform) => (
            <DropdownMenuItem key={platform.platform} asChild disabled={!platform.available}>
              <Link
                href={
                  platform.available
                    ? `/download/${platform.platform}`
                    : "#"
                }
                className="flex items-center gap-3"
              >
                {platform.icon}
                <span>
                  {platform.shortLabel}
                  {!platform.available && (
                    <span className="ml-2 text-xs text-muted-foreground">
                      Coming soon
                    </span>
                  )}
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              href="https://github.com/moldable-ai/moldable/releases/latest"
              className="flex items-center gap-3"
            >
              <Download className="size-4" />
              View all releases
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
