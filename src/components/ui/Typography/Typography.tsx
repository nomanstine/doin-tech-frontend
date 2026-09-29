import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "@/lib/cx";
import styles from "./Typography.module.css";

const variantClass = {
  "heading-l": styles.headingL,
  "heading-m": styles.headingM,
  "heading-s": styles.headingS,
  "heading-2xs": styles.heading2xs,
  "heading-xs": styles.headingXs,
  stat: styles.stat,
  figure: styles.figure,
  "body-l": styles.bodyL,
  "body-m": styles.bodyM,
  "body-s": styles.bodyS,
  "body-xs": styles.bodyXs,
  "label-xl": styles.labelXl,
  "label-l": styles.labelL,
  "label-m": styles.labelM,
  "label-s": styles.labelS,
  "label-xs": styles.labelXs,
} as const;

const toneClass = {
  white: styles.toneWhite,
  inverse: styles.toneInverse,
  "inverse-muted": styles.toneInverseMuted,
  primary: styles.tonePrimary,
  secondary: styles.toneSecondary,
  muted: styles.toneMuted,
  heading: styles.toneHeading,
  black: styles.toneBlack,
  charcoal: styles.toneCharcoal,
  brand: styles.toneBrand,
} as const;

export type TypographyVariant = keyof typeof variantClass;
export type TypographyTone = keyof typeof toneClass;

type OwnProps<T extends ElementType> = {
  as?: T;
  variant: TypographyVariant;
  tone?: TypographyTone;
  className?: string;
};

export type TypographyProps<T extends ElementType> = OwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof OwnProps<T>>;

/** Renders any element with a design-system text style. Semantics (as) and looks (variant) stay independent. */
export function Typography<T extends ElementType = "p">({
  as,
  variant,
  tone,
  className,
  ...rest
}: TypographyProps<T>) {
  const Component: ElementType = as ?? "p";
  return <Component className={cx(variantClass[variant], tone && toneClass[tone], className)} {...rest} />;
}
