import {
  OpenGraphImage,
  contentType,
  size,
} from "@/components/seo/opengraph-image";

export const alt = "Moldable - Personal software. Built for change.";
export { size, contentType };

export default function Image() {
  return OpenGraphImage({
    title: "Personal software,",
    description: "Built for change",
  });
}
