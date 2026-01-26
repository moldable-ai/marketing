import { MetadataRoute } from "next";
import { getAllAppIds } from "@/data/apps";
import { getAllUseCaseSlugs } from "@/data/use-cases";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://moldable.sh";

export default function sitemap(): MetadataRoute.Sitemap {
  const appIds = getAllAppIds();
  const useCaseSlugs = getAllUseCaseSlugs();

  const entries: MetadataRoute.Sitemap = [
    // ========================================
    // Main marketing page
    // ========================================
    {
      url: APP_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ========================================
    // Apps pages
    // ========================================
    {
      url: `${APP_URL}/apps`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...appIds.map((id) => ({
      url: `${APP_URL}/apps/${id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // ========================================
    // Use cases pages
    // ========================================
    {
      url: `${APP_URL}/use-cases`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...useCaseSlugs.map((slug) => ({
      url: `${APP_URL}/use-cases/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    {
      url: `${APP_URL}/gateway`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ========================================
    // Legal pages
    // ========================================
    {
      url: `${APP_URL}/legal/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${APP_URL}/legal/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  return entries;
}
