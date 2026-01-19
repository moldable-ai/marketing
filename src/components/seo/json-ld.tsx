/**
 * JSON-LD structured data components for SEO
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://moldable.sh";

interface OrganizationJsonLdProps {
  /** Override the default URL */
  url?: string;
}

/**
 * Organization schema for the Moldable brand
 * Include this on the homepage
 */
export function OrganizationJsonLd({
  url = APP_URL,
}: OrganizationJsonLdProps = {}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Moldable",
    url,
    logo: `${url}/logo.svg`,
    description:
      "Personal software. Built for change. Build apps that work exactly how you think — powered by AI, shaped by conversation.",
    sameAs: [
      "https://x.com/moldableai",
      "https://github.com/moldable-ai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: `${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface WebSiteJsonLdProps {
  /** Override the default URL */
  url?: string;
}

/**
 * WebSite schema
 * Include this on the homepage
 */
export function WebSiteJsonLd({ url = APP_URL }: WebSiteJsonLdProps = {}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Moldable",
    url,
    description:
      "Personal software. Built for change. Build apps that work exactly how you think — powered by AI, shaped by conversation.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

/**
 * BreadcrumbList schema for navigation hierarchy
 * Include this on pages with clear hierarchy (e.g., apps > app detail)
 */
export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface SoftwareApplicationJsonLdProps {
  /** Override the default URL */
  url?: string;
}

/**
 * SoftwareApplication schema for Moldable
 * Include this on the homepage
 */
export function SoftwareApplicationJsonLd({
  url = APP_URL,
}: SoftwareApplicationJsonLdProps = {}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Moldable",
    url,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Windows",
    description:
      "A desktop app that lets you build personal software through conversation. Describe what you want, watch it come to life, and iterate with AI.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free to download and use.",
    },
    featureList: [
      "AI-powered app generation",
      "Local-first architecture",
      "Conversational iteration",
      "Built-in code editor",
      "Real-time preview",
      "Export and share apps",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
