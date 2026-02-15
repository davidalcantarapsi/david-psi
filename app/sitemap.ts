import { MetadataRoute } from "next";
import { posts } from "@/app/blog/posts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://david-psychologist.example.com";

const staticPaths = [
  { path: "", priority: 1 as const, changeFrequency: "weekly" as const },
  { path: "/sobre", priority: 0.8 as const, changeFrequency: "monthly" as const },
  { path: "/terapia", priority: 0.8 as const, changeFrequency: "monthly" as const },
  { path: "/perguntas", priority: 0.8 as const, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.8 as const, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = staticPaths.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })
  );

  for (const post of posts) {
    urls.push({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return urls;
}
