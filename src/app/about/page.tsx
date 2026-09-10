import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { approach, site, values, whyChoose } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Tirunova Technologies was founded on 7 June 2024 by Deependra Gadwal to deliver integrated IT, security, software and solar solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Tirunova Technologies"
        description="Founded on 7 June 2024 by Deependra Gadwal, Tirunova Technologies was established with a vision to provide businesses and individuals with dependable, integrated and future-ready technology solutions."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Image
            src="/logo.jpg"
            alt={`${site.name} logo`}
            width={1024}
            height={1024}
            className="mx-auto w-full max-w-sm object-contain"
          />
          <div>
            <p className="text-lg leading-8 text-ink/85">
              We bring together IT infrastructure, networking, cybersecurity, surveillance,
              software, cloud computing, security systems and solar solutions under one technology
              partner.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Consultation → Design → Supply → Installation → Configuration → Support → AMC
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-surface p-5">
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">Founded</dt>
                <dd className="mt-1 font-heading text-lg font-semibold text-navy">{site.founded}</dd>
              </div>
              <div className="rounded-2xl bg-surface p-5">
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">Leadership</dt>
                <dd className="mt-1 font-heading text-lg font-semibold text-navy">
                  {site.founder.name}
                </dd>
                <dd className="text-sm text-muted">{site.founder.title}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-8">
            <h2 className="font-heading text-2xl font-semibold text-navy">Our Vision</h2>
            <p className="mt-4 leading-7 text-muted">
              To become a trusted technology solutions partner delivering innovative, secure and
              scalable solutions for businesses and communities.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-8">
            <h2 className="font-heading text-2xl font-semibold text-navy">Our Mission</h2>
            <p className="mt-4 leading-7 text-muted">
              To simplify technology for our customers by providing reliable products, professional
              implementation and responsive technical support.
            </p>
          </article>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Values" title="What we stand for" />
          <div className="mt-8 flex flex-wrap gap-3">
            {values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-line px-5 py-2 text-sm font-medium text-navy"
              >
                {value}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500">
              Founder message
            </p>
            <h2 className="font-heading mt-3 text-3xl font-semibold">
              A note from {site.founder.name}
            </h2>
          </div>
          <blockquote className="text-lg leading-8 text-white/80">
            Tirunova was founded to give businesses and families a single, accountable technology
            partner — not a fragmented set of vendors. We focus on quality products, professional
            implementation and relationships that last after handover. If we can make technology
            simpler, more secure and more useful for our customers, we are doing our job.
            <footer className="mt-6 text-sm text-white/60">
              {site.founder.name}, {site.founder.title}
            </footer>
          </blockquote>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Strengths" title="Why Tirunova Technologies" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {whyChoose.map((item) => (
              <article key={item.title} className="rounded-3xl border border-line p-6">
                <h3 className="font-heading text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {approach.map((step) => (
              <span key={step} className="rounded-full bg-surface px-4 py-2 text-sm text-navy">
                {step}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
