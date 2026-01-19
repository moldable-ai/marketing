import {
  OpenGraphImage,
  contentType,
  size,
} from "@/components/seo/opengraph-image";
import { getAppById } from "@/data/apps";

export const alt = "Moldable App";
export { size, contentType };

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getAppById(slug);

  if (!app) {
    return OpenGraphImage({
      title: "app not found",
    });
  }

  return OpenGraphImage({
    title: `${app.name},`,
    description: "built with Moldable",
  });
}
