import type { ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/cx";
import styles from "./FloatingCard.module.css";

interface FloatingCardProps extends ComponentPropsWithoutRef<"div"> {
  tone?: "surface" | "brand" | "accent";
}

/** Small surface used for the stat/info chips. Placement is the parent's job (via className). */
export function FloatingCard({ tone = "surface", className, ...rest }: FloatingCardProps) {
  return <div className={cx(styles.card, tone === "brand" && styles.brand, tone === "accent" && styles.accent, className)} {...rest} />;
}
