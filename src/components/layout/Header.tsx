"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigation, site } from "@/content/site";
import { solutions } from "@/content/solutions";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
    setSolutionsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-[0_1px_0_rgba(11,29,54,0.08)] backdrop-blur">
      <div className="hidden border-b border-white/10 bg-navy text-white md:block">
        <Container className="flex h-10 items-center justify-between text-xs tracking-wide">
          <p className="text-white/80">{site.address.city}, {site.address.state}</p>
          <div className="flex items-center gap-6">
            {site.phones.map((phone) => (
              <a key={phone.href} href={phone.href} className="hover:text-orange-500">
                {phone.display}
              </a>
            ))}
            <a href={`mailto:${site.email}`} className="hover:text-orange-500">
              {site.email}
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between gap-6 py-2.5 lg:py-3">
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Image
            src="/logo.jpg"
            alt={site.name}
            width={1024}
            height={1024}
            priority
            className="h-20 w-20 object-contain sm:h-24 sm:w-24"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            if ("childrenKey" in item && item.childrenKey === "solutions") {
              const childActive = pathname.startsWith("/solutions");
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                      childActive ? "text-blue" : "text-ink hover:text-blue",
                    )}
                    aria-expanded={solutionsOpen}
                    aria-haspopup="true"
                    onClick={() => setSolutionsOpen((current) => !current)}
                  >
                    {item.label}
                    <span aria-hidden="true">▾</span>
                  </button>
                  {solutionsOpen ? (
                    <div className="absolute left-0 top-full z-20 w-[22rem] pt-2">
                      <div className="rounded-2xl border border-line bg-white p-3 shadow-xl">
                        <Link
                          href="/solutions"
                          className="mb-1 block rounded-xl px-3 py-2 text-sm font-semibold text-navy hover:bg-surface"
                        >
                          All solutions
                        </Link>
                        {solutions.map((solution) => (
                          <Link
                            key={solution.slug}
                            href={`/solutions/${solution.slug}`}
                            className="block rounded-xl px-3 py-2 text-sm text-ink hover:bg-surface hover:text-blue"
                          >
                            {solution.menuLabel}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  active ? "text-blue" : "text-ink hover:text-blue",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/contact" className="hidden sm:inline-flex">
            Get Consultation
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={cn("h-0.5 w-5 bg-navy transition", open && "translate-y-2 rotate-45")} />
              <span className={cn("h-0.5 w-5 bg-navy transition", open && "opacity-0")} />
              <span className={cn("h-0.5 w-5 bg-navy transition", open && "-translate-y-2 -rotate-45")} />
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-line bg-white lg:hidden">
          <Container className="flex max-h-[calc(100vh-6rem)] flex-col gap-1 overflow-y-auto py-4">
            {navigation.map((item) => {
              if ("childrenKey" in item && item.childrenKey === "solutions") {
                return (
                  <div key={item.href} className="py-1">
                    <Link href="/solutions" className="block px-2 py-2 text-base font-semibold text-navy">
                      Solutions
                    </Link>
                    <div className="ml-3 border-l border-line pl-3">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.slug}
                          href={`/solutions/${solution.slug}`}
                          className="block py-2 text-sm text-muted"
                        >
                          {solution.menuLabel}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-2 text-base font-medium text-navy"
                >
                  {item.label}
                </Link>
              );
            })}
            <Button href="/contact" className="mt-3">
              Get a Free Consultation
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
