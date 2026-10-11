import { site, type Tint } from '../content/site'
import { Section, stagger } from './ui'
import './Process.css'

const TINTS: Tint[] = ['pink', 'lavender', 'periwinkle', 'peach', 'butter', 'lavender']

export function Process() {
  if (site.process.length === 0) return null

  return (
    <Section
      id="process"
      className="process"
      number="05"
      eyebrow="process"
      title={
        <>
          From little idea to <em>shipped</em>
        </>
      }
      lede="How a project usually travels across my desk — one calm step at a time."
      sample="a common workflow — adapt it to how you really work"
    >
      <ol className="process__steps">
        {site.process.map((step, i) => (
          <li key={step.title} className="process__step" data-tint={TINTS[i % TINTS.length]} data-reveal style={stagger(i % 3)}>
            <span className="process__number" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
