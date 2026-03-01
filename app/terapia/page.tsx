import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { getMessages, getT } from "@/lib/server-i18n";

const STEPS = [
  { key: "step1", descKey: "step1Desc" },
  { key: "step2", descKey: "step2Desc" },
  { key: "step3", descKey: "step3Desc" },
  { key: "step4", descKey: "step4Desc" },
  { key: "step5", descKey: "step5Desc" },
] as const;

export default async function TerapiaPage() {
  const messages = await getMessages();
  const tTherapy = getT(messages, "therapy");

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title={tTherapy("title")}
        description={tTherapy("description")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: tTherapy("title"), href: "/terapia" },
        ]}
      />

      <section className="section-y border-t-2 border-primary/20 bg-secondary-100/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-primary/20 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-foreground">{tTherapy("forWhoTitle")}</h2>
              <ul className="list-disc space-y-3 pl-5 text-neutral-700">
                <li>{tTherapy("forWho1")}</li>
                <li>{tTherapy("forWho2")}</li>
                <li>{tTherapy("forWho3")}</li>
                <li>{tTherapy("forWho4")}</li>
                <li>{tTherapy("forWho5")}</li>
              </ul>
            </div>
            <div className="rounded-xl border border-accent/40 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-2xl font-bold text-foreground">{tTherapy("onlineTitle")}</h2>
              <p className="mb-4 text-neutral-700">{tTherapy("onlineDescription")}</p>
              <p className="mb-3 font-medium text-foreground">{tTherapy("onlineSubtitle")}</p>
              <ul className="list-disc space-y-2 pl-5 text-neutral-700">
                <li>{tTherapy("online1")}</li>
                <li>{tTherapy("online2")}</li>
                <li>{tTherapy("online3")}</li>
                <li>{tTherapy("online4")}</li>
              </ul>
              <p className="mt-4 text-neutral-700">{tTherapy("onlineEffectiveness")}</p>
            </div>
          </div>

          <h3 className="mb-6 text-2xl font-bold text-foreground">{tTherapy("howItWorks")}</h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="overflow-hidden rounded-xl border-2 border-accent/50 bg-white shadow-sm lg:h-full">
              <div className="relative h-[450px] w-full sm:h-[420px] lg:h-full">
                <Image
                  src="/foto-3.jpg"
                  alt="Terapia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover image-custom-position-terapia"
                />
              </div>
            </div>
            <div className="space-y-4">
              {STEPS.map(({ key, descKey }, index) => (
                <div
                  key={key}
                  className="flex gap-4 rounded-xl border border-primary/20 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-500">
                    <span className="text-base font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-bold text-foreground">{tTherapy(key)}</h4>
                    <p className="text-neutral-700">{tTherapy(descKey)}</p>
                  </div>
                  <CheckCircle2 className="ml-auto h-6 w-6 shrink-0 text-primary-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
