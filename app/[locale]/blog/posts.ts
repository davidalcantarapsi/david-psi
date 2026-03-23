import type { Locale } from "@/lib/server-i18n";

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  slug: string;
  content: string;
};

const postsByLocale: Record<Locale, BlogPost[]> = {
  pt: [
    {
      id: 1,
      title: "Saúde mental e bem-estar",
      excerpt:
        "Reflexões sobre a importância de cuidar da saúde mental no dia a dia.",
      date: "15 de Fevereiro de 2026",
      author: "David",
      image: "/foto-3.jpg",
      category: "Bem-estar",
      slug: "saude-mental-bem-estar",
      content:
        "Cuidar da **saúde mental** é tão importante quanto cuidar da saúde física. Reservar momentos para si mesmo, buscar apoio profissional quando necessário e manter hábitos saudáveis são passos essenciais para uma vida equilibrada.",
    },
    {
      id: 2,
      title: "Saúde mental e bem-estar",
      excerpt:
        "Reflexões sobre a importância de cuidar da saúde mental no dia a dia.",
      date: "15 de Fevereiro de 2026",
      author: "David",
      image: "/foto-3.jpg",
      category: "Bem-estar",
      slug: "saude-mental-bem-estar",
      content:
        "Cuidar da **saúde mental** é tão importante quanto cuidar da saúde física. Reservar momentos para si mesmo, buscar apoio profissional quando necessário e manter hábitos saudáveis são passos essenciais para uma vida equilibrada.",
    },
  ],
  en: [
    {
      id: 1,
      title: "Mental health and well-being",
      excerpt:
        "Reflections on the importance of taking care of mental health in everyday life.",
      date: "February 15, 2026",
      author: "David",
      image: "/foto-capa.jpg",
      category: "Well-being",
      slug: "saude-mental-bem-estar",
      content:
        "Taking care of your **mental health** is just as important as taking care of your physical health. Setting aside time for yourself, seeking professional support when needed, and maintaining healthy habits are essential steps toward a balanced life.",
    },
  ],
};

export function getPosts(locale: Locale): BlogPost[] {
  return postsByLocale[locale] ?? postsByLocale.pt;
}

export function getPostBySlug(
  slug: string,
  locale: Locale,
): BlogPost | undefined {
  return getPosts(locale).find((post) => post.slug === slug);
}
