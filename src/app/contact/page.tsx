import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tirunova Technologies in Jaipur for a free consultation and site survey. Call, email or send an enquiry.",
};

const intentMap: Record<string, string> = {
  quote: "Request a Quote",
  cctv: "CCTV & Smart Surveillance",
  solar: "Solar Energy Solutions",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const { intent } = await searchParams;
  const defaultRequirement = intent ? intentMap[intent] ?? "" : "";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your requirement"
        description="Get a free consultation and site survey. Tell us what you need and our team will help you plan the right solution."
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-navy">{site.name}</h2>
            <p className="mt-2 text-muted">
              {site.founder.title}: {site.founder.name}
            </p>
            <address className="mt-8 space-y-4 text-base not-italic leading-7 text-ink">
              <p>{site.address.full}</p>
              {site.phones.map((phone) => (
                <p key={phone.href}>
                  <a href={phone.href} className="font-medium text-blue hover:text-blue-700">
                    {phone.display}
                  </a>
                </p>
              ))}
              <p>
                <a href={`mailto:${site.email}`} className="font-medium text-blue hover:text-blue-700">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={site.url} className="font-medium text-blue hover:text-blue-700">
                  {site.url.replace("https://", "")}
                </a>
              </p>
            </address>
            <div className="mt-8 overflow-hidden rounded-3xl border border-line">
              <iframe
                title="Tirunova Technologies location"
                src={site.mapEmbed}
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
          <ContactForm defaultRequirement={defaultRequirement} />
        </Container>
      </section>
    </>
  );
}
