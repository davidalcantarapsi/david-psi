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
    {
      id: 2,
      title: "Online Therapy: Does It Really Work?",
      excerpt:
        "Understand how online therapy works, who it is for, and what makes it truly effective.",
      date: "March 25, 2026",
      author: "David",
      image: "/OnlineTherapy.jpeg",
      category: "Mental Health",
      slug: "online-therapy-does-it-work",
      content: `# Online Therapy: Does It Really Work?

Online therapy has rapidly become one of the most searched mental health services worldwide. But an important question remains: does it actually work?

The short answer is **yes**, when done properly and with the right professional.

## What Makes Online Therapy Effective?

Research in clinical psychology shows that structured, evidence-based approaches, such as *Cognitive Behavioral Therapy (CBT)*, maintain their effectiveness in online formats.

### Effectiveness depends on three main factors:

1. A clear treatment plan
2. Measurable goals
3. A therapist trained in evidence-based interventions

Without these, therapy, online or in-person, often becomes **vague and less effective**.

## Who Benefits Most from Online Therapy?

- Professionals with busy schedules
- People living abroad
- Individuals who prefer privacy and discretion
- Clients who value structured, goal-oriented work

### What to Look for in an Online Therapist?

- Evidence-based methods
- Clear treatment structure
- Progress tracking
- Professional communication

## Final Thought

Online therapy is not a "lighter" version of therapy. When done correctly, it is a precise, efficient, and highly effective intervention.`,
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
