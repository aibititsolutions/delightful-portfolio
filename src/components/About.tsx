import { site, type Tint } from '../content/site'
import { SectionHeading, stagger } from './ui'
import './About.css'

const NOTE_TINTS: Tint[] = ['pink', 'lavender', 'butter', 'periwinkle']

export function About() {
  const { paragraphs, notes } = site.about

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div>
          <SectionHeading
            id="about"
            number="01"
            eyebrow="about"
            title={
              <>
                The person <em>behind</em> the code
              </>
            }
            sample="placeholder bio — tell your own story here"
          />
          <div className="about__bio" data-reveal>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="about__board">
          <ul className="about__notes">
            {notes.map((note, i) => (
              <li key={note.label} className="about__note" data-tint={NOTE_TINTS[i % NOTE_TINTS.length]} data-reveal style={stagger(i)}>
                <h3 className="hand">{note.label}</h3>
                <p>{note.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
