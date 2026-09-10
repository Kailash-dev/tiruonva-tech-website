import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { productGroups } from "@/content/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Communication, computing, audio visual, networking and security products supplied by Tirunova Technologies.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Security and technology products"
        description="A focused product catalogue organised by category. We recommend solutions according to requirement, performance and budget — then install and support them properly."
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          {productGroups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-line p-7">
              <h2 className="font-heading text-2xl font-semibold text-navy">{group.title}</h2>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-xl bg-surface px-4 py-3 text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
        <Container className="mt-10">
          <Button href="/contact?intent=quote">Request a Quote</Button>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
