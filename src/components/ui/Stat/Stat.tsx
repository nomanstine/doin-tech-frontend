import { Typography } from "@/components/ui/Typography";
import styles from "./Stat.module.css";

interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className={styles.stat}>
      <Typography as="p" variant="figure" tone="brand">{value}</Typography>
      <Typography as="p" variant="body-l" tone="secondary">{label}</Typography>
    </div>
  );
}
