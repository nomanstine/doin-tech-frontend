import { AssetImage } from "@/components/ui/AssetImage";
import { Typography } from "@/components/ui/Typography";
import type { Testimonial } from "@/types/home";
import styles from "./TestimonialCard.module.css";

export function TestimonialCard({ name, role, quote, avatarSrc }: Omit<Testimonial, "id">) {
  return (
    <article className={styles.card}>
      <span className={styles.avatar}>
        <AssetImage src={avatarSrc} alt="" fill sizes="80px" />
      </span>
      <div className={styles.person}>
        <Typography as="p" variant="heading-xs" tone="black">{name}</Typography>
        <Typography as="p" variant="body-l" tone="brand">{role}</Typography>
      </div>
      <blockquote className={styles.quote}>
        <Typography as="p" variant="body-l" tone="charcoal">{quote}</Typography>
      </blockquote>
    </article>
  );
}
