import Image from "next/image";
import { Award } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { getMessages, getT, type Locale } from "@/lib/server-i18n";

const PRINCIPLES = ["principle1", "principle2", "principle3", "principle4"] as const;

type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const messages = await getMessages(locale as Locale);
  const tAbout = getT(messages, "about");
  const tBreadcrumbs = getT(messages, "breadcrumbs");

  return (
    <div className="bg-background">
      <PageHero
        title={tAbout("title")}
        description={tAbout("description")}
        breadcrumbs={[
          { label: tBreadcrumbs("home"), href: `/${locale}` },
          { label: tAbout("title"), href: `/${locale}/about` },
        ]}
      />

      <section className="section-y border-t-2 border-primary/20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-3">
              <h2 data-i18n="about.psychologist" className="text-3xl font-bold text-foreground">{tAbout("psychologist")}</h2>
              <p data-i18n="about.formation" className="text-lg leading-relaxed text-neutral-700">{tAbout("formation")}</p>
              <p data-i18n="about.experience" className="text-lg leading-relaxed text-neutral-700">{tAbout("experience")}</p>
              <p data-i18n="about.research" className="text-lg leading-relaxed text-neutral-700">{tAbout("research")}</p>
              <div>
                <h3 data-i18n="about.principlesTitle" className="mb-4 text-xl font-bold text-foreground">{tAbout("principlesTitle")}</h3>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {PRINCIPLES.map((key) => (
                    <li
                      key={key}
                      data-i18n={`about.${key}`}
                      className="flex items-center gap-3 rounded-lg border border-primary/20 bg-white p-4"
                    >
                      <Award className="h-5 w-5 shrink-0 text-primary-500" />
                      <span className="font-medium text-foreground">{tAbout(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-primary/20 bg-white lg:col-span-2">
              <div className="relative h-[320px] w-full md:h-[560px]">
                <Image
                  src="/foto-2.jpg"
                  alt={tAbout("imageAlt")}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover image-sobre-mim"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
