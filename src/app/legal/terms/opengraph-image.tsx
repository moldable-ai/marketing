import {
  OpenGraphImage,
  contentType,
  size,
} from "@/components/seo/opengraph-image";

export const alt = "Terms of Service - Moldable";
export { size, contentType };

export default function Image() {
  return OpenGraphImage({
    title: "Terms of service,",
    description: "Moldable",
  });
}
