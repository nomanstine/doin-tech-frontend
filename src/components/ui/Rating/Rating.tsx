import { images } from "@/assets/images";
import { AssetImage } from "@/components/ui/AssetImage";
import { Typography } from "@/components/ui/Typography";
import styles from "./Rating.module.css";

interface RatingProps {
  value: number;
  count: number;
}

export function Rating({ value, count }: RatingProps) {
  return (
    <div className={styles.rating}>
      <Typography as="p" variant="body-xs" tone="muted">
        <span className={styles.score}>{value.toFixed(1)}</span> ({count})
      </Typography>
      <span className={styles.star} aria-hidden="true">
        <span className={styles.starMark}>
          <AssetImage src={images.icons.star} alt="" fill sizes="16px" />
        </span>
      </span>
    </div>
  );
}
