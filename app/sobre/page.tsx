import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
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
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: t("title"), href: "/sobre" },
        ]}
      />

      <section className="relative overflow-hidden border-t-2 border-primary/30 py-12 md:py-16">
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] opacity-[0.05]" aria-hidden>
          <img src="/logo-verde.svg" alt="" className="h-full w-full object-contain" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-5">
            <div className="overflow-hidden rounded-2xl border-2 border-primary/30 border-l-4 border-l-accent bg-primary-50 md:col-span-2">
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

          <div className="mb-16 rounded-xl border-2 border-primary/30 border-t-4 border-t-accent bg-primary-50 p-8">
            <div className="mb-6 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary-500" />
              <h3 className="text-2xl font-bold text-foreground">
                {t("principlesTitle")}
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PRINCIPLES.map((key, i) => (
                <li
                  key={key}
                  className={`flex items-center gap-3 rounded-lg border-2 bg-white p-4 ${i % 2 === 0 ? "border-primary/20" : "border-accent/30"}`}
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
