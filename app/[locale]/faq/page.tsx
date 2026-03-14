import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import { getMessages, getT, type Locale } from "@/lib/server-i18n";

const CONTACT_WHATSAPP = "5511999999999";

const FAQ_KEYS = [
  { q: "q1", a: "a1" },
  { q: "q2", a: "a2" },
  { q: "q3", a: "a3" },
  { q: "q4", a: "a4" },
  { q: "q5", a: "a5" },
] as const;

type Props = { params: Promise<{ locale: string }> };

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  const messages = await getMessages(locale as Locale);
  const tFaq = getT(messages, "faq");
  const tBreadcrumbs = getT(messages, "breadcrumbs");

  const faqs: FaqItem[] = FAQ_KEYS.map(({ q, a }) => {
    const answer = tFaq(a);

    if (q === "q1") {
      return {
        question: tFaq(q),
        answer: (
          <>
            {answer}{" "}
            <a
              href={`https://wa.me/${CONTACT_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-600 underline underline-offset-2"
            >
              {tFaq("clickHere")}
            </a>
          </>
        ),
      };
    }

    if (q === "q5") {
      return {
        question: tFaq(q),
        answer: (
          <>
            {answer}{" "}
            <a
              href={`https://wa.me/${CONTACT_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-600 underline underline-offset-2"
            >
              {tFaq("contactHere")}
            </a>
          </>
        ),
      };
    }

    return { question: tFaq(q), answer };
  });

  return (
    <div className="bg-background">
      <PageHero
        title={tFaq("title")}
        description={tFaq("description")}
        breadcrumbs={[
          { label: tBreadcrumbs("home"), href: `/${locale}` },
          { label: tFaq("title"), href: `/${locale}/faq` },
        ]}
      />

      <section className="section-y border-t-2 border-primary/20 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border-2 border-primary/20 border-t-4 border-t-accent bg-white p-6 shadow-sm md:p-8">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
