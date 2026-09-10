import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { solutionIcons } from "@/components/ui/Icons";
import { PageHero } from "@/components/ui/PageHero";
import { solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "IT and networking, CCTV, access control, cloud, cybersecurity, software, solar and IT consultancy from Tirunova Technologies.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Integrated technology solutions under one roof"
        description="Tirunova Technologies — your single technology partner for IT, security, software and solar solutions. Explore each practice in detail rather than a long product catalogue on one page."
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solutionIcons[index];
            return (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="rounded-3xl border border-line p-7 transition-shadow hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-2 text-blue">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="font-heading mt-5 text-2xl font-semibold text-navy">
                  {solution.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">{solution.description}</p>
                <p className="mt-5 text-sm font-semibold text-orange">{solution.cta} →</p>
              </Link>
            );
          })}
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
