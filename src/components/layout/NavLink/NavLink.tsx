"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./NavLink.module.css";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

/** The only client component in the header: it needs the pathname to mark the current page. */
export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cx(styles.link, isActive && styles.active)}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
