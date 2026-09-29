import Link from "next/link";
import { images } from "@/assets/images";
import { AssetImage } from "@/components/ui/AssetImage";
import { Button } from "@/components/ui/Button";
import { StageLayer } from "@/components/ui/StageLayer";
import { Typography } from "@/components/ui/Typography";
import type { CreatorCtaContent } from "@/types/home";
import { CtaOrnaments } from "./CtaOrnaments";
import styles from "./CreatorCtaSection.module.css";

export function CreatorCtaSection({ content }: { content: CreatorCtaContent }) {
  const { title, description, action } = content;

  return (
    <section className={styles.section}>
      <StageLayer className={styles.grid}>
        <AssetImage src={images.hero.grid} alt="" fill sizes="1440px" />
      </StageLayer>
      <CtaOrnaments />

      <div className={styles.content}>
        <Typography as="h2" variant="heading-m" tone="inverse" className={styles.title}>{title}</Typography>
        <Typography as="p" variant="body-l" tone="inverse">{description}</Typography>
        <Button as={Link} href={action.href}>{action.label}</Button>
      </div>
    </section>
  );
}
