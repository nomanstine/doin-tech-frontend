import Link from "next/link";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import type { FooterContent } from "@/types/home";
import styles from "./Footer.module.css";

export function Footer({ content }: { content: FooterContent }) {
  const { tagline, newsletter, linkGroups, copyright, legalLinks } = content;

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.intro}>
              <Logo tone="onLight" />
              <Typography as="p" variant="body-s" tone="primary">{tagline}</Typography>
            </div>
            <NewsletterForm {...newsletter} />
          </div>

          <div className={styles.links}>
            {linkGroups.map((group) => (
              <nav key={group.label} aria-label={group.label}>
                <ul className={styles.linkList}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className={styles.legal}>
          <Typography as="p" variant="body-xs" tone="primary">{copyright}</Typography>
          <ul className={styles.legalLinks}>
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Typography as={Link} href={link.href} variant="body-xs" tone="primary">{link.label}</Typography>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
