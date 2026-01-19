import { PromptBox } from "./prompt-box";
import type { UseCaseStep as UseCaseStepType } from "@/data/use-cases";

interface UseCaseStepProps {
  step: UseCaseStepType;
  stepNumber: number;
  isLast?: boolean;
}

export function UseCaseStep({ step, stepNumber, isLast }: UseCaseStepProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        {/* Number circle */}
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-semibold backdrop-blur-sm">
          {stepNumber}
        </div>
        {/* Connecting line */}
        {!isLast && (
          <div className="mt-4 h-full w-px bg-gradient-to-b from-white/20 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <h2 className="mb-4 text-xl font-semibold">{step.title}</h2>

        {/* Main content - render as paragraphs */}
        <div className="prose prose-invert prose-sm max-w-none">
          {step.content.split("\n\n").map((paragraph, i) => {
            // Check if it's a bold header line
            if (paragraph.startsWith("**") && paragraph.includes("**\n")) {
              const [header, ...rest] = paragraph.split("\n");
              const headerText = header.replace(/\*\*/g, "");
              return (
                <div key={i} className="mb-4">
                  <p className="font-semibold text-foreground">{headerText}</p>
                  <p className="text-muted-foreground">{rest.join("\n")}</p>
                </div>
              );
            }
            return (
              <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Response block (for "What Moldable creates" step) */}
        {step.response && (
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
            {step.responseTitle && (
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
                {step.responseTitle}
              </p>
            )}
            <div className="prose prose-invert prose-sm max-w-none">
              {step.response.split("\n\n").map((paragraph, i) => {
                // Handle checkmarks
                if (paragraph.includes("✓")) {
                  return (
                    <div key={i} className="space-y-1">
                      {paragraph.split("\n").map((line, j) => (
                        <p
                          key={j}
                          className="text-sm text-muted-foreground leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  );
                }
                // Handle bold text
                if (paragraph.startsWith("**")) {
                  const text = paragraph.replace(/\*\*/g, "");
                  return (
                    <p key={i} className="font-medium text-foreground">
                      {text}
                    </p>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        )}

        {/* Prompt boxes */}
        {step.prompts && step.prompts.length > 0 && (
          <div className="mt-6 space-y-4">
            {step.prompts.map((prompt, i) => (
              <PromptBox key={i} content={prompt.content} label={prompt.label} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
