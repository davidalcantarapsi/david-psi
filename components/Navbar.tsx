"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation, useLocalePath, useLocale } from "./LocaleProvider";

export default function Navbar() {
  const { t, attr } = useTranslation("nav");
  const { locale, setLocale } = useLocale();
  const localePath = useLocalePath();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const NAV_LINKS = [
    { path: "/", labelKey: "home" },
    { path: "/about", labelKey: "about" },
    { path: "/therapy", labelKey: "therapy" },
    { path: "/faq", labelKey: "faq" },
    { path: "/blog", labelKey: "blog" },
  ];

  const isActive = (path: string) => {
    const full = localePath(path);
    if (path === "/") return pathname === full;
    return pathname.startsWith(full);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-700 bg-neutral-900/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={localePath("/")} className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo-amarelo.svg"
            alt=""
            width={140}
            height={38}
            priority
            className="h-9 w-auto drop-shadow-[0_0_0.5px_#E8C547] filter-[drop-shadow(0_0_0.5px_#E8C547)_drop-shadow(0_0_0.5px_#E8C547)]"
          />
          <div className="hidden flex-col sm:flex sm:flex-col">
            <span data-i18n="nav.brandName" className="text-base leading-tight font-bold text-white">
              {t("brandName")}
            </span>
            <span data-i18n="nav.brandSubtitle" className="text-xs font-medium text-accent/90">
              {t("brandSubtitle")}
            </span>
          </div>
        </Link>

        <div className="hidden flex-1 justify-center px-6 md:flex">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map(({ path, labelKey }) => (
              <li key={path}>
                <Link
                  href={localePath(path)}
                  {...attr(labelKey)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(path)
                      ? "text-accent"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {t(labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-2 md:gap-4">
          <div
            className="flex rounded-lg border border-neutral-600 bg-neutral-800 p-0.5"
            role="group"
            aria-label={t("selectLanguage")}
          >
            <button
              type="button"
              onClick={() => setLocale("pt")}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                locale === "pt"
                  ? "bg-accent text-neutral-900"
                  : "text-neutral-300 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                locale === "en"
                  ? "bg-accent text-neutral-900"
                  : "text-neutral-300 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
          <Link
            href="#contato"
            data-i18n="nav.bookSession"
            className="hidden rounded-lg border border-accent/50 bg-accent px-3 py-1.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-accent/90 md:inline-flex"
          >
            {t("bookSession")}
          </Link>

          <button
            type="button"
            className="p-2 text-neutral-300 hover:text-white md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={t("menuLabel")}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="space-y-1 border-t border-neutral-700 bg-neutral-900 px-4 pb-3 pt-2 md:hidden">
          {NAV_LINKS.map(({ path, labelKey }) => (
            <Link
              key={path}
              href={localePath(path)}
              onClick={() => setIsOpen(false)}
              {...attr(labelKey)}
              className={`block rounded px-4 py-2 text-sm font-medium transition-colors ${
                isActive(path)
                  ? "bg-neutral-800 text-accent"
                  : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
              }`}
            >
              {t(labelKey)}
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={() => setIsOpen(false)}
            data-i18n="nav.bookSession"
            className="mt-3 block w-full rounded-lg border border-accent/50 bg-accent px-4 py-2.5 text-center text-sm font-semibold text-neutral-900 transition-colors hover:bg-accent/90"
          >
            {t("bookSession")}
          </Link>
        </div>
      )}
    </header>
  );
}
