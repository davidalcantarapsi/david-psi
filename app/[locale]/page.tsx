import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import BackgroundPsi from "@/components/BackgroundPsi";
import { getMessages, getT, type Locale } from "@/lib/server-i18n";
import { getPosts } from "./blog/posts";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const lc = locale as Locale;
  const messages = await getMessages(lc);
  const t = getT(messages, "home");
  const tBlog = getT(messages, "blog");
  const tAbout = getT(messages, "about");
  const tTherapy = getT(messages, "therapy");
  const tFaq = getT(messages, "faq");

  const displayPosts = getPosts(lc).slice(0, 3);

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-primary-500 text-white">
        <div className="absolute -left-48 top-1/2 z-0 h-[1000px] w-[1000px] -translate-y-1/2 opacity-[0.08]" aria-hidden>
          <span className="relative block size-full">
            <Image src="/logo-amarelo.svg" alt="" fill className="object-contain" />
          </span>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-16 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative rounded-2xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur-sm md:p-8">
              <span data-i18n="home.badge" className="mb-5 inline-block rounded-full border border-accent/60 bg-accent/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent-100 text-center">
                {t("badge")}
              </span>
              <h1 data-i18n="home.welcome" className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
                {(() => {
                  const welcome = t("welcome");
                  const keyword = lc === "en" ? "results" : "resultados";
                  const parts = welcome.split(new RegExp(`(${keyword})`));
                  return parts.map((part, i) =>
                    part === keyword ? (
                      <span key={i} className="text-accent-200">{part}</span>
                    ) : (
                      part
                    )
                  );
                })()}
              </h1>
              <p data-i18n="home.headline" className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-100">
                {t("headline")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-accent-400 px-6 py-3 font-semibold text-primary-800 transition-colors hover:bg-accent-300"
                >
                  <span data-i18n="home.cta">{t("cta")}</span>
                  <ArrowRight size={18} />
                </Link>
                <span data-i18n="home.responseTime" className="text-sm text-primary-100">
                  {t("responseTime")}
                </span>
              </div>
            </div>
            <div className="relative z-10 overflow-hidden rounded-3xl border-2 border-accent/60 shadow-2xl">
              <div className="absolute inset-x-0 top-0 z-10 h-24 bg-linear-to-b from-primary-900/35 to-transparent" />
              <div className="relative aspect-4/5 w-full md:aspect-3/4">
                <Image
                  src="/foto-capa.jpg"
                  alt={t("heroImageAlt")}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="section-y relative overflow-hidden section-border-top border-primary bg-background"
      >
        <div className="absolute -left-16 top-1/2 z-0 -translate-y-1/2" aria-hidden>
          <BackgroundPsi size={720} variant="primary" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-primary/20 bg-white p-6 shadow-sm md:grid-cols-5 md:p-8">
            <div className="space-y-4 md:col-span-3">
              <h2 data-i18n="home.aboutTitle" className="text-3xl font-bold text-foreground md:text-4xl">{t("aboutTitle")}</h2>
              <p data-i18n="about.formation" className="text-lg leading-relaxed text-neutral-700">{tAbout("formation")}</p>
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 font-semibold text-primary-500 transition-colors hover:text-primary-600"
              >
                <span data-i18n="home.aboutLinkText">{t("aboutLinkText")}</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary/20 md:col-span-2">
              <div className="relative h-[300px] min-h-[300px] w-full md:h-[550px] md:min-h-[550px]">
                <Image
                  src="/foto-3.jpg"
                  alt={t("aboutImageAlt")}
                  fill
                  className="object-cover image-sobre-mim"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="terapia"
        className="section-y relative overflow-hidden border-y-2 border-primary/20 bg-secondary-100/60"
      >
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] opacity-[0.06]" aria-hidden>
          <Image src="/logo-amarelo.svg" alt="" width={600} height={600} className="h-full w-full object-contain" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-primary/20 bg-white p-6 shadow-sm md:grid-cols-5 md:p-8">
            <div className="space-y-4 md:col-span-5">
              <h2 data-i18n="therapy.title" className="text-3xl font-bold text-foreground md:text-4xl">{tTherapy("title")}</h2>
              <p data-i18n="therapy.description" className="text-lg leading-relaxed text-neutral-700">{tTherapy("description")}</p>
              <p data-i18n="home.therapySummary" className="text-neutral-700">{t("therapySummary")}</p>
              <Link
                href={`/${locale}/therapy`}
                className="inline-flex items-center gap-2 font-semibold text-primary-500 transition-colors hover:text-primary-600"
              >
                <span data-i18n="home.therapyLinkText">{t("therapyLinkText")}</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="perguntas"
        className="section-y relative overflow-hidden bg-background"
      >
        <div className="absolute -right-24 top-1/2 z-0 -translate-y-1/2" aria-hidden>
          <BackgroundPsi size={620} variant="primary" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-xl border-2 border-primary/20 border-t-4 border-t-accent bg-white p-6 shadow-sm md:p-8">
            <h2 data-i18n="faq.title" className="text-3xl font-bold text-foreground md:text-4xl">
              {tFaq("title")}
            </h2>
            <p data-i18n="faq.description" className="mt-4 text-lg text-neutral-700">{tFaq("description")}</p>
            <ul className="mt-6 space-y-3 text-neutral-700">
              <li data-i18n="faq.q1" className="border-l-4 border-primary/40 bg-primary-50/40 px-4 py-3 font-medium">
                {tFaq("q1")}
              </li>
              <li data-i18n="faq.q2" className="border-l-4 border-primary/40 bg-primary-50/40 px-4 py-3 font-medium">
                {tFaq("q2")}
              </li>
              <li data-i18n="faq.q3" className="border-l-4 border-primary/40 bg-primary-50/40 px-4 py-3 font-medium">
                {tFaq("q3")}
              </li>
            </ul>
            <Link
              href={`/${locale}/faq`}
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary-500 transition-colors hover:text-primary-600"
            >
              <span data-i18n="home.faqLinkText">{t("faqLinkText")}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section id="blog" className="section-y relative overflow-hidden section-border-top border-primary bg-background">
        <div className="absolute bottom-0 right-0 z-0" aria-hidden>
          <BackgroundPsi size={640} variant="primary" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 data-i18n="home.blogTitle" className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">
              {t("blogTitle")}
            </h2>
            <p data-i18n="home.blogIntro" className="mx-auto max-w-5xl text-lg text-neutral-700">
              {t("blogIntro")}
            </p>
          </div>
          {displayPosts.length > 0 && (
            <>
              <div className="mb-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {displayPosts.map((post, i) => (
                  <Link
                    key={post.slug}
                    href={`/${locale}/blog/${post.slug}`}
                    className={`flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md ${
                      i % 2 === 0
                        ? "border-l-4 border-l-primary"
                        : "border-l-4 border-l-accent"
                    }`}
                  >
                    <div className="relative h-40 w-full">
                      <Image src={post.image} alt={post.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                    </div>
                    <div className="flex flex-col p-5">
                      <span className="mb-2 inline-block w-fit rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
                        {post.category}
                      </span>
                      <h3 className="mb-2 line-clamp-2 text-base font-bold text-neutral-900">{post.title}</h3>
                      <p className="mb-3 line-clamp-3 text-sm text-neutral-600">{post.excerpt}</p>
                      <span className="mb-2 flex items-center gap-1.5 text-xs text-neutral-500">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span data-i18n="blog.readMore" className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500">
                        {tBlog("readMore")}
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <Link
                  href={`/${locale}/blog`}
                  className="inline-flex items-center gap-2 font-semibold text-primary-500 transition-colors hover:text-primary-600"
                >
                  <span data-i18n="home.blogCta">{t("blogCta")}</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
