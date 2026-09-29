import { images } from "@/assets/images";
import { AssetImage } from "@/components/ui/AssetImage";
import { cx } from "@/lib/cx";
import styles from "./AvatarStack.module.css";

const sizeClass = { md: styles.md, sm: styles.sm } as const;
const badgeSrc = { lime: images.avatars.badge, dark: images.avatars.badgeDark } as const;
const sizePx = { md: "43px", sm: "32px" } as const;

interface AvatarStackProps {
  /** Image URLs; purely decorative, so no alt text. */
  avatars: readonly string[];
  overflowLabel: string;
  size?: keyof typeof sizeClass;
  /** "dark" pairs with lime surfaces. */
  badgeTone?: keyof typeof badgeSrc;
}

export function AvatarStack({ avatars, overflowLabel, size = "md", badgeTone = "lime" }: AvatarStackProps) {
  return (
    <div className={cx(styles.stack, sizeClass[size], badgeTone === "dark" && styles.dark)}>
      {avatars.map((src) => (
        <span key={src} className={styles.avatar}>
          <AssetImage src={src} alt="" fill sizes={sizePx[size]} />
        </span>
      ))}
      <span className={styles.badge}>
        <AssetImage src={badgeSrc[badgeTone]} alt="" fill sizes={sizePx[size]} />
        <span className={styles.badgeLabel}>{overflowLabel}</span>
      </span>
    </div>
  );
}
