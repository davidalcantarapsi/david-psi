import { MetadataRoute } from "next";
import { locales, type Locale } from "@/lib/server-i18n";
import { getPosts } from "@/app/[locale]/blog/posts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://david-psychologist.example.com";

const staticPaths = [
  { path: "", priority: 1 as const, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8 as const, changeFrequency: "monthly" as const },
  { path: "/therapy", priority: 0.8 as const, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.8 as const, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.8 as const, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const { path, priority, changeFrequency } of staticPaths) {
      urls.push({
        url: `${siteUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    }

    for (const post of getPosts(locale as Locale)) {
      urls.push({
        url: `${siteUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return urls;
}
