import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "@/lib/cx";
import styles from "./Chip.module.css";

const sizeClass = { sm: styles.sm, md: styles.md } as const;
const variantClass = { neutral: styles.neutral, glass: styles.glass, accent: styles.accent } as const;

export type ChipSize = keyof typeof sizeClass;
export type ChipVariant = keyof typeof variantClass;

type OwnProps<T extends ElementType> = { as?: T; size?: ChipSize; variant?: ChipVariant; className?: string };
export type ChipProps<T extends ElementType> = OwnProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof OwnProps<T>>;

/** Pill used for tags, badges and filter tabs. Render as a link with `as={Link}`. */
export function Chip<T extends ElementType = "span">({
  as,
  size = "md",
  variant = "neutral",
  className,
  ...rest
}: ChipProps<T>) {
  const Component: ElementType = as ?? "span";
  return <Component className={cx(styles.chip, sizeClass[size], variantClass[variant], className)} {...rest} />;
}
