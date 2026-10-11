import type { CSSProperties, ReactNode } from 'react'
import { site } from '../content/site'

/** Stagger index for entrance animations: `style={stagger(2)}`. */
export const stagger = (i: number) => ({ '--i': i }) as CSSProperties

const ICONS = {
  github: (
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-down': <path d="M12 5v14M6 13l6 6 6-6" />,
  'arrow-up': <path d="M12 19V5M6 11l6-6 6 6" />,
  external: <path d="M7 17 17 7M8 7h9v9" />,
  copy: (
    <>
      <rect x="9" y="9" width="13" height="13" rx="3" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  download: <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />,
}

export type IconName = keyof typeof ICONS

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  )
}

/* The atelier's little vocabulary of hand-drawn shapes. Always decorative. */
const DOODLES = {
  sparkle: (
    <path
      fill="currentColor"
      d="M12 3c.9 5.4 3.6 8.1 9 9-5.4.9-8.1 3.6-9 9-.9-5.4-3.6-8.1-9-9 5.4-.9 8.1-3.6 9-9z"
    />
  ),
  heart: (
    <path
      fill="currentColor"
      d="M12 20.5C5.5 16 3 12.6 3 9.2A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 9 2.2c0 3.4-2.5 6.8-9 11.3z"
    />
  ),
  star: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.3l6.1-.7z"
    />
  ),
  flower: (
    <>
      <g fill="currentColor">
        <circle cx="12" cy="6.8" r="3.6" />
        <circle cx="16.95" cy="10.39" r="3.6" />
        <circle cx="15.06" cy="16.21" r="3.6" />
        <circle cx="8.94" cy="16.21" r="3.6" />
        <circle cx="7.05" cy="10.39" r="3.6" />
      </g>
      <circle cx="12" cy="12" r="2.7" fill="#ffd98a" />
    </>
  ),
}

export type DoodleName = keyof typeof DOODLES

export function Doodle({ name, className = '' }: { name: DoodleName; className?: string }) {
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      {DOODLES[name]}
    </svg>
  )
}

/** A small "sample" label, shown only while the content file is still placeholder data. */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  if (!site.isPlaceholder) return null
  return <p className="placeholder-note">{children}</p>
}

interface SectionHeadingProps {
  id: string
  number: string
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
  sample?: string
}

export function SectionHeading({ id, number, eyebrow, title, lede, sample }: SectionHeadingProps) {
  return (
    <header className="section-heading" data-reveal>
      <p className="eyebrow">
        <Doodle name="flower" />
        <span>
          {number} · {eyebrow}
        </span>
      </p>
      <h2 id={`${id}-title`}>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
      {sample && <PlaceholderNote>{sample}</PlaceholderNote>}
    </header>
  )
}

export function Section({
  children,
  className = '',
  ...heading
}: SectionHeadingProps & { children: ReactNode; className?: string }) {
  return (
    <section id={heading.id} className={`section ${className}`} aria-labelledby={`${heading.id}-title`}>
      <div className="container">
        <SectionHeading {...heading} />
        {children}
      </div>
    </section>
  )
}

export function SocialLinks() {
  if (site.socials.length === 0) return null
  return (
    <ul className="social-links">
      {site.socials.map((social) => (
        <li key={social.url}>
          <a href={social.url} target="_blank" rel="noreferrer" aria-label={`${social.label} (opens in a new tab)`}>
            <Icon name={social.icon} />
          </a>
        </li>
      ))}
    </ul>
  )
}
