import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Work } from "@/components/sections/Work";
import { Stack } from "@/components/sections/Stack";
import { Timeline } from "@/components/sections/Timeline";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <CaseStudy />
        <Work />
        <Stack />
        <Timeline />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-[var(--line)] py-9">
        <div className="shell flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono text-[11px] text-[var(--faint)]">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="mono text-[11px] text-[var(--faint)]">
            Built with Next.js · Designed and written by hand
          </p>
        </div>
      </footer>
    </>
  );
}
