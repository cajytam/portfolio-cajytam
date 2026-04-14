const categories = [
  {
    label: "Frontend",
    items: [
      { name: "TypeScript", icon: "TS" },
      { name: "Vue.js", icon: "Vue" },
      { name: "React", icon: "React" },
      { name: "Tailwind", icon: "TW" },
      { name: "Astro", icon: "Astro" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "PHP", icon: "PHP" },
      { name: "Symfony", icon: "Sf" },
      { name: "API Platform", icon: "API" },
      { name: "PrestaShop", icon: "PS" },
      { name: "Python", icon: "Py" },
      { name: "FastAPI", icon: "Fast" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "MySQL", icon: "SQL" },
      { name: "PostgreSQL", icon: "PG" },
      { name: "Prisma", icon: "Prisma" },
    ],
  },
  {
    label: "Infra & Tooling",
    items: [
      { name: "Docker", icon: "Docker" },
      { name: "CI/CD", icon: "CI" },
      { name: "GitHub", icon: "GH" },
      { name: "Vite", icon: "Vite" },
      { name: "Jira", icon: "Jira" },
    ],
  },
]

const favoriteStack = [
  {
    rank: "01",
    name: "Symfony + API Platform",
    description: "Framework PHP de reference pour les APIs",
    experience: "5+ ans",
  },
  {
    rank: "02",
    name: "Vue.js + TypeScript",
    description: "Framework reactif pour interfaces modernes",
    experience: "3 ans",
  },
  {
    rank: "03",
    name: "React",
    description: "Applications web dynamiques et SPAs",
    experience: "2 ans",
  },
  {
    rank: "04",
    name: "PostgreSQL",
    description: "Base de donnees relationnelle puissante",
    experience: "4 ans",
  },
  {
    rank: "05",
    name: "Docker",
    description: "Containerisation et environnements isoles",
    experience: "3 ans",
  },
]

export function StackSection() {
  return (
    <section id="stack" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Technologies
        </p>
        <h2 className="mb-4 font-serif text-4xl tracking-tight md:text-5xl">
          Ma <em className="text-accent">stack</em>
          <br />
          technique
        </h2>
        <p className="mb-16 max-w-2xl text-lg leading-relaxed text-foreground-secondary">
          Des technologies modernes et eprouvees pour creer des applications web
          robustes et performantes.
        </p>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Categories */}
          <div className="space-y-10">
            {categories.map((category) => (
              <div key={category.label}>
                <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-foreground-muted">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-4 py-2 transition-all hover:border-accent/30 hover:bg-surface"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-accent/10 font-mono text-[10px] font-medium text-accent">
                        {item.icon.slice(0, 2)}
                      </span>
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Favorite Stack */}
          <div className="rounded-2xl border border-border bg-surface/30 p-6 lg:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-mono text-xs uppercase tracking-wider text-foreground-muted">
                Stack favorite - usage quotidien
              </span>
            </div>

            <div className="space-y-4">
              {favoriteStack.map((item) => (
                <div
                  key={item.rank}
                  className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all hover:border-border hover:bg-surface"
                >
                  <span className="font-mono text-sm text-foreground-muted">
                    {item.rank}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <span className="font-mono text-xs font-medium text-accent">
                      {item.name.slice(0, 2)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-foreground-muted">
                      {item.description}
                    </div>
                  </div>
                  <span className="rounded-md bg-accent/10 px-2 py-1 font-mono text-xs text-accent">
                    {item.experience}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
