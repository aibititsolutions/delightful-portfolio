import { site } from '../content/site'
import { Doodle, Section } from './ui'
import './Journey.css'

export function Journey() {
  if (site.journey.length === 0) return null

  return (
    <Section
      id="journey"
      number="04"
      eyebrow="journey"
      title={
        <>
          Where I’ve <em>learned</em> and worked
        </>
      }
      lede="Experience, education and the milestones along the way."
      sample="placeholder entries — add your real path"
    >
      <ol className="timeline" data-reveal>
        {site.journey.map((entry) => (
          <li key={`${entry.title}-${entry.period}`} className="timeline__item" data-reveal>
            <Doodle name="flower" className="timeline__node" />
            <p className="timeline__period hand">{entry.period}</p>
            <div className="timeline__card">
              <span className="chip">{entry.kind}</span>
              <h3>{entry.title}</h3>
              <p className="timeline__org">{entry.organization}</p>
              <p>{entry.description}</p>
              {entry.highlights && entry.highlights.length > 0 && (
                <ul className="timeline__highlights">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
