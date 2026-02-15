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

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Saúde mental e bem-estar",
    excerpt:
      "Reflexões sobre a importância de cuidar da saúde mental no dia a dia.",
    date: "15 de Fevereiro de 2026",
    author: "David",
    image: "/foto-capa.jpg",
    category: "Bem-estar",
    slug: "saude-mental-bem-estar",
    content: "Conteúdo do artigo em português.",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
