import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { solarBrands } from "@/content/site";
import type { Solution } from "@/content/solutions";
import { solutions } from "@/content/solutions";

export function SolutionDetail({ solution }: { solution: Solution }) {
  const related = solutions.filter((item) => item.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={solution.eyebrow}
        title={solution.headline}
        description={solution.description}
      />
      <section className="py-12 sm:py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-w-0">
            <h2 className="font-heading text-2xl font-semibold text-pretty text-navy sm:text-3xl">{solution.name}</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {solution.items.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
            {solution.slug === "solar-energy" ? (
              <div className="mt-10 rounded-3xl border border-line p-5 sm:p-6">
                <h3 className="font-heading text-xl font-semibold text-navy">Solar brands</h3>
                <p className="mt-2 text-sm text-muted">
                  Where applicable, we can supply and install systems using brands we currently
                  source. Final availability is confirmed during consultation.
                </p>
                <p className="mt-4 text-sm font-medium text-navy">{solarBrands.join("  |  ")}</p>
              </div>
            ) : null}
            <div className="mt-8">
              <Button href="/contact">{solution.cta}</Button>
            </div>
          </div>
          <aside className="rounded-3xl bg-navy p-6 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Related solutions
            </p>
            <ul className="mt-6 space-y-4">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/solutions/${item.slug}`} className="text-lg font-medium hover:text-orange-500">
                    {item.name}
                  </Link>
                  <p className="mt-1 text-sm text-white/60">{item.headline}</p>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
