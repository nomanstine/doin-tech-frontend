import { AssetImage } from "@/components/ui/AssetImage";
import { Container } from "@/components/ui/Container";
import type { Partner } from "@/types/home";
import styles from "./PartnersSection.module.css";

export function PartnersSection({ partners }: { partners: readonly Partner[] }) {
  return (
    <section className={styles.section} aria-label="Partners">
      <Container>
        <ul className={styles.logos}>
          {partners.map(({ src, name, width, height }) => (
            <li key={src}>
              <AssetImage src={src} alt={name} width={width} height={height} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
