export type Locale = "pt" | "en";
export const defaultLocale: Locale = "pt";
export const locales: Locale[] = ["pt", "en"];

const messageCache: Partial<Record<Locale, Record<string, unknown>>> = {};

export async function getMessages(
  locale: Locale = defaultLocale
): Promise<Record<string, unknown>> {
  if (messageCache[locale]) return messageCache[locale]!;
  const msgs =
    locale === "en"
      ? (await import("../messages/en.json")).default
      : (await import("../messages/pt.json")).default;
  messageCache[locale] = msgs;
  return msgs;
}

export function getT(
  messages: Record<string, unknown>,
  namespace: string
): (key: string) => string {
  const ns = (messages[namespace] as Record<string, unknown>) ?? {};
  return (key: string) => {
    const value = ns[key];
    return typeof value === "string" ? value : (value as string) ?? key;
  };
}
