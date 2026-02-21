import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { getMessages, getT } from "@/lib/server-i18n";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const STEPS = [
  { key: "step1", descKey: "step1Desc" },
  { key: "step2", descKey: "step2Desc" },
  { key: "step3", descKey: "step3Desc" },
  { key: "step4", descKey: "step4Desc" },
  { key: "step5", descKey: "step5Desc" },
] as const;

export default async function TerapiaPage() {
  const messages = await getMessages();
  const t = getT(messages, "therapy");

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title={t("title")}
        description={t("description")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: t("title"), href: "/terapia" },
        ]}
      />

      <section className="relative overflow-hidden border-t-2 border-accent/40 py-14 md:py-20">
        <div className="absolute left-0 top-1/2 z-0 h-[520px] w-[520px] -translate-y-1/2 opacity-[0.06]" aria-hidden>
          <img src="/logo-amarelo.svg" alt="" className="h-full w-full object-contain" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-bold text-foreground">
            {t("howItWorks")}
          </h2>
          <div className="space-y-10">
            {STEPS.map(({ key, descKey }, index) => (
              <div
                key={key}
                className="flex gap-6 rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-500">
                  <span className="text-lg font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {t(key)}
                  </h3>
                  <p className="text-neutral-700">{t(descKey)}</p>
                </div>
                <CheckCircle2
                  className="ml-auto h-8 w-8 shrink-0 text-primary-500"
                  aria-hidden
                />
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-primary-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
            >
              {t("title")}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
