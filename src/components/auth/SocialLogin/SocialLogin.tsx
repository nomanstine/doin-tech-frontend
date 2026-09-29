import Link from "next/link";
import { AssetImage } from "@/components/ui/AssetImage";
import { Typography } from "@/components/ui/Typography";
import type { SocialProvider } from "@/types/auth";
import styles from "./SocialLogin.module.css";

export function SocialLogin({ providers }: { providers: readonly SocialProvider[] }) {
  return (
    <div className={styles.social}>
      <div className={styles.divider} role="separator" aria-label="or">
        <span className={styles.line} />
        <Typography as="span" variant="body-l" className={styles.or}>
          or
        </Typography>
        <span className={styles.line} />
      </div>
      <ul className={styles.providers}>
        {providers.map(({ id, label, href, iconSrc }) => (
          <li key={id}>
            <Link href={href} className={styles.provider} aria-label={`Continue with ${label}`}>
              <AssetImage src={iconSrc} alt="" width={40} height={40} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
