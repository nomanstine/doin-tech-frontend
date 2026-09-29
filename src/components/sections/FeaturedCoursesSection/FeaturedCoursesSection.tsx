import Link from "next/link";
import { CourseCard } from "@/components/cards/CourseCard";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Typography } from "@/components/ui/Typography";
import type { FeaturedCoursesContent } from "@/types/home";
import styles from "./FeaturedCoursesSection.module.css";

export function FeaturedCoursesSection({ content }: { content: FeaturedCoursesContent }) {
  const { intro, tabRows, moreLink, courses } = content;
  const lastRow = tabRows.length - 1;

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <SectionHeading title={intro.title} description={intro.description} titleMaxWidth="588px" />

        <nav className={styles.tabs} aria-label="Course categories">
          {tabRows.map((row, index) => (
            <ul key={row[0].label} className={styles.tabRow}>
              {row.map((tab) => (
                <li key={tab.label}>
                  <Chip
                    as={Link}
                    href={tab.href}
                    variant={tab.active ? "accent" : "neutral"}
                    aria-current={tab.active ? "true" : undefined}
                  >
                    {tab.label}
                  </Chip>
                </li>
              ))}
              {index === lastRow && (
                <li>
                  <Typography as={Link} href={moreLink.href} variant="label-m" tone="brand" className={styles.more}>
                    {moreLink.label}
                  </Typography>
                </li>
              )}
            </ul>
          ))}
        </nav>

        <div className={styles.grid}>
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
