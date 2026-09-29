import type { CSSProperties } from "react";

/** Type-safe helper for passing dynamic values to CSS custom properties. */
export function cssVars(vars: Record<`--${string}`, string | number>): CSSProperties {
  return vars as CSSProperties;
}
