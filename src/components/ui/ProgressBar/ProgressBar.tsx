import { cssVars } from "@/lib/cssVars";
import { cx } from "@/lib/cx";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  /** 0–100 */
  value: number;
  label: string;
  className?: string;
}

export function ProgressBar({ value, label, className }: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, value));
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      className={cx(styles.track, className)}
    >
      <div className={styles.fill} style={cssVars({ "--progress": `${percent}%` })} />
    </div>
  );
}
