import PageHero from "@/components/PageHero";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import ContactSection from "@/components/ContactSection";
import StructuredData from "@/components/StructuredData";
import { getMessages, getT } from "@/lib/server-i18n";

const FAQ_KEYS = [
  { q: "q1", a: "a1" },
  { q: "q2", a: "a2" },
  { q: "q3", a: "a3" },
  { q: "q4", a: "a4" },
  { q: "q5", a: "a5" },
] as const;

export default async function PerguntasPage() {
  const messages = await getMessages();
  const t = getT(messages, "faq");

  const faqs: FaqItem[] = FAQ_KEYS.map(({ q, a }) => ({
    question: t(q),
    answer: t(a),
    answerForSchema: t(a),
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text:
          typeof faq.answer === "string"
            ? faq.answer
            : faq.answerForSchema ?? "",
      },
    })),
  };

  return (
    <>
      <StructuredData data={faqSchema} />
      <div className="min-h-screen bg-background">
        <PageHero
          title={t("title")}
          description={t("description")}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: t("title"), href: "/perguntas" },
          ]}
        />

        <section className="border-t-2 border-primary/30 py-10 md:py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border-2 border-primary/20 border-t-4 border-t-accent bg-white p-6 shadow-sm md:p-8">
              <FaqAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}
