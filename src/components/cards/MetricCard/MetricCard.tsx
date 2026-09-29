import { FloatingCard } from "@/components/ui/FloatingCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Typography } from "@/components/ui/Typography";
import { cx } from "@/lib/cx";
import type { MetricContent } from "@/types/home";
import styles from "./MetricCard.module.css";

interface MetricCardProps extends MetricContent {
  className?: string;
}

/** Blue KPI card. With `progress` it lays out wide (value + delta + bar); without, it stacks compactly. */
export function MetricCard({ title, caption, value, delta, progress, className }: MetricCardProps) {
  const hasProgress = progress !== undefined;
  const valueText = (
    <Typography as="p" variant="heading-2xs" tone="inverse">{value}</Typography>
  );
  const deltaBadge = <span className={styles.delta}>{delta}</span>;

  return (
    <FloatingCard tone="brand" className={cx(styles.card, !hasProgress && styles.compact, className)}>
      <div className={styles.titles}>
        <Typography as="p" variant="label-m">{title}</Typography>
        <p className={styles.caption}>{caption}</p>
      </div>
      {hasProgress ? (
        <>
          <div className={styles.valueRow}>
            {valueText}
            {deltaBadge}
          </div>
          <ProgressBar value={progress} label={`${title} progress`} />
        </>
      ) : (
        <>
          {valueText}
          {deltaBadge}
        </>
      )}
    </FloatingCard>
  );
}
