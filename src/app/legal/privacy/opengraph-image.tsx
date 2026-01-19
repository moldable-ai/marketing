import {
  OpenGraphImage,
  contentType,
  size,
} from "@/components/seo/opengraph-image";

export const alt = "Privacy Policy - Moldable";
export { size, contentType };

export default function Image() {
  return OpenGraphImage({
    title: "Privacy policy,",
    description: "Moldable",
  });
}
