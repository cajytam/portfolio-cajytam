const experiences = [
  {
    year: "2024 - Present",
    role: "Developpeur Full Stack",
    company: "Cheef.fr",
    location: "Roncq",
    description: [
      "Application de gestion et suivi des leads en React et Symfony / API Platform",
      "Application de saisie et suivi des tickets SAV avec KPI",
      "Implementation de Mercure pour affichage temps-reel dans PrestaShop",
      "Consommation d&apos;API et webhooks (Brevo, Aircall)",
    ],
    tags: ["React", "Symfony", "API Platform", "PrestaShop", "Docker", "Mercure"],
  },
  {
    year: "2023 - 2024",
    role: "Developpeur Web",
    company: "Enbro France / Earth Solar France",
    location: "Roncq",
    description: [
      "CRM de gestion de prospects et projets photovoltaiques",
      "Generation automatisee de devis avec dimensionnement",
      "Gestion complete des projets et documents administratifs",
    ],
    tags: ["Vue.js", "Symfony", "API Platform", "MySQL"],
  },
  {
    year: "2022 - 2023",
    role: "Analyste Programmeur EDI",
    company: "Dornach France (groupe Ziegler)",
    location: "Roncq",
    description: [
      "Programmes de traduction de fichiers sous TradeXpress",
      "Gestion des tickets sous Jira",
    ],
    tags: ["RTE", "TradeXpress", "EDI", "Jira"],
  },
  {
    year: "2019 - 2022",
    role: "Developpeur Web",
    company: "Association Noemi",
    location: "Roubaix",
    description: [
      "Refonte du site web sous Symfony avec UML et wireframes",
      "Back-office securise et generation de recus fiscaux PDF",
      "Tests unitaires et fonctionnels",
    ],
    tags: ["Symfony", "UML", "PDF Generation", "Back-office"],
  },
  {
    year: "2013 - 2022",
    role: "Administrateur SI Finance",
    company: "Castorama France SAS",
    location: "Templamars",
    description: [
      "Administration des logiciels comptables (CODA et SAP)",
      "Developpement d&apos;outils en Python et VBA pour automatisation",
    ],
    tags: ["Python", "VBA", "SAP", "CODA"],
  },
]

const formations = [
  {
    year: "2019",
    title: "Licence - Concepteur Developpeur d&apos;Applications",
    school: "M2i Formation Diplomante",
    location: "Villeneuve d&apos;Ascq",
    tags: ["PHP", "Symfony", "JavaScript", "Java", "UML", "Scrum"],
  },
  {
    year: "2009",
    title: "Licence - Diplome Comptable et de Gestion (DCG)",
    school: "Lycee Malraux",
    location: "Bethune",
    tags: ["Comptabilite", "Suite Office", "Controle de Gestion"],
  },
]

export function ParcoursSection() {
  return (
    <section id="parcours" className="bg-background-secondary px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Experience */}
        <div className="mb-24">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Experiences
          </p>
          <h2 className="mb-4 font-serif text-4xl tracking-tight md:text-5xl">
            Mon <em className="text-accent">parcours</em>
            <br />
            professionnel
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-foreground-secondary">
            16 ans d&apos;experience alliant comptabilite, administration systeme
            d&apos;informations et developpement fullstack - avec une expertise en
            Symfony, React et automatisation.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-48 md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative grid gap-4 md:grid-cols-[12rem_1fr] md:gap-8"
                >
                  {/* Year */}
                  <div className="font-mono text-sm text-foreground-muted md:text-right">
                    {exp.year}
                  </div>

                  {/* Content */}
                  <div className="relative pl-0 md:pl-12">
                    {/* Dot */}
                    <div className="absolute -left-1 top-2 hidden h-2 w-2 rounded-full border border-accent bg-background-secondary transition-all group-hover:bg-accent group-hover:shadow-[0_0_12px] group-hover:shadow-accent/50 md:block" />

                    <h3 className="mb-1 font-serif text-2xl transition-colors group-hover:text-accent">
                      {exp.role}
                    </h3>
                    <p className="mb-3 font-mono text-sm text-foreground-secondary">
                      <span className="inline-block w-3 border-t border-foreground-muted" />{" "}
                      {exp.company} · {exp.location}
                    </p>
                    <ul className="mb-4 space-y-2 text-foreground-secondary">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent/50" />
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-xs text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formation */}
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Parcours academique
          </p>
          <h2 className="mb-4 font-serif text-4xl tracking-tight md:text-5xl">
            Diplomes &<br />
            <em className="text-accent">formations</em>
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-foreground-secondary">
            Un parcours combinant comptabilite et developpement informatique,
            complete par des formations continues pour rester a jour.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {formations.map((formation, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border bg-surface/50 p-6 transition-all hover:border-accent/30 hover:bg-surface"
              >
                <div className="mb-3 font-mono text-sm text-accent">
                  {formation.year}
                </div>
                <h3 className="mb-2 font-serif text-xl" dangerouslySetInnerHTML={{ __html: formation.title }} />
                <p className="mb-4 text-sm text-foreground-secondary">
                  {formation.school} · {formation.location}
                </p>
                <div className="flex flex-wrap gap-2">
                  {formation.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-xs text-foreground-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
