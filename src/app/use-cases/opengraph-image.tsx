import {
  OpenGraphImage,
  contentType,
  size,
} from "@/components/seo/opengraph-image";

export const alt = "Use Cases - Moldable";
export { size, contentType };

export default function Image() {
  return OpenGraphImage({
    title: "Use cases",
    description: "What will you build with Moldable?",
  });
}
