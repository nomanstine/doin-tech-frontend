import { AssetImage } from "@/components/ui/AssetImage";
import { cssVars } from "@/lib/cssVars";
import { cx } from "@/lib/cx";
import styles from "./Ornament.module.css";

const tintClass = { lime: styles.tintLime, white: styles.tintWhite } as const;

export interface OrnamentProps {
  art: string;
  mask: string;
  tint: keyof typeof tintClass;
  /** Springs and cones are cropped with slightly different bleed. */
  bleed?: "spring" | "cone";
  flipped?: boolean;
  className?: string;
}

/** A tinted 3D decoration. Decorative only, so it is hidden from assistive tech. */
export function Ornament({ art, mask, tint, bleed = "spring", flipped = false, className }: OrnamentProps) {
  return (
    <div className={cx(styles.ornament, flipped && styles.flipped, className)}>
      <div className={cx(styles.artwork, bleed === "cone" && styles.artworkCone)}>
        <AssetImage className={styles.image} src={art} alt="" fill sizes="400px" />
        <div className={cx(styles.tint, tintClass[tint])} style={cssVars({ "--ornament-mask": `url(${mask})` })} />
      </div>
    </div>
  );
}
