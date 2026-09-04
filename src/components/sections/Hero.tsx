import { Reveal } from "../ui/Reveal";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 520px at 8% 0%, rgba(200,135,62,0.07), transparent 65%)",
        }}
      />

      <div className="shell relative">
        <div className="grid items-center gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <Reveal>
              <p className="eyebrow flex items-center gap-2.5">
                {profile.availability.active && (
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                )}
                {profile.role} · {profile.location}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="h-display mt-6 text-[clamp(2.8rem,8vw,5.5rem)]">
                Karthik Reddy
                <br />
                <span className="text-[var(--muted)]">Yalala</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="prose-body mt-8 text-[17px] md:text-[18px]">
                {profile.claim}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#work-avis"
                  className="rounded-full px-6 py-3 text-[14px] font-medium transition-transform duration-200 active:translate-y-px"
                  style={{ background: "var(--accent)", color: "#14100a" }}
                >
                  See the production work
                </a>
                <a
                  href={profile.contact.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--line-hi)] px-6 py-3 text-[14px] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Résumé
                </a>
              </div>
            </Reveal>
          </div>

        </div>

        {/* Proof row — hairline separated, no cards */}
        <Reveal delay={320}>
          <dl className="mt-20 grid grid-cols-2 border-t border-[var(--line)] md:grid-cols-4">
            {profile.proof.map((p) => (
              <div
                key={p.label}
                className="border-b border-[var(--line)] py-5 pr-6 md:border-b-0"
              >
                <dt className="mono text-[22px] text-[var(--text)] md:text-[26px]">
                  {p.value}
                </dt>
                <dd className="mt-1.5 text-[12.5px] leading-snug text-[var(--faint)]">
                  {p.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
