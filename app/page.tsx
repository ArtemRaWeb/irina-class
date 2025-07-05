import Contacts from "./components/moleculas/Contacts";
import FAQSection from "./components/moleculas/FAQSection";
import FeaturesSection from "./components/moleculas/Features";
import Hero from "./components/moleculas/Hero";
import ShowcaseSection from "./components/moleculas/Showcase";
import { sectionWrap } from "./lib/classnames";
import { SectionIds } from "./types/enums";

export default function Main() {
  return (
    <main className="flex flex-col gap-[100px] overflow-y-scroll max-w-6xl mx-auto bg-[var(--c-bg)] pb-4">
      <section
        id={SectionIds.HERO}
        className="flex min-h-screen bg-[url('/background/hero-mobile.webp')]
        md:bg-[url('/background/hero-desktop.webp')] bg-center bg-cover bg-no-repeat"
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
