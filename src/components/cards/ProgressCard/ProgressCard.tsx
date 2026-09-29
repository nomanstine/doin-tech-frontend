import { FloatingCard } from "@/components/ui/FloatingCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Typography } from "@/components/ui/Typography";
import { cx } from "@/lib/cx";
import styles from "./ProgressCard.module.css";

interface ProgressCardProps {
  label: string;
  value: number;
  className?: string;
}

export function ProgressCard({ label, value, className }: ProgressCardProps) {
  return (
    <FloatingCard className={cx(styles.card, className)}>
      <Typography as="p" variant="label-s" tone="primary">{label}</Typography>
      <Typography as="p" variant="stat" tone="primary">{value}%</Typography>
      <ProgressBar value={value} label={label} />
    </FloatingCard>
  );
}
