import { site } from './content/site'
import { useReveal } from './hooks'
import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Journey } from './components/Journey'
import { Process } from './components/Process'
import { Contact } from './components/Contact'
import { SiteFooter } from './components/SiteFooter'

export function App() {
  useReveal()

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="page__aura" aria-hidden="true" />

      {site.isPlaceholder && (
        <p className="placeholder-ribbon">
          ✿ Placeholder content — add your details in <code>src/content/site.ts</code>
        </p>
      )}

      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
