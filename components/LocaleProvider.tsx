"use client";

import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/server-i18n";

type Messages = Record<string, Record<string, string>>;

type LocaleContextValue = {
  locale: Locale;
  messages: Messages;
  setLocale: (l: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const setLocale = useCallback(
    (newLocale: Locale) => {
      if (newLocale === locale) return;
      const segments = pathname.split("/");
      segments[1] = newLocale;
      router.push(segments.join("/"));
    },
    [locale, pathname, router]
  );

  return (
    <LocaleContext.Provider value={{ locale, messages, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useTranslation(namespace: string) {
  const { locale, messages } = useLocale();
  const ns = useMemo(() => messages[namespace] ?? {}, [messages, namespace]);

  const t = useCallback(
    (key: string) => {
      return ns[key] ?? key;
    },
    [ns]
  );

  const attr = useCallback(
    (key: string) => ({ "data-i18n": `${namespace}.${key}` }),
    [namespace]
  );

  return { t, attr, locale };
}

export function useLocalePath() {
  const { locale } = useLocale();
  return useCallback((path: string) => `/${locale}${path}`, [locale]);
}
