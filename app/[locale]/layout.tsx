import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { LocaleProvider } from "@/components/LocaleProvider";
import { getMessages, type Locale, locales } from "@/lib/server-i18n";
import { buildAlternatesForPath, buildLocaleUrl, siteUrl } from "@/lib/seo";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lc = locale as Locale;
  const messages = await getMessages(locale as Locale);
  const meta = messages.metadata as Record<string, string>;
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: meta.title,
      template: meta.titleTemplate,
    },
    description: meta.description,
    alternates: {
      canonical: buildLocaleUrl(lc, ""),
      ...buildAlternatesForPath(""),
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages(locale as Locale);

  return (
    <LocaleProvider locale={locale as Locale} messages={messages as Record<string, Record<string, string>>}>
      <div lang={locale} className="flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatButton />
      </div>
    </LocaleProvider>
  );
}
