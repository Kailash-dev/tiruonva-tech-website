import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { solutionIcons } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  approach,
  benefits,
  industries,
  oemPartners,
  processSteps,
  whyChoose,
} from "@/content/site";
import { solutions } from "@/content/solutions";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-y border-line bg-surface py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Introduction"
            title="Technology That Works. Security You Can Trust."
            description="Tirunova Technologies is a technology solutions company providing end-to-end IT infrastructure, networking, cybersecurity, surveillance, software, cloud, security systems and solar solutions. Our focus is simple — quality products, professional installation, reliable support and long-term customer relationships."
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Our approach
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {approach.map((step, index) => (
                <span
                  key={step}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm"
                >
                  {step}
                  {index < approach.length - 1 ? " →" : ""}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Solutions"
            title="One technology partner. Eight focused practices."
            description="We position Tirunova as an integrated IT, security, software and solar company — with dedicated pages for each practice rather than a long product list on the homepage."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solutionIcons[index];
              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group rounded-3xl border border-line bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-2 text-blue">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading mt-5 text-xl font-semibold text-navy group-hover:text-blue">
                    {solution.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{solution.headline}</p>
                  <p className="mt-4 text-sm font-semibold text-orange">{solution.cta} →</p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Tirunova"
            title="Why choose Tirunova Technologies"
            light
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyChoose.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Industries we serve"
            description="Solutions designed around the operational needs of homes, businesses and institutions."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry) => (
              <article key={industry.name} className="rounded-2xl border border-line bg-surface p-5">
                <h3 className="font-heading text-base font-semibold text-navy">{industry.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{industry.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="A clear path from first conversation to ongoing support"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.number} className="rounded-3xl bg-white p-6">
                <p className="text-sm font-semibold tracking-[0.18em] text-orange">{step.number}</p>
                <h3 className="font-heading mt-3 text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Client benefits" title="What customers gain" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {benefits.map((item) => (
              <article key={item.title} className="border-t-2 border-orange pt-4">
                <h3 className="font-heading text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-16">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Technology partners
            </p>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              We work with established OEM platforms according to project requirements. Brands are
              listed as text, not as a logo wall.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {oemPartners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-full border border-line px-4 py-2 text-sm text-navy"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <Button href="/about" variant="outline">
              About Tirunova
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
