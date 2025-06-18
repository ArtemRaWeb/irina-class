import About from "@/components/About";
import Contacts from "@/components/Contacts";
import FAQ from "@/components/FAQ";
import Formats from "@/components/Formats";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
// import ThemeSwitcher from "@/components/ThemeSwitcher"; // если реализовано

export default function Page() {
  return (
    <main className="flex flex-col items-stretch bg-[var(--color-light)] dark:bg-[var(--color-dark)] transition-colors duration-300">
      {/* <ThemeSwitcher /> */}
      <Hero />
      <About />
      <Services />
      <Methodology />
      <Formats />
      <FAQ />
      <Testimonials />
      <Contacts />
      {/* Футер можно вынести отдельно */}
      <footer className="w-full py-8 text-center text-[var(--color-dark-muted)] dark:text-[var(--color-light-muted)] text-sm bg-transparent">
        © {new Date().getFullYear()} uchus-s-irinoy. Все права защищены.
      </footer>
    </main>
  );
}
