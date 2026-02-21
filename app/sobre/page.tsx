import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import BackgroundPsi from "@/components/BackgroundPsi";
import { getMessages, getT } from "@/lib/server-i18n";
import { Award, BookOpen } from "lucide-react";

const PRINCIPLES = [
  "principle1",
  "principle2",
  "principle3",
  "principle4",
] as const;

export default async function SobrePage() {
  const messages = await getMessages();
  const t = getT(messages, "about");

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title={t("title")}
        description={t("description")}
        backgroundElement="psi"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: t("title"), href: "/sobre" },
        ]}
      />

      <section className="relative overflow-hidden border-t-2 border-primary/30 py-14 md:py-20">
        <div className="absolute bottom-0 right-0 z-0" aria-hidden>
          <BackgroundPsi size={520} variant="primary" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 grid grid-cols-1 gap-14 md:grid-cols-5 md:gap-16">
            <div className="overflow-hidden rounded-2xl bg-primary-50 md:col-span-2">
              <div className="relative h-[400px] w-full md:h-[600px]">
                <Image
                  src="/foto-2.jpg"
                  alt="David - Psicólogo"
                  fill
                  className="object-cover image-sobre-mim"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                {t("psychologist")}
              </h2>
              <div className="space-y-6 text-neutral-700 leading-relaxed">
                <p>
                  <strong>{t("formation")}</strong>
                </p>
                <p>{t("experience")}</p>
              </div>
            </div>
          </div>

          <div className="mb-20 rounded-xl bg-primary-50 p-10">
            <div className="mb-8 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary-500" />
              <h3 className="text-2xl font-bold text-foreground">
                {t("principlesTitle")}
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {PRINCIPLES.map((key) => (
                <li
                  key={key}
                  className="flex items-center gap-3 rounded-lg bg-white p-4"
                >
                  <Award className="h-6 w-6 shrink-0 text-primary-500" />
                  <span className="font-medium text-foreground">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
