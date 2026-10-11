import { site, type Tint } from '../content/site'
import { Doodle, Section, stagger, type DoodleName } from './ui'
import './Skills.css'

const TINTS: Tint[] = ['lavender', 'pink', 'periwinkle', 'peach', 'butter']
const MARKS: DoodleName[] = ['sparkle', 'heart', 'flower', 'star']

export function Skills() {
  return (
    <Section
      id="skills"
      className="skills"
      number="03"
      eyebrow="tech stack"
      title={
        <>
          My <em>toolbox</em>
        </>
      }
      lede="The languages, frameworks and tools I reach for — grouped by where they live in a project."
      sample="sample technologies — list only what you really use"
    >
      <ul className="skills__grid">
        {site.skills.map((group, i) => (
          <li key={group.title} className="skill-card" data-tint={TINTS[i % TINTS.length]} data-reveal style={stagger(i % 3)}>
            <span className="skill-card__mark">
              <Doodle name={MARKS[i % MARKS.length]} />
            </span>
            <h3>{group.title}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
