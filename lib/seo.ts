import type { Locale } from "@/lib/server-i18n";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://davidalcantara.com.br";

const hreflangByLocale: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
};

const xDefaultLocale: Locale = "en";

function normalizePath(path: string): string {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export function buildLocaleUrl(locale: Locale, path: string): string {
  return `${siteUrl}/${locale}${normalizePath(path)}`;
}

export function buildAlternatesForPath(path: string) {
  const languages = {
    [hreflangByLocale.pt]: buildLocaleUrl("pt", path),
    [hreflangByLocale.en]: buildLocaleUrl("en", path),
    "x-default": buildLocaleUrl(xDefaultLocale, path),
  };

  return { languages };
}

export function buildAlternatesForLocalePaths(paths: Record<Locale, string>) {
  const languages = {
    [hreflangByLocale.pt]: buildLocaleUrl("pt", paths.pt),
    [hreflangByLocale.en]: buildLocaleUrl("en", paths.en),
    "x-default": buildLocaleUrl(xDefaultLocale, paths[xDefaultLocale]),
  };

  return { languages };
}
