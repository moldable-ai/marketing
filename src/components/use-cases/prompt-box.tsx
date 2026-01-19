"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface PromptBoxProps {
  content: string;
  label?: string;
}

export function PromptBox({ content, label }: PromptBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      {label && (
        <p className="mb-2 text-sm font-medium text-muted-foreground">
          {label}
        </p>
      )}
      <div className="relative rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-white/20 dark:border-white/10 dark:bg-white/5">
        <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
          {content}
        </pre>
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground opacity-0 transition-all hover:border-white/20 hover:bg-white/10 hover:text-foreground group-hover:opacity-100"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <Check className="size-4 text-primary" />
          ) : (
            <Copy className="size-4" />
          )}
        </button>
      </div>
    </div>
  );
}
