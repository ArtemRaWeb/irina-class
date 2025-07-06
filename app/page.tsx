"use client";

import Contacts from "@/app/components/moleculas/Contacts";
import FAQSection from "@/app/components/moleculas/FAQSection";
import FeaturesSection from "@/app/components/moleculas/Features";
import Hero from "@/app/components/moleculas/Hero";
import ShowcaseSection from "@/app/components/moleculas/Showcase";
import { sectionWrap } from "@/app/lib/classnames";
import { SectionIds } from "@/app/types/enums";
import { useMediaQuery } from "usehooks-ts";

export default function Main() {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const backgroundImage = isMobile
    ? `${prefix}/background/hero-mobile.webp`
    : `${prefix}/background/hero-desktop.webp`;

  return (
    <main className="flex flex-col gap-[100px] overflow-y-scroll max-w-6xl mx-auto bg-[var(--c-bg)] pb-4">
      <section
        id={SectionIds.HERO}
        className="flex min-h-screen bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Hero />
      </section>

      <section id={SectionIds.FEATURES} className={sectionWrap}>
        <FeaturesSection />
      </section>

      <section id={SectionIds.SHOWCASE} className={sectionWrap}>
        <ShowcaseSection />
      </section>

      <section id={SectionIds.FAQ} className={sectionWrap}>
        <FAQSection />
      </section>

      <section id={SectionIds.CONTACTS} className={sectionWrap}>
        <Contacts />
      </section>
    </main>
  );
}
