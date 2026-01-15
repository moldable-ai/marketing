import Link from "next/link";

const footerSections = [
  {
    heading: "Product",
    links: [
      { label: "Download", href: "https://github.com/moldable-ai/moldable/releases" },
      { label: "Official Apps", href: "https://github.com/moldable-ai/apps" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "GitHub", href: "https://github.com/moldable-ai/moldable" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <img
                src="/logo.svg"
                alt=""
                className="size-7"
                aria-hidden="true"
              />
              <img
                src="/logo-text.svg"
                alt="Moldable"
                className="h-5 dark:invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Your personal software factory. Describe, build, and tweak
              hyper-personalized apps — just by asking.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.heading}>
              <h3 className="mb-4 text-sm font-semibold">{section.heading}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <div
            className="text-sm text-muted-foreground"
            suppressHydrationWarning
          >
            © {new Date().getFullYear()} Moldable AI. All rights reserved.
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <SocialLink
              href="https://github.com/moldable-ai/moldable"
              label="GitHub"
            >
              <svg
                className="size-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </SocialLink>
            <SocialLink href="https://x.com/MoldableAI" label="X (Twitter)">
              <svg
                className="size-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-muted-foreground transition-colors hover:text-foreground"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}
