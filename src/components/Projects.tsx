import { useId, useRef } from 'react'
import { site, type Project } from '../content/site'
import { Doodle, Icon, Section } from './ui'
import './Projects.css'

export function Projects() {
  return (
    <Section
      id="work"
      number="02"
      eyebrow="selected work"
      title={
        <>
          Things I’ve <em>made</em> with care
        </>
      }
      lede="A few projects I’m proud of — what they are, why they exist, and how they were built."
      sample="sample projects — swap in your own"
    >
      {site.projects.length === 0 ? (
        <p className="projects__empty" data-reveal>
          <Doodle name="flower" />
          New projects are blooming — check back soon.
        </p>
      ) : (
        <div className="projects">
          {site.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      )}
    </Section>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <>
      {project.liveUrl && (
        <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
          Live demo <Icon name="external" />
          <span className="sr-only"> of {project.title} (opens in a new tab)</span>
        </a>
      )}
      {project.sourceUrl && (
        <a className="text-link" href={project.sourceUrl} target="_blank" rel="noreferrer">
          Source code <Icon name="external" />
          <span className="sr-only"> of {project.title} (opens in a new tab)</span>
        </a>
      )}
    </>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className="project" data-tint={project.tint} data-reveal>
      <div className="project__visual">
        <div className="project__frame">
          <div className="project__frame-bar" aria-hidden="true">
            <i /><i /><i />
          </div>
          {project.image ? (
            <img
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              loading="lazy"
              decoding="async"
            />
          ) : (
            // An unmistakable stand-in — never a fake screenshot.
            <div className="project__placeholder" role="img" aria-label={`Screenshot of ${project.title} coming soon`}>
              <Doodle name="flower" />
              <span className="hand">screenshot coming soon</span>
            </div>
          )}
        </div>
      </div>

      <div className="project__body">
        <p className="project__index">
          <span className="hand">project {number}</span>
          {project.year && <span className="chip">{project.year}</span>}
        </p>
        <h3>{project.title}</h3>
        <p className="project__summary">{project.summary}</p>
        <dl className="project__role">
          <dt>My role</dt>
          <dd>{project.role}</dd>
        </dl>
        <ul className="chips" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
        <div className="project__actions">
          <button type="button" className="btn btn--primary btn--sm" onClick={() => dialogRef.current?.showModal()}>
            Read the story
            <span className="sr-only"> of {project.title}</span>
            <Icon name="arrow-right" className="icon--nudge" />
          </button>
          <ProjectLinks project={project} />
        </div>
      </div>

      {/* Native <dialog>: focus trapping, Escape and focus return come for free. */}
      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        <div className="project-dialog__panel">
          <form method="dialog">
            <button className="icon-button project-dialog__close" aria-label="Close">
              <Icon name="close" />
            </button>
          </form>
          <p className="hand project-dialog__eyebrow">project {number}</p>
          <h2 id={titleId}>{project.title}</h2>
          <p className="project-dialog__summary">{project.summary}</p>

          <h3>The problem</h3>
          <p>{project.problem}</p>

          <h3>My role</h3>
          <p>{project.role}</p>

          {project.features.length > 0 && (
            <>
              <h3>Key features</h3>
              <ul className="project-dialog__list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </>
          )}

          {project.decisions.length > 0 && (
            <>
              <h3>Technical decisions</h3>
              <ul className="project-dialog__list">
                {project.decisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
            </>
          )}

          {project.outcome && (
            <>
              <h3>Outcome</h3>
              <p>{project.outcome}</p>
            </>
          )}

          <h3>Built with</h3>
          <ul className="chips">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          {(project.liveUrl || project.sourceUrl) && (
            <div className="project__actions">
              <ProjectLinks project={project} />
            </div>
          )}
        </div>
      </dialog>
    </article>
  )
}
