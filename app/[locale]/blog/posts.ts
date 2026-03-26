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
  image: "/foto-capa.jpg",
  category: "Mental Health",
  slug: "online-therapy-does-it-work",
  content:
 "# H1**Online Therapy: Does It Really Work?**\n\nOnline therapy has rapidly become one of the most searched mental health services worldwide. But an important question remains: does it actually work?\n\nThe short answer is **yes**, when done properly and with the right professional.\n\n# H2 **WHAT MAKES ONLINE THERAPY EFFECTIVE?**\n\nResearch in clinical psychology shows that structured, evidence-based approaches, such as *Cognitive Behavioral Therapy (CBT)*, maintain their effectiveness in online formats.\n\n# H3 **Effectiveness depends on three main factors**:\n\n**1.** A clear treatment plan\n**2.** Measurable goals\n**3.** A therapist trained in evidence-based interventions\n\nWithout these, therapy, online or in-person, often becomes **vague and less effective**.\n\n# H2 **WHO BENEFITS MOST FROM ONLINE THERAPY?**\n\n- Professionals with busy schedules\n- People living abroad\n- Individuals who prefer privacy and discretion\n- Clients who value structured, goal-oriented work\n\n# H3 **WHAT TO LOOK FOR IN AN ONLINE THERAPIST?**\n\n- Evidence-based methods\n- Clear treatment structure\n- Progress tracking\n- Professional communication\n\nFINAL THOUGHT\n\nOnline therapy is not a \"lighter\" version of therapy. When done correctly, it is a precise, efficient, and highly effective intervention."
   , },
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
