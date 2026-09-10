import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange sm:text-xs sm:tracking-[0.22em]">
          {eyebrow}
        </p>
        <h1 className="font-heading mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-pretty break-words text-navy sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
