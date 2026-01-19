import {
  OpenGraphImage,
  contentType,
  size,
} from "@/components/seo/opengraph-image";

export const alt = "Starter Apps - Moldable";
export { size, contentType };

export default function Image() {
  return OpenGraphImage({
    title: "Starter apps,",
    description: "built with Moldable",
  });
}
