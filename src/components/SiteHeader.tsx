import { useEffect, useRef, useState } from 'react'
import { site } from '../content/site'
import { useActiveSection } from '../hooks'
import { Doodle, Icon } from './ui'
import './SiteHeader.css'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'process', label: 'Process' },
] as const

const SECTION_IDS = [...LINKS.map((link) => link.id), 'contact']

function toggleTheme() {
  const root = document.documentElement
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark'
  root.dataset.theme = next
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#1a1326' : '#fffaff')
  try {
    localStorage.setItem('theme', next)
  } catch {
    // Private mode etc. — the theme still applies for this visit.
  }
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // While the mobile menu is open: Escape or a tap outside closes it.
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      menuButtonRef.current?.focus()
    }
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__bar">
        <a className="site-header__logo" href="#top" onClick={close}>
          <Doodle name="flower" />
          {/* full name where it fits, short name on narrow phones */}
          <span className="site-header__name-full">{site.name}</span>
          <span className="site-header__name-short">{site.displayName}</span>
        </a>

        <nav id="site-nav" className="site-nav" aria-label="Main" data-open={open}>
          <ul>
            {LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary btn--sm site-nav__cta" href="#contact" onClick={close}>
            Say hello
          </a>
        </nav>

        <button type="button" className="icon-button theme-toggle" onClick={toggleTheme} aria-label="Switch between light and dark theme">
          <Icon name="moon" className="theme-toggle__moon" />
          <Icon name="sun" className="theme-toggle__sun" />
        </button>

        <button
          type="button"
          ref={menuButtonRef}
          className="icon-button site-header__menu"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}
