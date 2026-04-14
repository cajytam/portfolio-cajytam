import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ParcoursSection } from "@/components/parcours-section"
import { StackSection } from "@/components/stack-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ParcoursSection />
        <StackSection />
        <ProjectsSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  )
}
