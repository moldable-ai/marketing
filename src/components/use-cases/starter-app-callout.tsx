import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { ZoomableImage } from "@/components/ui/zoomable-image";
import type { StarterApp } from "@/data/use-cases";

interface StarterAppCalloutProps {
  starterApp: StarterApp;
}

export function StarterAppCallout({ starterApp }: StarterAppCalloutProps) {
  const textContent = (
    <div className="flex items-start gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg">
        <Image
          src={starterApp.icon}
          alt=""
          width={40}
          height={40}
          className="size-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <Sparkles className="size-3.5 text-primary" />
          <p className="text-sm font-medium">
            Or start with {starterApp.name}
          </p>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {starterApp.description}
        </p>
        {starterApp.appId && (
          <p className="mt-2 flex items-center gap-1 text-sm font-medium text-primary">
            Learn more
            <ArrowRight className="size-3.5" />
          </p>
        )}
      </div>
    </div>
  );

  const imagePreview = starterApp.image && (
    <ZoomableImage
      src={starterApp.image}
      alt={`${starterApp.name} screenshot`}
      width={2400}
      height={1292}
      zoomScale={2.5}
      className="mt-4 aspect-2400/1292 rounded-lg border border-white/5 bg-white/3"
    />
  );

  if (starterApp.appId) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
        <Link
          href={`/apps/${starterApp.appId}`}
          className="block transition-opacity hover:opacity-80"
        >
          {textContent}
        </Link>
        {imagePreview}
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      {textContent}
      {imagePreview}
    </div>
  );
}
