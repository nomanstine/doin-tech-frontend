import { images } from "@/assets/images";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { AssetImage } from "@/components/ui/AssetImage";
import { Container } from "@/components/ui/Container";
import { StageLayer } from "@/components/ui/StageLayer";
import { Typography } from "@/components/ui/Typography";
import type { TestimonialsContent } from "@/types/home";
import styles from "./TestimonialsSection.module.css";

const [glowOne, glowTwo, glowThree] = images.testimonials.glows;

export function TestimonialsSection({ content }: { content: TestimonialsContent }) {
  const { title, description, testimonials } = content;

  return (
    <section className={styles.section}>
      <StageLayer className={styles.backdrop}>
        <div className={`${styles.glow} ${styles.glow1}`}>
          <div className={styles.glowBleedLg}>
            <AssetImage src={glowOne} alt="" fill sizes="1220px" />
          </div>
        </div>
        <div className={`${styles.glow} ${styles.glow2}`}>
          <div className={styles.glowBleedMd}>
            <AssetImage src={glowTwo} alt="" fill sizes="752px" />
          </div>
        </div>
        <div className={`${styles.glow} ${styles.glow3}`}>
          <div className={styles.glowBleedLg}>
            <AssetImage src={glowThree} alt="" fill sizes="1220px" />
          </div>
        </div>
      </StageLayer>

      <Container className={styles.content}>
        <div className={styles.header}>
          <Typography as="h2" variant="heading-m" tone="black">{title}</Typography>
          <Typography as="p" variant="body-l" tone="charcoal">{description}</Typography>
        </div>
        <div className={styles.cards}>
          {testimonials.map(({ id, ...testimonial }) => (
            <TestimonialCard key={id} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
