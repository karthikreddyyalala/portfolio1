import Image from "next/image";
import { Reveal } from "../ui/Reveal";
import { profile } from "@/content/profile";

export function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span>05</span>
                <span aria-hidden className="h-px w-8 bg-[var(--line-hi)]" />
                <span>About</span>
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-7 overflow-hidden rounded-[16px] border border-[var(--line)]">
                <Image
                  src="/images/about-photo.webp"
                  alt="Karthik Reddy Yalala"
                  width={560}
                  height={700}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-8 md:pt-14">
            {profile.about.map((para, i) => (
              <Reveal key={i} delay={100 + i * 70}>
                <p
                  className={
                    i === 0
                      ? "text-[19px] leading-relaxed text-[var(--text)] md:text-[22px]"
                      : "prose-body mt-6 text-[15.5px]"
                  }
                >
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
