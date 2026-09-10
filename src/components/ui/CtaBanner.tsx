import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function CtaBanner({
  title = "Looking for a Reliable Technology Partner?",
  description = "From IT infrastructure to smart security, software, cloud and solar — Tirunova Technologies is ready to help.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500">
            Get a free consultation & site survey
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/75">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact">Get a Free Consultation</Button>
          <Button href={site.phones[0].href} variant="light">
            Call {site.phones[0].display}
          </Button>
        </div>
      </Container>
    </section>
  );
}
