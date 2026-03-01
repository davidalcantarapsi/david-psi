import Image from "next/image";
import { Award } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { getMessages, getT } from "@/lib/server-i18n";

const PRINCIPLES = ["principle1", "principle2", "principle3", "principle4"] as const;

export default async function SobrePage() {
  const messages = await getMessages();
  const tAbout = getT(messages, "about");

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title={tAbout("title")}
        description={tAbout("description")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: tAbout("title"), href: "/sobre" },
        ]}
      />

      <section className="section-y border-t-2 border-primary/20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-3">
              <h2 className="text-3xl font-bold text-foreground">{tAbout("psychologist")}</h2>
              <p className="text-lg leading-relaxed text-neutral-700">{tAbout("formation")}</p>
              <p className="text-lg leading-relaxed text-neutral-700">{tAbout("experience")}</p>
              <p className="text-lg leading-relaxed text-neutral-700">{tAbout("research")}</p>
              <div>
                <h3 className="mb-4 text-xl font-bold text-foreground">{tAbout("principlesTitle")}</h3>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {PRINCIPLES.map((key) => (
                    <li
                      key={key}
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
                  alt="David - Psicólogo"
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
