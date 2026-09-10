import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">
            {site.tagline}
          </p>
          <h1 className="font-heading mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-6xl">
            Smart Technology.
            <span className="block text-blue">Secure Future.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Complete IT, Security, Networking, Software & Solar Solutions Under One Roof.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/80">
            Tirunova Technologies delivers reliable technology solutions for homes, offices,
            hotels, hospitals, schools, industries, retail businesses and other organizations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/contact">Get a Free Consultation</Button>
            <Button href="/contact?intent=quote" variant="outline">
              Request a Quote
            </Button>
            <Button href={site.phones[0].href} variant="ghost">
              Talk to Our Expert
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <Image
            src="/logo.jpg"
            alt={`${site.name} logo`}
            width={1024}
            height={1024}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
