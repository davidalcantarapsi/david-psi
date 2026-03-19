"use client";

import Image from "next/image";
import Link from "next/link";
import PsiSymbol from "./PsiSymbol";
import { useTranslation, useLocalePath } from "./LocaleProvider";

const CONTACT_EMAIL = "david.gealcantara@gmail.com";
const CONTACT_WHATSAPP = "5527996062965";
const CONTACT_INSTAGRAM = "https://instagram.com/davidalcantarapsi";

export default function Footer() {
  const { t, attr } = useTranslation("footer");
  const { t: tNav } = useTranslation("nav");
  const localePath = useLocalePath();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-accent bg-neutral-800 pt-10 pb-14 text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center gap-2 border-b border-primary/40 pb-8 text-center">
          <Image
            src="/logo-nome-amarelo.svg"
            alt="David - Psicólogo"
            width={160}
            height={42}
          />
          <PsiSymbol size="sm" variant="accent" />
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 text-center text-sm md:grid-cols-3 md:justify-items-center md:text-left">
          <div>
            <h4 {...attr("nav")} className="mb-4 font-semibold text-white">{t("nav")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={localePath("/")} data-i18n="nav.home" className="transition-colors hover:text-white">
                  {tNav("home")}
                </Link>
              </li>
              <li>
                <Link href={localePath("/about")} data-i18n="nav.about" className="transition-colors hover:text-white">
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link href={localePath("/therapy")} data-i18n="nav.therapy" className="transition-colors hover:text-white">
                  {tNav("therapy")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 {...attr("resources")} className="mb-4 font-semibold text-white">{t("resources")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={localePath("/faq")} data-i18n="footer.faq" className="transition-colors hover:text-white">
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link href={localePath("/blog")} data-i18n="nav.blog" className="transition-colors hover:text-white">
                  {tNav("blog")}
                </Link>
              </li>
              <li>
                <a href="#contato" {...attr("contact")} className="transition-colors hover:text-white">
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 {...attr("contact")} className="mb-4 font-semibold text-white">{t("contact")}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT_WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 transition-colors hover:text-white"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="h-5 w-5 shrink-0 opacity-70 group-hover:opacity-100"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span data-i18n="footer.whatsappLabel">{t("whatsappLabel")}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 transition-colors hover:text-white"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5 shrink-0 opacity-70 group-hover:opacity-100"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm-.25 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm10.75 1.5a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-primary/50 pt-8 text-center text-sm">
          <p data-i18n="footer.copyright">&copy; {currentYear} {t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
