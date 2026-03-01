"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Página inicial" },
  { href: "/sobre", label: "Sobre" },
  { href: "/terapia", label: "Terapia" },
  { href: "/perguntas", label: "Perguntas frequentes" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState<"pt" | "en">("pt");

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-background/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src="/logo-verde.svg"
              alt=""
              width={140}
              height={38}
              priority
              className="h-9 w-auto"
            />
            <div className="hidden flex-col sm:flex sm:flex-col">
              <span className="text-base font-bold text-foreground leading-tight">
                David Alcantara
              </span>
              <span className="text-xs font-medium text-primary-600">
                Psicólogo Clínico
              </span>
            </div>
          </Link>

        <div className="hidden flex-1 justify-center px-6 md:flex">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(href)
                      ? "text-primary-600"
                      : "text-neutral-700 hover:text-primary-500"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-2 md:gap-4">
          <div
            className="flex rounded-lg border-2 border-primary/30 bg-white p-0.5"
            role="group"
            aria-label="Selecionar idioma"
          >
            <button
              type="button"
              onClick={() => setLocale("pt")}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                locale === "pt"
                  ? "bg-primary-500 text-white"
                  : "text-neutral-600 hover:bg-primary-50 hover:text-primary-600"
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                locale === "en"
                  ? "bg-primary-500 text-white"
                  : "text-neutral-600 hover:bg-primary-50 hover:text-primary-600"
              }`}
            >
              EN
            </button>
          </div>
          <Link
            href="#contato"
            className="hidden rounded-lg border border-primary/20 bg-primary-500 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600 md:inline-flex"
          >
            Marcar consulta
          </Link>

          <button
            type="button"
            className="p-2 text-neutral-700 hover:text-primary-500 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="space-y-1 border-t border-secondary-200 px-4 pb-3 pt-2 md:hidden">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`block rounded px-4 py-2 text-sm font-medium transition-colors ${
                isActive(href)
                  ? "bg-primary-50 text-primary-500"
                  : "text-neutral-700 hover:bg-neutral-100 hover:text-primary-500"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="mt-3 block w-full rounded-lg border border-primary/20 bg-primary-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Book a Session
          </Link>
        </div>
      )}
    </header>
  );
}
