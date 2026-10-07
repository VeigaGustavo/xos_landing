import { Audience, Concept, Why } from './components/About.tsx'
import { Hero, Nav } from './components/Hero.tsx'
import { Games, Methods, Modules } from './components/Product.tsx'
import { Developer, Essence, Footer, Roadmap, Testers, WhatsAppFab } from './components/Project.tsx'
import { Frequency, Teachers } from './components/Tracking.tsx'

export default function App() {
  return (
    <>
      <div className="bg" aria-hidden="true">
        <span className="blob blob--pink" />
        <span className="blob blob--blue" />
        <span className="blob blob--soft" />
      </div>

      <Nav />
      <main>
        <Hero />
        <Why />
        <Audience />
        <Concept />
        <Modules />
        <Methods />
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
