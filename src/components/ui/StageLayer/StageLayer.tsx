import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./StageLayer.module.css";

interface StageLayerProps {
  children: ReactNode;
  className?: string;
}

export function StageLayer({ children, className }: StageLayerProps) {
  return (
    <div className={cx(styles.stage, className)} aria-hidden="true">
      {children}
    </div>
  );
}
