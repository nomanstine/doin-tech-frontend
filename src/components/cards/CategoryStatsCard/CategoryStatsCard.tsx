import { Fragment } from "react";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { Typography } from "@/components/ui/Typography";
import { cx } from "@/lib/cx";
import styles from "./CategoryStatsCard.module.css";

interface CategoryStatsCardProps {
  title: string;
  stats: readonly string[];
  className?: string;
}

export function CategoryStatsCard({ title, stats, className }: CategoryStatsCardProps) {
  return (
    <FloatingCard className={cx(styles.card, className)}>
      <Typography as="p" variant="label-m" tone="primary">{title}</Typography>
      <Typography as="p" variant="body-xs" tone="muted" className={styles.stats}>
        {stats.map((stat, index) => (
          <Fragment key={stat}>
            {index > 0 && <span className={styles.separator} aria-hidden="true">•</span>}
            <span>{stat}</span>
          </Fragment>
        ))}
      </Typography>
    </FloatingCard>
  );
}
