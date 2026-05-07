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
    {
 id: 3,
  title: "Insomnia: Why You Can’t Sleep and What Actually Helps" ,
  excerpt:
    "Struggling with insomnia? Learn what causes sleep problems, how insomnia affects your mind, and what actually works to fix it.",
  date: "May 6, 2026",
  author: "David",
  image: "/insomnia-therapy.jpeg",
  category: "Mental Health",
  slug: "insomnia-cant-sleep",
  content: `# Insomnia: Why You Can’t Sleep and What Actually Helps
  
Insomnia is one of the most common mental health complaints worldwide, yet it is also one of the most misunderstood. People often assume that insomnia is simply about not feeling tired or having too much on their mind. The reality is more complex.

If you are searching for answers about insomnia symptoms, insomnia treatment, or how to fall asleep faster, what you need is not just more sleep tips. You need to understand the mechanisms that keep insomnia going.

## What is insomnia

Insomnia is not just a bad night of sleep. It is a persistent difficulty falling asleep, staying asleep, or waking up earlier than desired, combined with daytime impairment.

This means that even if you spend enough hours in bed, your sleep may still feel unrefreshing. Over time, insomnia can affect concentration, mood, decision making, and emotional regulation.

Many people who struggle with chronic insomnia also develop anxiety about sleep itself. This is where the problem becomes self sustaining.

## Why insomnia happens

Insomnia is often driven by a combination of biological, psychological, and behavioral factors.

Stress is one of the most common triggers. When your brain perceives a threat, it activates arousal systems designed to keep you alert. This response is useful in dangerous situations, but not when you are trying to sleep.

Over time, your brain can start associating your bed with wakefulness, frustration, or overthinking. This creates a conditioned response where simply lying down triggers alertness instead of relaxation.

This is why people with insomnia often say things like “I feel sleepy on the couch but fully awake in bed.”

## The role of anxiety in insomnia

Sleep anxiety is a key factor in chronic insomnia. The more you try to force sleep, the more your brain stays alert.

Thoughts like “I need to sleep now or tomorrow will be a disaster” increase physiological arousal. Your heart rate may rise, your muscles tense, and your mind becomes more active.

This creates a paradox. The effort to sleep becomes the very thing that prevents sleep.

Understanding this mechanism is essential if you are looking for effective insomnia treatment.

## Why common sleep tips don’t always work

If you have searched for how to cure insomnia, you have probably come across advice like avoiding screens, drinking herbal tea, or using relaxing music.

While these strategies can help in mild cases, they often fail in chronic insomnia because they do not address the underlying conditioning and cognitive patterns.

Insomnia is not just a habit problem. It is a learned pattern involving your nervous system and your expectations about sleep.

## Evidence based treatment for insomnia

The most effective treatment for chronic insomnia is Cognitive Behavioral Therapy for Insomnia, often called CBT I.

This approach focuses on changing both behavior and thought patterns that maintain insomnia. It helps retrain your brain to associate bed with sleep again, while also reducing the anxiety that interferes with rest.

CBT I includes strategies that may feel counterintuitive at first. For example, spending less time in bed can actually improve sleep efficiency. This works by strengthening the association between bed and sleep.

It also targets dysfunctional beliefs like “I must get eight hours of sleep no matter what” which can increase pressure and worsen insomnia.

## How to start improving your sleep

Improving insomnia requires a shift in how you relate to sleep. Instead of trying to control it directly, the goal is to create conditions where sleep can happen naturally.

This involves reducing cognitive arousal, stabilizing your sleep schedule, and breaking the cycle of frustration linked to bedtime.

It also means accepting that occasional poor sleep is normal. Ironically, this acceptance reduces the pressure that keeps insomnia alive.

## When to seek help

If your insomnia lasts for weeks or months and starts affecting your daily functioning, it is important to seek professional help.

Online therapy for insomnia has become increasingly effective and accessible. With the right approach, most people see significant improvement without relying on medication.

## Final thoughts

Insomnia is not just about sleep. It is about how your brain has learned to stay awake at the wrong time.

Once you understand that, the solution becomes clearer. You are not trying to force sleep. You are retraining a system that has become overly alert.

That shift changes everything.`
    },
    {
      id: 4,
title: "Panic Attacks: What They Really Are and How Manage Them",
excerpt: "Learn what panic attacks are, why they happen, and how to manage panic symptoms effectively with evidence-based strategies.",
date: "May 7, 2026",
author: "David",
image: "/panic-attacks.jpeg",
category: "Mental Health",
slug: "panic-attacks-what-they-are",
content:
`Panic attacks are among the most intense psychological experiences a person can have. Many people search for panic attack symptoms, how to stop a panic attack, or whether panic attacks are dangerous. What they usually find are fragmented explanations that don’t fully explain what is happening.

A panic attack is not just anxiety. It is a rapid and overwhelming activation of your body’s threat system. It can feel like losing control, having a heart attack, or even dying. And yet, despite how convincing it feels, it is not physically dangerous.

Understanding this difference is what changes how you deal with panic.

## What is a panic attack

A panic attack is a sudden surge of intense fear or discomfort that reaches its peak within minutes. It involves a combination of physical sensations, thoughts, and behavioral reactions.

Your heart races. Your breathing changes. Your body prepares for danger even when there is no real threat present.

From a biological perspective, this is your nervous system doing exactly what it was designed to do. The problem is not the system itself, but when it activates at the wrong time.

## Panic attack symptoms

Panic attack symptoms are often mistaken for serious medical conditions. This is one of the reasons panic becomes so frightening and self reinforcing.

People commonly report chest pain, shortness of breath, dizziness, trembling, and a sense of unreality. Thoughts like “something is very wrong” or “this is dangerous” tend to appear automatically.

I often hear patients say they are convinced something catastrophic is about to happen. In session, I usually point out that the intensity of the feeling is real, but the interpretation is often not accurate.

## Why panic attacks happen

Panic attacks are strongly linked to how the brain interprets internal sensations. A small bodily change, like a slight increase in heart rate, can be perceived as a threat.

Once that interpretation happens, the body escalates the response. This creates a feedback loop where sensation increases fear and fear increases sensation.

Over time, the brain learns this pattern. It becomes more sensitive, more reactive, and more likely to trigger panic again.

This is why panic disorder can develop. It is not just about isolated episodes, but about learning to fear the sensations themselves.

## How panic attacks are maintained

One of the most important mechanisms behind panic is avoidance. When you try to escape or prevent the sensations at all costs, your brain interprets them as dangerous.

Avoidance can be subtle. It might include leaving situations quickly, constantly checking your body, or trying to control your breathing in a rigid way.

I usually explain to my patients that the goal is not to eliminate the sensation immediately, but to change the way the brain responds to it. That is what actually breaks the cycle.

## How to stop a panic attack

If you are searching for how to stop a panic attack, the answer may seem counterintuitive. Trying to force it to stop often increases the intensity.

At the same time, it is important to be careful with how you approach this. Applying these strategies incorrectly, especially without proper guidance, can reinforce the panic cycle or increase avoidance patterns over time. In some cases, this can make the problem worse rather than better.

What works better is reducing the interpretation of threat. When the brain no longer sees the sensation as dangerous, the response naturally decreases.

This involves allowing the sensations to exist without reacting with urgency. It may feel uncomfortable, but it removes the fuel that keeps panic going.

Your body cannot stay in a peak panic state indefinitely. The system naturally comes down when it is not being escalated.

## Panic attack treatment

Effective panic attack treatment focuses on changing both behavior and interpretation. Cognitive Behavioral Therapy is one of the most supported approaches for this.

Treatment often involves gradual exposure to the sensations that trigger panic. This retrains the brain to understand that these sensations are not harmful.

Over time, the intensity decreases, the fear reduces, and the frequency of panic attacks drops significantly.

In many cases, people go from feeling controlled by panic to understanding it as a predictable and manageable process.

## When to seek help

If panic attacks are frequent, intense, or leading to avoidance of important areas of life, it is important to seek professional help.

Panic can become very limiting when left untreated. It can affect work, relationships, and daily functioning.

At the same time, it is one of the conditions with the most effective psychological treatments available.

## Final thoughts

Panic attacks feel like loss of control, but they follow a very specific pattern.

Once you understand that pattern, the experience changes. The sensations may still occur, but they stop being interpreted as a threat. That shift is what allows control to return.

Panic are learned. And because of that, it can also be unlearned.`
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
