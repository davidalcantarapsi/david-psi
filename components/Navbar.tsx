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
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-background/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={localePath("/")} className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo-verde.svg"
            alt=""
            width={140}
            height={38}
            priority
            className="h-9 w-auto"
          />
          <div className="hidden flex-col sm:flex sm:flex-col">
            <span data-i18n="nav.brandName" className="text-base font-bold text-foreground leading-tight">
              {t("brandName")}
            </span>
            <span data-i18n="nav.brandSubtitle" className="text-xs font-medium text-primary-600">
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
                      ? "text-primary-600"
                      : "text-neutral-700 hover:text-primary-500"
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
            className="flex rounded-lg border-2 border-primary/30 bg-white p-0.5"
            role="group"
            aria-label={t("selectLanguage")}
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
            data-i18n="nav.bookSession"
            className="hidden rounded-lg border border-primary/20 bg-primary-500 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600 md:inline-flex"
          >
            {t("bookSession")}
          </Link>

          <button
            type="button"
            className="p-2 text-neutral-700 hover:text-primary-500 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={t("menuLabel")}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="space-y-1 border-t border-secondary-200 px-4 pb-3 pt-2 md:hidden">
          {NAV_LINKS.map(({ path, labelKey }) => (
            <Link
              key={path}
              href={localePath(path)}
              onClick={() => setIsOpen(false)}
              {...attr(labelKey)}
              className={`block rounded px-4 py-2 text-sm font-medium transition-colors ${
                isActive(path)
                  ? "bg-primary-50 text-primary-500"
                  : "text-neutral-700 hover:bg-neutral-100 hover:text-primary-500"
              }`}
            >
              {t(labelKey)}
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={() => setIsOpen(false)}
            data-i18n="nav.bookSession"
            className="mt-3 block w-full rounded-lg border border-primary/20 bg-primary-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            {t("bookSession")}
          </Link>
        </div>
      )}
    </header>
  );
}
