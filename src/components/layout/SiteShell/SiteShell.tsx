import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { footerContent } from "@/content/footer";
import { authNav, cartHref, mainNav } from "@/content/navigation";


export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header mainNav={mainNav} authNav={authNav} cartHref={cartHref} />
      <main>{children}</main>
      <Footer content={footerContent} />
    </>
  );
}
