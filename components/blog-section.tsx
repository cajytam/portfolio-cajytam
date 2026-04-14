import Link from "next/link"

const blogPosts = [
  {
    slug: "debuter-avec-api-platform",
    title: "Debuter avec API Platform",
    excerpt:
      "Un guide complet pour demarrer avec API Platform et Symfony. Decouvrez comment creer des APIs RESTful rapidement et efficacement.",
    category: "Backend",
    publishedAt: "2024-01-15",
    featured: true,
  },
  {
    slug: "react-vs-vue-2024",
    title: "React vs Vue en 2024",
    excerpt:
      "Une comparaison objective des deux frameworks frontend les plus populaires pour vous aider a faire le bon choix.",
    category: "Frontend",
    publishedAt: "2024-01-10",
    featured: false,
  },
  {
    slug: "docker-pour-les-developpeurs",
    title: "Docker pour les developpeurs",
    excerpt:
      "Comment Docker peut simplifier votre workflow de developpement et ameliorer la coherence entre environnements.",
    category: "DevOps",
    publishedAt: "2024-01-05",
    featured: false,
  },
]

export function BlogSection() {
  const featuredPost = blogPosts.find((p) => p.featured) ?? blogPosts[0]
  const otherPosts = blogPosts.filter((p) => p.slug !== featuredPost?.slug).slice(0, 2)

  return (
    <section id="blog" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Ecrits
        </p>
        <h2 className="mb-4 font-serif text-4xl tracking-tight md:text-5xl">
          Derniers <em className="text-accent">articles</em>
        </h2>
        <p className="mb-16 max-w-2xl text-lg leading-relaxed text-foreground-secondary">
          Je partage ici mes experiences, mes projets et mes reflexions autour
          du developpement web et des technologies que j&apos;explore au quotidien.
        </p>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Featured post */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group col-span-full overflow-hidden rounded-2xl border border-border bg-surface/50 transition-all hover:border-accent/30 hover:bg-surface lg:col-span-3"
            >
              <div className="aspect-[16/9] bg-background-tertiary">
                <div className="flex h-full items-center justify-center">
                  <span className="font-mono text-6xl text-foreground-muted/20">
                    {featuredPost.title.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-md bg-accent/10 px-2 py-1 font-mono text-xs text-accent">
                    {featuredPost.category}
                  </span>
                  <span className="font-mono text-xs text-foreground-muted">
                    {new Date(featuredPost.publishedAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="mb-3 font-serif text-2xl transition-colors group-hover:text-accent lg:text-3xl">
                  {featuredPost.title}
                </h3>
                <p className="text-foreground-secondary">{featuredPost.excerpt}</p>
              </div>
            </Link>
          )}

          {/* Other posts */}
          <div className="col-span-full flex flex-col gap-6 lg:col-span-2">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex-1 rounded-2xl border border-border bg-surface/50 p-6 transition-all hover:border-accent/30 hover:bg-surface"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-md bg-accent/10 px-2 py-1 font-mono text-xs text-accent">
                    {post.category}
                  </span>
                  <span className="font-mono text-xs text-foreground-muted">
                    {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>
                <h3 className="mb-2 font-serif text-xl transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="text-sm text-foreground-secondary line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
          >
            Voir tous les articles
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
