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
      title: "Ansiedade: o que é, sintomas e como lidar com crises",
      excerpt:
        "Entenda o que é ansiedade, principais sintomas e o que fazer durante uma crise",
      date: "5 de Abril de 2026",
      author: "David",
      image: "/Ansiedade.jpg",
      category: "Saude-Mental",
      slug: "o-que-e-ansiedade",
      content: `# Ansiedade: o que é, sintomas e como lidar com crises
        
A ansiedade é uma resposta natural do organismo diante de situações de ameaça ou incerteza. No entanto, quando ela se torna intensa, frequente ou desproporcional, pode gerar sofrimento significativo e impactar a qualidade de vida.
Neste artigo, você vai entender **o que é ansiedade, quais são os principais sintomas e como lidar com uma crise de ansiedade de forma prática e baseada em boa ciência**.

---

## O que é ansiedade?

A ansiedade é um estado emocional caracterizado por **antecipação de ameaça futura**, acompanhado por alterações físicas, cognitivas e comportamentais.

Em níveis moderados, ela é útil, ajuda você a se preparar, focar e evitar riscos. O problema surge quando:
- A intensidade é muito alta  
- A frequência é constante  
- Ou ocorre sem um motivo claro  
Nesses casos, pode indicar um transtorno de ansiedade.

---

## Sintomas de ansiedade

Os sintomas de ansiedade podem variar de pessoa para pessoa, mas geralmente envolvem três componentes principais:

### 1. Sintomas físicos
- Coração acelerado (taquicardia)  
- Falta de ar ou sensação de sufocamento  
- Tensão muscular  
- Sudorese excessiva  
- Tremores  
- Tontura ou sensação de desmaio  

### 2. Sintomas cognitivos
- Pensamentos catastróficos  
- Preocupação constante  
- Dificuldade de concentração  
- Sensação de perda de controle  

### 3. Sintomas comportamentais
- Evitação de situações  
- Procrastinação  
- Agitação ou inquietação  

---

## Crise de ansiedade: o que é?

A crise de ansiedade (ou ataque de ansiedade) é um episódio de ansiedade intensa que surge rapidamente e atinge um pico em poucos minutos.

Ela pode incluir sintomas como:

- Sensação de morte iminente  
- Falta de ar intensa  
- Dor no peito  
- Tontura  
- Desrealização (sensação de que o ambiente não é real)  

> Apesar de assustadora, **a crise de ansiedade não é perigosa do ponto de vista físico**.

---

## O que fazer durante uma crise de ansiedade?

Se você estiver passando por uma crise, algumas estratégias podem ajudar:

### 1. Foque na respiração
Respire lentamente, tentando alongar a expiração.  
Exemplo: inspire por 4 segundos e expire por 6.

### 2. Traga atenção para o presente
Use técnicas de grounding, como:
- Nomear 5 coisas que você vê  
- 4 coisas que você sente  
- 3 coisas que você ouve  

### 3. Reduza a interpretação catastrófica
Lembre-se:  
> Isso é ansiedade. Vai passar.

### 4. Evite lutar contra a sensação
Tentar “parar” a ansiedade à força geralmente piora o quadro.  
Permitir a experiência tende a reduzir sua intensidade ao longo do tempo.

---

## Quando a ansiedade vira um problema?

A ansiedade pode ser considerada problemática quando:

- Interfere na sua rotina  
- Prejudica trabalho ou estudos  
- Afeta relacionamentos  
- Gera sofrimento frequente  

Nesses casos, a avaliação com um profissional é recomendada.

---

## Ansiedade tem tratamento?

Sim. A ansiedade tem tratamento eficaz, especialmente quando baseado em evidências científicas.

As abordagens mais utilizadas incluem:

- Terapia Cognitivo-Comportamental (TCC)  
- Terapias comportamentais contextuais (como ACT)  
- Em alguns casos, medicação psiquiátrica  

O tratamento adequado depende de uma avaliação individual.

---

## Perguntas frequentes sobre ansiedade (FAQ)

### Ansiedade pode causar sintomas físicos?
Sim. A ansiedade frequentemente causa sintomas físicos intensos, como taquicardia, falta de ar e tontura.

### Crise de ansiedade pode matar?
Não. Apesar de muito desconfortável, a crise de ansiedade não é fatal.

### Ansiedade tem cura?
Depende do caso. Muitas pessoas aprendem a manejar completamente os sintomas e viver sem prejuízo funcional.

---

## Conclusão

A ansiedade é uma resposta natural do corpo, mas pode se tornar um problema quando foge do controle. Entender seus sintomas e saber como agir em momentos de crise é um passo importante para lidar melhor com ela.

Se a ansiedade tem sido frequente ou intensa, buscar ajuda profissional pode fazer uma diferença significativa.`
,
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
