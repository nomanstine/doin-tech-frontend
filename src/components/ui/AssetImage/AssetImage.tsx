import Image, { type ImageProps } from "next/image";

/** next/image wrapper: SVGs skip the optimizer (they are already vector). `alt` stays required. */
export function AssetImage({ src, alt, unoptimized, ...rest }: ImageProps) {
  const isSvg = typeof src === "string" && src.endsWith(".svg");
  return <Image src={src} alt={alt} unoptimized={unoptimized ?? isSvg} {...rest} />;
}
