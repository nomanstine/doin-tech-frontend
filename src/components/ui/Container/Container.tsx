import type { ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/cx";
import styles from "./Container.module.css";

/** Centres content to the site's max width, with a small gutter on narrow screens. */
export function Container({ className, ...rest }: ComponentPropsWithoutRef<"div">) {
  return <div className={cx(styles.container, className)} {...rest} />;
}
