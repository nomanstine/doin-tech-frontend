import { images } from "@/assets/images";
import { Ornament, type OrnamentProps } from "@/components/ui/Ornament";
import { StageLayer } from "@/components/ui/StageLayer";
import styles from "./HeroOrnaments.module.css";

const { ornaments } = images;

type OrnamentConfig = Omit<OrnamentProps, "art" | "mask"> & {
  id: string;
  asset: { art: string; mask: string };
};

const layout: readonly OrnamentConfig[] = [
  { id: "springA", asset: ornaments.springA, tint: "white", className: styles.springA },
  { id: "springBLime", asset: ornaments.springBLime, tint: "lime", className: styles.springBLime },
  { id: "springBWhite", asset: ornaments.springBWhite, tint: "white", className: styles.springBWhite, flipped: true },
  { id: "ring", bleed: "cone", asset: ornaments.ring, tint: "white", className: styles.ring },
  { id: "cylinder", bleed: "cone", asset: ornaments.cylinder, tint: "lime", className: styles.cylinder },
  { id: "pyramid", bleed: "cone", asset: ornaments.pyramid, tint: "white", className: styles.pyramid },
];

export function HeroOrnaments() {
  return (
    <StageLayer className={styles.layer}>
      {layout.map(({ id, asset, ...rest }) => (
        <Ornament key={id} art={asset.art} mask={asset.mask} {...rest} />
      ))}
    </StageLayer>
  );
}
