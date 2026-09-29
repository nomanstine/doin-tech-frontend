import Link from "next/link";
import { images } from "@/assets/images";
import { AssetImage } from "@/components/ui/AssetImage";
import { Logo } from "@/components/layout/Logo";
import { NavLink } from "@/components/layout/NavLink";
import type { NavItem } from "@/types/navigation";
import styles from "./Header.module.css";

interface HeaderProps {
  mainNav: readonly NavItem[];
  authNav: readonly NavItem[];
  cartHref: string;
}

export function Header({ mainNav, authNav, cartHref }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />

      <nav className={styles.nav} aria-label="Main">
        {mainNav.map((item) => (
          <NavLink key={item.href} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className={styles.actions}>
        {authNav.map((item) => (
          <NavLink key={item.href} href={item.href}>
            {item.label}
          </NavLink>
        ))}
        <Link href={cartHref} className={styles.cart} aria-label="Cart">
          <AssetImage src={images.icons.bag} alt="" width={24} height={24} />
        </Link>
      </div>
    </header>
  );
}
