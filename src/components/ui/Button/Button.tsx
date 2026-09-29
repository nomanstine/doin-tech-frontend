import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

// Add a new look by adding a key here; the component logic never changes (open/closed).
const variantClass = { primary: styles.primary } as const;

export type ButtonVariant = keyof typeof variantClass;

type OwnProps<T extends ElementType> = { as?: T; variant?: ButtonVariant; className?: string };
export type ButtonProps<T extends ElementType> = OwnProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof OwnProps<T>>;

/** A <button> by default; pass `as={Link}` (with href) for call-to-action links. */
export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  className,
  ...rest
}: ButtonProps<T>) {
  const Component: ElementType = as ?? "button";
  const defaults = Component === "button" ? { type: "button" } : {};
  return <Component className={cx(styles.button, variantClass[variant], className)} {...defaults} {...rest} />;
}
