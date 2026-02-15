import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { getMessages, getT } from "@/lib/server-i18n";
import { posts } from "./blog/posts";

export default async function HomePage() {
  const messages = await getMessages();
  const t = getT(messages, "home");
  const tBlog = getT(messages, "blog");

  const displayPosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero: layout diferenciado com SVG sutil no fundo */}
      <section className="relative overflow-hidden bg-primary-500 py-16 text-white md:py-24">
        <div className="absolute right-0 top-1/2 z-0 h-[680px] w-[680px] -translate-y-1/2 opacity-[0.07]" aria-hidden>
          <span className="relative block size-full">
            <Image src="/logo-verde.svg" alt="" fill className="object-contain" />
          </span>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="lg:col-span-3">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                {t("welcome")}
              </h1>
              <p className="mb-8 text-lg text-primary-100">{t("headline")}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-accent-400 px-6 py-3 font-semibold text-primary-800 transition-colors hover:bg-accent-300"
                >
                  {t("cta")}
                </Link>
              </div>
            </div>
            <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-accent/40 shadow-2xl lg:col-span-2">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/foto-capa.jpg"
                  alt="Consultório psicológico"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre: bloco com bordas e imagem em cima no mobile */}
      <section className="section-border-top border-primary bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl border-2 border-primary/30 bg-white p-6 shadow-lg md:p-10">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
              {t("aboutTitle")}
            </h2>
            <div className="mb-8 flex flex-col gap-10 md:flex-row md:items-center">
              <div className="order-2 md:order-1 md:w-1/2">
                <p className="text-lg text-neutral-700">{t("aboutExperience")}</p>
              </div>
              <div className="order-1 overflow-hidden rounded-xl border-2 border-accent/50 md:order-2 md:w-1/2">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/foto-2.jpg"
                    alt="David - Psicólogo"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover image-custom-position-sobre-mim"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 font-semibold text-primary-500 transition-colors hover:text-primary-600"
              >
                {t("aboutCta")}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Terapia: borda lateral amarela + SVG sutil */}
      <section className="relative overflow-hidden border-y-2 border-primary/20 bg-secondary-100/60 py-16 md:py-24">
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] opacity-[0.06]" aria-hidden>
          <Image src="/logo-amarelo.svg" alt="" width={420} height={420} className="h-full w-full object-contain" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">
              {t("therapyTitle")}
            </h2>
          </div>
          <div className="mx-auto max-w-4xl rounded-xl border-2 border-primary/30 border-l-4 border-l-accent bg-white p-6 shadow-md md:p-10">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-lg font-semibold text-foreground">
                  {t("therapyForWho")}
                </p>
                <p className="text-lg text-neutral-700">
                  {t("therapyPrinciples")}
                </p>
              </div>
              <div className="overflow-hidden rounded-lg border-2 border-accent/40">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/foto-3.jpg"
                    alt="Terapia"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover image-custom-position-terapia"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/terapia"
                className="inline-flex items-center gap-2 font-semibold text-primary-500 transition-colors hover:text-primary-600"
              >
                {t("therapyCta")}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog: cards com bordas verde/amarelo */}
      <section className="section-border-top border-primary bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              {t("blogTitle")}
            </h2>
            <p className="mx-auto max-w-4xl text-lg text-neutral-700">
              {t("blogIntro")}
            </p>
          </div>
          {displayPosts.length > 0 && (
            <>
              <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {displayPosts.map((post, i) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={`flex flex-col overflow-hidden rounded-xl border-2 bg-white shadow-sm transition-shadow hover:shadow-md ${
                      i % 2 === 0 ? "border-primary/40 border-l-4 border-l-primary" : "border-accent/40 border-l-4 border-l-accent"
                    }`}
                  >
                    <div className="relative h-40 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col p-5">
                      <span className="mb-2 inline-block w-fit rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
                        {post.category}
                      </span>
                      <h3 className="mb-2 line-clamp-2 text-base font-bold text-neutral-900">
                        {post.title}
                      </h3>
                      <p className="mb-3 line-clamp-3 text-sm text-neutral-600">
                        {post.excerpt}
                      </p>
                      <span className="mb-2 flex items-center gap-1.5 text-xs text-neutral-500">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500">
                        {tBlog("readMore")}
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 font-semibold text-primary-500 transition-colors hover:text-primary-600"
                >
                  {t("blogCta")}
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
