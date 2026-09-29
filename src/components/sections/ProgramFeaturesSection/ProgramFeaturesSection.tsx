import { images } from "@/assets/images";
import { AssetImage } from "@/components/ui/AssetImage";
import { StageLayer } from "@/components/ui/StageLayer";
import type { ProgramFeaturesContent } from "@/types/home";
import { CreatorFeature } from "./CreatorFeature";
import { LearnerFeature } from "./LearnerFeature";
import styles from "./ProgramFeaturesSection.module.css";

export function ProgramFeaturesSection({ content }: { content: ProgramFeaturesContent }) {
  return (
    <section className={styles.section}>
      <StageLayer className={styles.backdrop}>
        <div className={`${styles.art} ${styles.blobs}`}>
          <div className={styles.blobsBleed}>
            <AssetImage src={images.feature.backdropBlobs} alt="" fill sizes="2536px" />
          </div>
        </div>
        <div className={`${styles.art} ${styles.glow}`}>
          <div className={styles.glowBleed}>
            <AssetImage src={images.feature.backdropGlow} alt="" fill sizes="752px" />
          </div>
        </div>
      </StageLayer>

      <div className={styles.content}>
        <LearnerFeature {...content.learners} />
        <CreatorFeature {...content.creators} />
      </div>
    </section>
  );
}
