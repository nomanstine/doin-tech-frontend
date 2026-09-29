import Link from "next/link";
import { images } from "@/assets/images";
import { AssetImage } from "@/components/ui/AssetImage";
import { cx } from "@/lib/cx";
import styles from "./Logo.module.css";

interface LogoProps {
  /** "onBrand" for the blue hero, "onLight" for white backgrounds. */
  tone?: "onBrand" | "onLight";
  wordmark?: boolean;
  className?: string;
}

export function Logo({ tone = "onBrand", wordmark = true, className }: LogoProps) {
  return (
    <Link href="/" className={cx(styles.logo, tone === "onLight" && styles.onLight, className)} aria-label="ByteSpace home">
      <AssetImage className={styles.mark} src={images.brand.logoMark} alt="" width={29} height={32} />
      {wordmark && <span className={styles.wordmark}>ByteSpace</span>}
    </Link>
  );
}
