import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Sample blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: "debuter-avec-api-platform",
    title: "Debuter avec API Platform",
    excerpt:
      "Un guide complet pour demarrer avec API Platform et Symfony. Decouvrez comment creer des APIs RESTful rapidement et efficacement.",
    category: "Backend",
    tags: ["Symfony", "API Platform", "PHP", "REST"],
    publishedAt: "2024-01-15",
    readTime: "8 min",
    content: `
## Introduction

API Platform est un framework puissant construit sur Symfony qui permet de creer des APIs RESTful et GraphQL en un temps record. Dans cet article, nous allons explorer les bases pour bien demarrer.

## Pourquoi API Platform ?

API Platform offre de nombreux avantages :

- **Generation automatique** de la documentation OpenAPI
- **Validation** des donnees integree
- **Serialisation** flexible avec les groupes
- **Pagination** et filtres out-of-the-box
- Support **GraphQL** natif

## Installation

Pour commencer, installez API Platform dans votre projet Symfony :

\`\`\`bash
composer require api
\`\`\`

Cette commande installe API Platform avec toutes ses dependances.

## Creer votre premiere ressource

Voici un exemple simple d'entite exposee via l'API :

\`\`\`php
<?php

namespace App\\Entity;

use ApiPlatform\\Metadata\\ApiResource;
use Doctrine\\ORM\\Mapping as ORM;

#[ORM\\Entity]
#[ApiResource]
class Article
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column]
    private ?int $id = null;

    #[ORM\\Column(length: 255)]
    private ?string $title = null;

    #[ORM\\Column(type: 'text')]
    private ?string $content = null;

    // Getters et setters...
}
\`\`\`

> **Note importante :** L'attribut \`#[ApiResource]\` est tout ce qu'il faut pour exposer votre entite via l'API. API Platform genere automatiquement les operations CRUD.

## Configuration avancee

Vous pouvez personnaliser le comportement de l'API avec des attributs supplementaires :

\`\`\`php
#[ApiResource(
    operations: [
        new GetCollection(),
        new Get(),
        new Post(security: "is_granted('ROLE_ADMIN')"),
    ],
    paginationItemsPerPage: 20,
)]
\`\`\`

## Les filtres

API Platform inclut plusieurs filtres pre-configures :

- **SearchFilter** : recherche textuelle
- **DateFilter** : filtrage par date
- **BooleanFilter** : filtrage booleen
- **OrderFilter** : tri des resultats

## Conclusion

API Platform simplifie considerablement la creation d'APIs. Avec quelques annotations, vous obtenez une API complete, documentee et securisee.

Dans un prochain article, nous explorerons les fonctionnalites avancees comme les sous-ressources et les operations personnalisees.
    `,
  },
  {
    slug: "react-vs-vue-2024",
    title: "React vs Vue en 2024",
    excerpt:
      "Une comparaison objective des deux frameworks frontend les plus populaires pour vous aider a faire le bon choix.",
    category: "Frontend",
    tags: ["React", "Vue.js", "JavaScript", "Frontend"],
    publishedAt: "2024-01-10",
    readTime: "6 min",
    content: `
## Introduction

Le choix entre React et Vue.js est une question recurrente dans l'ecosysteme frontend. En 2024, les deux frameworks ont enormement evolue. Voyons ensemble leurs forces et faiblesses.

## React : Le geant de Facebook

React reste le framework le plus utilise avec une communaute massive.

### Points forts

- **Ecosysteme riche** : Des milliers de bibliotheques disponibles
- **Flexibilite** : Liberte dans l'architecture
- **React Native** : Developpement mobile natif
- **Server Components** : Rendu hybride avec Next.js

### Points faibles

- Courbe d'apprentissage plus raide
- Choix multiples a faire (state management, routing...)

## Vue.js : L'approche progressive

Vue.js se distingue par son approche progressive et sa documentation exemplaire.

### Points forts

- **Facilite d'apprentissage** : Syntaxe intuitive
- **Tout-en-un** : Vue Router, Pinia integres
- **Documentation** : Parmi les meilleures de l'industrie
- **Composition API** : Puissante et flexible

### Points faibles

- Communaute plus petite
- Moins d'opportunites d'emploi

## Conclusion

Les deux frameworks sont excellents. Choisissez React si vous avez besoin d'un ecosysteme large et de React Native. Optez pour Vue.js si vous privilegiez la simplicite et une experience developpeur optimale.
    `,
  },
  {
    slug: "docker-pour-les-developpeurs",
    title: "Docker pour les developpeurs",
    excerpt:
      "Comment Docker peut simplifier votre workflow de developpement et ameliorer la coherence entre environnements.",
    category: "DevOps",
    tags: ["Docker", "DevOps", "Containerisation"],
    publishedAt: "2024-01-05",
    readTime: "5 min",
    content: `
## Introduction

Docker a revolutionne la facon dont nous developpons et deployons des applications. Fini le fameux "Ca marche sur ma machine" !

## Qu'est-ce que Docker ?

Docker permet de containeriser vos applications, garantissant qu'elles fonctionnent de maniere identique partout.

## Avantages pour les developpeurs

- **Environnements reproductibles** : Meme configuration pour tous
- **Isolation** : Pas de conflits entre projets
- **Facilite de partage** : Un Dockerfile suffit
- **Integration CI/CD** : Deploiements simplifies

## Docker Compose

Docker Compose permet d'orchestrer plusieurs conteneurs :

\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8000:8000"
    volumes:
      - .:/app
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: secret
\`\`\`

## Conclusion

Docker est devenu indispensable dans le workflow moderne. Investissez du temps pour l'apprendre, vous ne le regretterez pas !
    `,
  },
]

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: "Article non trouve" }
  return {
    title: `${post.title} - Cedric Matyja`,
    description: post.excerpt,
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen px-6 pb-24 pt-32 lg:px-8">
        <article className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-foreground-muted transition-colors hover:text-accent"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Retour au blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-md bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                {post.category}
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-surface/50 px-3 py-1 font-mono text-xs text-foreground-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="mb-6 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 border-b border-t border-border py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-secondary font-medium text-background">
                CM
              </div>
              <div>
                <div className="font-medium">Cedric Matyja</div>
                <div className="font-mono text-sm text-foreground-muted">
                  {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  · {post.readTime} de lecture
                </div>
              </div>
            </div>
          </header>

          {/* Lead */}
          <p className="mb-12 border-l-2 border-accent pl-6 text-lg leading-relaxed text-foreground-secondary">
            {post.excerpt}
          </p>

          {/* Content */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/## (.*)/g, '<h2>$1</h2>')
                .replace(/### (.*)/g, '<h3>$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/`([^`]+)`/g, '<code>$1</code>')
                .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
                .replace(/> (.*)/g, '<blockquote><p>$1</p></blockquote>')
                .replace(/- (.*)/g, '<li>$1</li>')
                .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/^(?!<)(.+)$/gm, '<p>$1</p>')
                .replace(/<p><\/p>/g, '')
                .replace(/<p>(<h|<ul|<pre|<blockquote)/g, '$1')
                .replace(/(<\/h\d>|<\/ul>|<\/pre>|<\/blockquote>)<\/p>/g, '$1'),
            }}
          />

          {/* Author card */}
          <div className="mt-16 rounded-2xl border border-border bg-surface/50 p-6">
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-border bg-background">
                <Image
                  src="/images/me.png"
                  alt="Cedric Matyja"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="mb-1 font-serif text-lg">Cedric Matyja</h3>
                <p className="mb-3 text-sm text-foreground-secondary">
                  Developpeur Full Stack passionne par PHP/Symfony, TypeScript,
                  React, Vue.js et Python. Base pres de Lille.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/c-matyja/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent transition-colors hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/cajytam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent transition-colors hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
