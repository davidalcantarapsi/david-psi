import Image from "next/image";
import Link from "next/link";
import MarkdownContent from "@/components/MarkdownContent";
import { ArrowRight, Calendar, User } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { getMessages, getT, locales, type Locale } from "@/lib/server-i18n";
import { getPosts, getPostBySlug } from "../posts";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://david-psychologist.example.com";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const post of getPosts(locale)) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const messages = await getMessages(locale as Locale);
  const tBlog = getT(messages, "blog");
  const post = getPostBySlug(slug, locale as Locale);
  if (!post) return { title: tBlog("notFound") };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/${locale}/blog/${post.slug}`,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/${post.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const lc = locale as Locale;
  const post = getPostBySlug(slug, lc);
  if (!post) notFound();

  const messages = await getMessages(lc);
  const t = getT(messages, "blog");
  const tBreadcrumbs = getT(messages, "breadcrumbs");
  const otherPosts = getPosts(lc).filter((p) => p.slug !== slug);

  return (
    <div className="bg-background">
      <PageHero
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: tBreadcrumbs("home"), href: `/${locale}` },
          { label: t("title"), href: `/${locale}/blog` },
          { label: post.title, href: `/${locale}/blog/${post.slug}` },
        ]}
      />

      <article className="border-t-2 border-primary/30 py-8 md:py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 overflow-hidden rounded-2xl border-2 border-primary/30 border-t-4 border-t-accent shadow-lg">
            <div className="relative aspect-video w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
            {post.title}
          </h1>

          <div className="mb-8 flex flex-wrap gap-4 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 font-semibold text-primary-700">
              {post.category}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              {post.author}
            </span>
          </div>

          <div className="prose prose-neutral prose-lg max-w-none">
            <MarkdownContent>{post.content}</MarkdownContent>
          </div>

          <div className="mt-12 border-t-2 border-primary/20 pt-8">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 font-semibold text-primary-500 transition-colors hover:text-primary-600"
            >
              <span data-i18n="blog.backToBlog">← {t("backToBlog")}</span>
            </Link>
          </div>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="border-t-2 border-accent/40 bg-secondary-100/30 py-8 md:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 data-i18n="blog.alsoRead" className="mb-8 text-2xl font-bold text-foreground">
              {t("alsoRead")}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((other, i) => (
                <Link
                  key={other.slug}
                  href={`/${locale}/blog/${other.slug}`}
                  className={`flex flex-col overflow-hidden rounded-xl border-2 bg-white shadow-sm transition-shadow hover:shadow-md ${i % 2 === 0 ? "border-primary/30 border-l-4 border-l-primary" : "border-accent/30 border-l-4 border-l-accent"}`}
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-5">
                    <span className="mb-2 inline-block w-fit rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
                      {other.category}
                    </span>
                    <h3 className="mb-2 line-clamp-2 text-base font-bold text-neutral-900">
                      {other.title}
                    </h3>
                    <p className="mb-3 line-clamp-2 text-sm text-neutral-600">
                      {other.excerpt}
                    </p>
                    <span data-i18n="blog.readMore" className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500">
                      {t("readMore")}
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </div>
  );
}
