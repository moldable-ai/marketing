import {
  OpenGraphImage,
  contentType,
  size,
} from "@/components/seo/opengraph-image";
import { getUseCaseBySlug } from "@/data/use-cases";

export const alt = "Moldable Use Case";
export { size, contentType };

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    return OpenGraphImage({
      title: "use case not found",
    });
  }

  // Convert title to lowercase style
  const title = useCase.title.toLowerCase();

  return OpenGraphImage({
    title: `${title},`,
    description: "step by step",
  });
}
