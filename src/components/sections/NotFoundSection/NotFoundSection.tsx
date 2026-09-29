import Link from "next/link";
import { images } from "@/assets/images";
import { AssetImage } from "@/components/ui/AssetImage";
import { Button } from "@/components/ui/Button";
import { StageLayer } from "@/components/ui/StageLayer";
import { Typography } from "@/components/ui/Typography";
import type { NotFoundContent } from "@/types/system";
import styles from "./NotFoundSection.module.css";

export function NotFoundSection({ content }: { content: NotFoundContent }) {
  const { code, title, description, action } = content;

  return (
    <section className={styles.section}>
      <StageLayer className={styles.grid}>
        <AssetImage src={images.hero.grid} alt="" fill sizes="1440px" />
      </StageLayer>

      {/* The number is decoration; the heading carries the message. */}
      <p className={styles.code} aria-hidden="true">{code}</p>

      <div className={styles.content}>
        <Typography as="h1" variant="heading-l" tone="white" className={styles.title}>{title}</Typography>
        <Typography as="p" variant="body-l" tone="inverse-muted">{description}</Typography>
        <Button as={Link} href={action.href}>{action.label}</Button>
      </div>
    </section>
  );
}
