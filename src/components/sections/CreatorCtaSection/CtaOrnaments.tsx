import { images } from "@/assets/images";
import { Ornament, type OrnamentProps } from "@/components/ui/Ornament";
import { StageLayer } from "@/components/ui/StageLayer";
import styles from "./CtaOrnaments.module.css";

const { cta } = images;

type OrnamentConfig = Omit<OrnamentProps, "art" | "mask"> & {
  id: string;
  asset: { art: string; mask: string };
};

const layout: readonly OrnamentConfig[] = [
  { id: "coneLime", asset: cta.coneLime, tint: "lime", bleed: "cone", className: styles.coneLime },
  { id: "springBottomRight", asset: cta.springBottomRight, tint: "lime", className: styles.springBottomRight },
  { id: "springLime", asset: cta.springLime, tint: "lime", className: styles.springLime },
  { id: "springWhite", asset: cta.springWhite, tint: "white", className: styles.springWhite, flipped: true },
  { id: "coneWhite", asset: cta.coneWhite, tint: "white", bleed: "cone", className: styles.coneWhite },
  { id: "ring", asset: cta.ring, tint: "lime", bleed: "cone", className: styles.ring },
  { id: "cylinder", asset: cta.cylinder, tint: "white", bleed: "cone", className: styles.cylinder },
];

export function CtaOrnaments() {
  return (
    <StageLayer className={styles.layer}>
      {layout.map(({ id, asset, ...rest }) => (
        <Ornament key={id} art={asset.art} mask={asset.mask} {...rest} />
      ))}
    </StageLayer>
  );
}
