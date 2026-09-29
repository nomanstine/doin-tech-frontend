import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { NotFoundSection } from "@/components/sections/NotFoundSection";
import { notFoundContent } from "@/content/notFound";

export const metadata: Metadata = { title: "Page Not Found" };

/** Rendered for any unmatched URL (Next.js sends the 404 status). */
export default function NotFound() {
  return (
    <SiteShell>
      <NotFoundSection content={notFoundContent} />
    </SiteShell>
  );
}
