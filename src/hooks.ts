import { useEffect, useState } from 'react'

/**
 * Scroll reveals. Elements marked [data-reveal] that start below the fold are
 * hidden, then animated in once when they scroll into view. Anything already
 * on screen (or any visitor who prefers reduced motion) is left untouched, so
 * content is never gated behind an animation.
 */
export function useReveal() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.replace('reveal-pending', 'reveal-in')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )

    for (const el of document.querySelectorAll('[data-reveal]')) {
      if (el.getBoundingClientRect().top < innerHeight) continue
      el.classList.add('reveal-pending')
      observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])
}

/** Returns the id of the section currently crossing the middle of the viewport. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -55% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}
