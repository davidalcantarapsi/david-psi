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

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-primary bg-background shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-verde.svg"
            alt="David - Psicólogo"
            width={180}
            height={48}
            priority
            className="h-12 w-auto"
          />
          <span className="sr-only">David</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                isActive(href)
                  ? "border-b-2 border-accent text-primary-600"
                  : "text-neutral-700 hover:text-primary-500"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="p-2 text-neutral-700 hover:text-primary-500 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-2 border-t border-secondary-200 px-4 pb-4 pt-2 md:hidden">
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
        </div>
      )}
    </nav>
  );
}
