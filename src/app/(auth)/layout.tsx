import type { ReactNode } from "react";
import { images } from "@/assets/images";
import { Logo } from "@/components/layout/Logo";
import { AssetImage } from "@/components/ui/AssetImage";
import { StageLayer } from "@/components/ui/StageLayer";
import styles from "./layout.module.css";

/** Sign-in/sign-up chrome: blue grid backdrop and just the logo mark, no site nav. */
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <StageLayer className={styles.grid}>
        <AssetImage src={images.hero.grid} alt="" fill sizes="1440px" />
      </StageLayer>
      <header className={styles.header}>
        <Logo wordmark={false} />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
