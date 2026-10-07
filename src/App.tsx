import { Audience, Concept, Why } from './components/About.tsx'
import { Hero, Nav } from './components/Hero.tsx'
import { AI, Games, Methods, Modules } from './components/Product.tsx'
import { Developer, Essence, Footer, Roadmap, Testers, WhatsAppFab } from './components/Project.tsx'
import { ScrollProgress } from './components/ScrollProgress.tsx'
import { Frequency, Teachers } from './components/Tracking.tsx'
import { useSpotlight } from './hooks/useSpotlight.ts'

export default function App() {
  useSpotlight()

  return (
    <>
      <div className="bg" aria-hidden="true">
        <span className="blob blob--pink" />
        <span className="blob blob--blue" />
        <span className="blob blob--soft" />
        <span className="grid-lines" />
      </div>

      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Why />
        <Audience />
        <Concept />
        <Modules />
        <Methods />
        <AI />
        <Frequency />
        <Games />
        <Teachers />
        <Developer />
        <Roadmap />
        <Essence />
        <Testers />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
