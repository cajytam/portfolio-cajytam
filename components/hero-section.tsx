import Image from "next/image"

export function HeroSection() {
  const yearsExperience = Math.floor(new Date().getFullYear() - 2013.5)
  const yearsWeb = Math.floor(new Date().getFullYear() - 2021)

  return (
    <section id="about" className="relative min-h-screen px-6 pt-32 lg:px-8">
      {/* Subtle gradient orbs */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/3 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="animate-fade-up mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent opacity-0 delay-100">
              Developpeur Full Stack
            </p>

            <h1 className="animate-fade-up mb-8 font-serif text-5xl leading-[1.1] tracking-tight opacity-0 delay-200 md:text-6xl lg:text-7xl">
              Cedric{" "}
              <em className="text-accent">Matyja</em>
            </h1>

            <p className="animate-fade-up mb-8 max-w-lg text-lg leading-relaxed text-foreground-secondary opacity-0 delay-300">
              Base pres de Lille, je suis specialise en{" "}
              <span className="text-foreground">PHP / Symfony</span>,{" "}
              <span className="text-foreground">TypeScript / Vue.js / React</span>{" "}
              et <span className="text-foreground">Python</span>. Je transforme
              des idees en produits web performants depuis plus de {yearsExperience} ans.
            </p>

            <div className="animate-fade-up flex flex-wrap gap-4 opacity-0 delay-400">
              <a
                href="#parcours"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                Mon parcours
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <a
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
              >
                Lire le blog
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 flex gap-12 border-t border-border pt-8">
              <div className="animate-fade-up opacity-0 delay-300">
                <div className="font-serif text-4xl text-foreground">
                  {yearsExperience}+
                </div>
                <div className="mt-1 text-sm uppercase tracking-wider text-foreground-muted">
                  ans a transformer
                  <br />
                  des idees en produits
                </div>
              </div>
              <div className="animate-fade-up opacity-0 delay-400">
                <div className="font-serif text-4xl text-foreground">
                  {yearsWeb}+
                </div>
                <div className="mt-1 text-sm uppercase tracking-wider text-foreground-muted">
                  ans a concevoir
                  <br />
                  des applications web
                </div>
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="animate-fade-up order-1 flex justify-center opacity-0 delay-200 lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="relative h-80 w-72 overflow-hidden rounded-2xl border border-border bg-surface lg:h-[420px] lg:w-[340px]">
                <Image
                  src="/images/me.png"
                  alt="Cedric Matyja en Pixel Art"
                  fill
                  className="object-contain object-center p-4"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-accent/20" />
              <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-accent/20 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
