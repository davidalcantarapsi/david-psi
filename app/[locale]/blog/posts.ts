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
      title: "O que é terapia? Tipos, como funciona e quando procurar",
      excerpt:
        "Entenda o que é terapia, como funciona a terapia cognitivo-comportamental (TCC), tipos de terapia e quando procurar um psicólogo.",
      date: "4 de Abril de 2026",
      author: "David",
      image: "/OnlineTherapy.jpeg",
      category: "Terapia",
      slug: "o-que-e-tweapia",
      content:
       ` ## O que é terapia?

A terapia psicológica é um processo estruturado, conduzido por um psicólogo, com o objetivo de te ajudar a lidar melhor com pensamentos, emoções e comportamentos.

Diferente do que muitos pensam, terapia não é apenas “conversar sobre problemas”. É um processo baseado em métodos científicos, com metas claras e acompanhamento de progresso ao longo do tempo.

Se você já tentou “resolver sozinho” e sentiu que está girando em círculos, a terapia pode ser exatamente o que está faltando para avançar com mais clareza.

---

## Como funciona uma sessão de terapia?

Uma **sessão de terapia** geralmente dura entre 45 e 60 minutos e segue uma estrutura, especialmente em abordagens com uma boa base científica.

Na prática, você não chega para “falar aleatoriamente”. Existe um direcionamento claro.

Durante o processo, normalmente trabalhamos com:

- Identificação de problemas e objetivos  
- Análise de padrões de pensamento e comportamento  
- Aplicação de técnicas específicas  
- Avaliação de progresso ao longo do tempo  

Ou seja, **terapia eficaz** não é improviso, ela é planejada.

---

## Tipos de terapia psicológica

Existem diferentes abordagens terapêuticas, mas nem todas possuem o mesmo nível de evidência científica.

Por isso, mais importante do que o nome da terapia é entender como ela funciona na prática.

---

### Terapia Cognitivo-Comportamental (TCC)

A **Terapia Cognitivo-Comportamental (TCC)** é uma das abordagens mais estudadas e eficazes para muitas condições atualmente.

Ela parte de um princípio simples:

- Pensamentos influenciam emoções  
- Emoções influenciam comportamentos  
- Mudanças nesses padrões podem melhorar sua qualidade de vida  

Na prática, isso significa trabalhar de forma direta em padrões que estão te mantendo travado.

A TCC atualmente é a melhor abordagem para:

- Ansiedade  
- Depressão  
- Transtorno obsessivo-compulsivo (TOC)  
- Fobias  

👉 **Se você busca um processo mais objetivo, com técnicas claras e acompanhamento de evolução, a TCC costuma ser uma excelente escolha.**

---

### Terapias comportamental

A terapia comportamental foca diretamente no que você faz no dia a dia e em como o ambiente influencia seu comportamento.

Ela é especialmente útil para:

- Mudança de hábitos  
- Controle de impulsos  
- Desenvolvimento de habilidades  

Aqui, o foco é menos “entender” e mais **mudar padrões na prática**.

---

### Outros tipos de terapia que tem bons resultados

Outras abordagens que tem um bom nível de evidências quando aplicadas sozinhas ou combinadas com a TCC são:

- Ativação Comportamental  
- Terapia Comportamental Dialética
- Terapia de Aceitação e Compromisso
- Entrevista Motivacional
- Terapia do Esquema

Nem todas essas abordagens funcionam para qualquer caso, por isso vale a pena avaliar com cuidado antes de iniciar. Um bom psicólogo deve ter domínio sobre essas abordagens, além da TCC.

---

## Terapia online funciona?

Sim, a **terapia online** tem evidência científica robusta mostrando que pode ser tão eficaz quanto a presencial, especialmente em abordagens estruturadas como a TCC.

Além disso, ela traz algumas vantagens importantes:

- Mais comodidade no dia a dia  
- Acesso a profissionais qualificados, independentemente da cidade  
- Facilidade para manter consistência no tratamento
- Maior discrição em qualquer lugar

👉 [**Se a rotina é corrida ou você valoriza praticidade, a terapia online pode ser a melhor opção para começar.**](wa.me/5527996062965)

---

## Quando procurar terapia?

Você não precisa estar em crise para buscar terapia.

Na verdade, muitas pessoas começam quando percebem que poderiam estar vivendo melhor do que estão hoje.

Alguns sinais comuns incluem:

- Dificuldade em lidar com emoções  
- Ansiedade frequente  
- Desmotivação ou tristeza persistente  
- Problemas nos relacionamentos  
- Sensação de estar “travado” na vida  

Se você se identificou com algum desses pontos, isso já é um bom indicativo de que vale a pena olhar com mais atenção.

---

## Mito ou verdade: terapia é para a vida toda?

**Mito.**

A terapia é uma intervenção com objetivos definidos. Em muitos casos, ela pode ser breve e focada em resolver problemas específicos.

O objetivo não é te tornar dependente, é te ajudar a ganhar autonomia. 

Sempre digo para os meus clientes que um dos objetivos da terapia é que **"Você se torne seu próprio terapeuta"**

---

## Conclusão

A terapia pode ser uma ferramenta extremamente eficaz, desde que bem conduzida e baseada em evidências.

Mais do que “se abrir”, é um processo ativo de mudança.

Se você busca mais clareza, direção e resultados concretos, escolher o profissional certo faz toda a diferença.

👉 [**Se você quer iniciar um processo terapêutico estruturado e baseado em evidências, entre em contato para saber como funciona o atendimento.**](wa.me/5527996062965)

---

## Perguntas frequentes (FAQ)

### Terapia funciona para todos?

Funciona para a maioria das pessoas, desde que haja engajamento e um método adequado.

---

### Qual a melhor abordagem terapêutica?
Atualmente, abordagens baseadas em evidências, como a TCC, têm maior suporte científico para a maior parte das demandas, mas terapias como a Ativação Comportamental ou a DBT podem ser as melhores em alguns casos. Isso depende de uma avaliação criteriosa.`

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
    {
  id: 2,
  title: "What Is Counseling? A Clear, Science-Based Explanation",
  excerpt:
    "Learn what counseling really is, how it works, and what science says about its effectiveness.",
  date: "May 5, 2026",
  author: "David",
  image: "/WhatIsCounseling.jpeg",
  category: "Mental Health",
  slug: "what-is-counseling",
  content: `# What Is Counseling? A Clear, Science-Based Explanation

“Counseling” is one of the most searched mental health terms today. But despite its popularity, most people don’t actually know what it means.

Some think it’s just talking about feelings. Others believe it’s about receiving advice.

Neither is accurate.

Counseling, when grounded in science, is a structured psychological intervention designed to **help people change behavior, regulate emotions, and improve decision-making**.

## What Counseling Really Is

At its core, counseling is a process based on principles from psychology and behavioral science.

It involves:

- Identifying patterns of behavior and thought
- Understanding how these patterns are maintained
- Applying specific strategies to change them

This is very different from simply “venting” or having casual conversations.

Effective counseling is **goal-oriented and method-driven**.

## How Counseling Works

From a scientific perspective, counseling works through a few key mechanisms:

### 1. Behavioral Change

Most psychological difficulties are linked to patterns of behavior.

Counseling helps you:
- Reduce avoidance
- Build adaptive habits
- Increase actions aligned with your goals

### 2. Cognitive Restructuring

Thought patterns influence how you interpret reality.

Evidence-based counseling helps you:
- Identify cognitive distortions
- Develop more accurate interpretations
- Reduce unnecessary emotional suffering

### 3. Emotional Regulation

Emotions are not random — they follow patterns.

Counseling teaches skills to:
- Tolerate discomfort
- Respond instead of react
- Reduce emotional overwhelm

## What Counseling Is Not

Understanding what counseling is *not* is just as important.

Counseling is not:

- Giving generic advice
- Passive listening without direction
- A place where “anything goes” without structure

Without a clear method, counseling often becomes **inefficient and frustrating**.

## Who Should Consider Counseling?

Counseling can be useful if you:

- Feel stuck in repetitive patterns
- Struggle with anxiety, stress, or low mood
- Want to improve performance or decision-making
- Are dealing with life transitions

However, an important point:

**Not everyone needs counseling all the time.**

In some cases, short-term guidance or specific interventions are enough.

## What Makes Counseling Effective?

Research consistently shows that effectiveness depends less on the format (online vs. in-person) and more on:

1. A structured approach
2. Clear and measurable goals
3. Use of evidence-based methods
4. Active participation from the client

When these elements are present, counseling becomes a **focused and efficient process**.

## Final Thought

Counseling is not just “talking about problems.”

At its best, it is a precise, evidence-based intervention designed to help you **understand, change, and improve how you function in the real world**.

If approached correctly, it’s not about endless sessions — it’s about meaningful progress.`
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
