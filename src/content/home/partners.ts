import { images } from "@/assets/images";
import type { Partner } from "@/types/home";

// Placeholder "Logoipsum" logos from the design; swap for real partner logos.
const sizes = [
  [167, 41],
  [168, 41],
  [170, 41],
  [170, 41],
  [169, 42],
] as const;

export const partners: readonly Partner[] = images.partners.map((src, index) => ({
  src,
  name: "Logoipsum",
  width: sizes[index][0],
  height: sizes[index][1],
}));
