const projects = [
  {
    title: "cajytam.fr",
    description:
      "Mon portfolio personnel construit avec Astro et TypeScript. Design moderne avec mode sombre et animations fluides.",
    tags: ["Astro", "TypeScript", "CSS"],
    type: "Side Project",
    github: "https://github.com/cajytam/cajytam.fr",
    demo: "https://cajytam.fr",
  },
]

export function ProjectsSection() {
  return (
    <section id="projets" className="bg-background-secondary px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Portfolio
        </p>
        <h2 className="mb-4 font-serif text-4xl tracking-tight md:text-5xl">
          Mes <em className="text-accent">projets</em>
        </h2>
        <p className="mb-16 max-w-2xl text-lg leading-relaxed text-foreground-secondary">
          Projets personnels, proof of concept et side projects
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group flex flex-col rounded-2xl border border-border bg-surface/50 transition-all hover:border-accent/30 hover:bg-surface"
            >
              {/* Image placeholder */}
              <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-background-tertiary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-mono text-4xl text-foreground-muted/30">
                    {project.title.slice(0, 2).toUpperCase()}
                  </div>
                </div>
                <div className="absolute right-3 top-3">
                  <span className="rounded-md bg-background/80 px-2 py-1 font-mono text-xs text-foreground-muted backdrop-blur-sm">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 font-serif text-xl transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground-secondary">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-xs text-foreground-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 border-t border-border pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-accent"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-accent"
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          {/* Placeholder for future projects */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border p-8 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface">
              <svg
                className="h-6 w-6 text-foreground-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <p className="text-sm text-foreground-muted">
              Plus de projets a venir...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
