import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const blogPosts = [
  {
    slug: "debuter-avec-api-platform",
    title: "Debuter avec API Platform",
    excerpt:
      "Un guide complet pour demarrer avec API Platform et Symfony. Decouvrez comment creer des APIs RESTful rapidement et efficacement.",
    category: "Backend",
    publishedAt: "2024-01-15",
    featured: true,
    readTime: "8 min",
  },
  {
    slug: "react-vs-vue-2024",
    title: "React vs Vue en 2024",
    excerpt:
      "Une comparaison objective des deux frameworks frontend les plus populaires pour vous aider a faire le bon choix.",
    category: "Frontend",
    publishedAt: "2024-01-10",
    featured: false,
    readTime: "6 min",
  },
  {
    slug: "docker-pour-les-developpeurs",
    title: "Docker pour les developpeurs",
    excerpt:
      "Comment Docker peut simplifier votre workflow de developpement et ameliorer la coherence entre environnements.",
    category: "DevOps",
    publishedAt: "2024-01-05",
    featured: false,
    readTime: "5 min",
  },
]

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

  return (
    <>
      <Navigation />
      <main className="min-h-screen px-6 pb-24 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-16 max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Ecrits
            </p>
            <h1 className="mb-4 font-serif text-5xl tracking-tight md:text-6xl">
              Le <em className="text-accent">blog</em>
            </h1>
            <p className="text-lg leading-relaxed text-foreground-secondary">
              Je partage ici mes experiences, mes projets et mes reflexions autour
              du developpement web et des technologies que j&apos;explore au quotidien.
            </p>
          </header>

          {/* Featured */}
          {featured.length > 0 && (
            <section className="mb-16">
              <h2 className="mb-6 font-mono text-xs uppercase tracking-wider text-foreground-muted">
                A la une
              </h2>
              <div className="grid gap-6 lg:grid-cols-2">
                {featured.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group overflow-hidden rounded-2xl border border-border bg-surface/50 transition-all hover:border-accent/30 hover:bg-surface"
                  >
                    <div className="aspect-video bg-background-tertiary">
                      <div className="flex h-full items-center justify-center">
                        <span className="font-mono text-6xl text-foreground-muted/20">
                          {post.title.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="rounded-md bg-accent/10 px-2 py-1 font-mono text-xs text-accent">
                          {post.category}
                        </span>
                        <span className="font-mono text-xs text-foreground-muted">
                          {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span className="font-mono text-xs text-foreground-muted">
                          · {post.readTime}
                        </span>
                      </div>
                      <h3 className="mb-3 font-serif text-2xl transition-colors group-hover:text-accent">
                        {post.title}
                      </h3>
                      <p className="text-foreground-secondary">{post.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* All posts */}
          {rest.length > 0 && (
            <section>
              <h2 className="mb-6 font-mono text-xs uppercase tracking-wider text-foreground-muted">
                Tous les articles
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-2xl border border-border bg-surface/50 p-6 transition-all hover:border-accent/30 hover:bg-surface"
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
                    <p className="mb-4 text-sm leading-relaxed text-foreground-secondary line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="font-mono text-xs text-foreground-muted">
                      {post.readTime} de lecture
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {blogPosts.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-foreground-muted">
                Aucun article pour le moment. Revenez bientot !
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
