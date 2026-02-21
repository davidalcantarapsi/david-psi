import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import BackgroundPsi from "@/components/BackgroundPsi";
import { getMessages, getT } from "@/lib/server-i18n";
import { posts } from "./posts";

export default async function BlogPage() {
  const messages = await getMessages();
  const t = getT(messages, "blog");

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title={t("title")}
        description={t("description")}
        backgroundElement="psi"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: t("title"), href: "/blog" },
        ]}
      />

      <section className="relative overflow-hidden border-t-2 border-primary/30 py-10 md:py-12">
        <div className="absolute -left-16 top-1/2 z-0 -translate-y-1/2" aria-hidden>
          <BackgroundPsi size={560} variant="primary" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex grow flex-col p-6">
                    <span className="mb-3 inline-block w-fit rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
                      {post.category}
                    </span>
                    <h2 className="mb-3 text-xl font-bold text-neutral-900">
                      {post.title}
                    </h2>
                    <p className="mb-4 grow text-sm text-neutral-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mb-4 flex gap-4 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500">
                      {t("readMore")}
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
