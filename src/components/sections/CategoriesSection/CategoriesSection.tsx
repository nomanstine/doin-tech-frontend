import { CategoryCard } from "@/components/cards/CategoryCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CategoriesContent } from "@/types/home";
import styles from "./CategoriesSection.module.css";

export function CategoriesSection({ content }: { content: CategoriesContent }) {
  const { intro, categories } = content;

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <SectionHeading size="s" title={intro.title} description={intro.description} />
        <div className={styles.grid}>
          {categories.map(({ id, ...category }) => (
            <CategoryCard key={id} {...category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
