import { useEffect, useState } from 'react'
import { site } from '../content/site'
import { Doodle, Icon, PlaceholderNote, SocialLinks } from './ui'
import './Contact.css'

type CopyState = 'idle' | 'copied' | 'failed'

export function Contact() {
  const { email } = site
  const [copyState, setCopyState] = useState<CopyState>('idle')

  useEffect(() => {
    if (copyState === 'idle') return
    const timer = setTimeout(() => setCopyState('idle'), 2600)
    return () => clearTimeout(timer)
  }, [copyState])

  async function copyEmail() {
    if (!email) return
    try {
      await navigator.clipboard.writeText(email)
      setCopyState('copied')
    } catch {
      setCopyState('failed')
    }
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__panel" data-reveal>
          <Doodle name="heart" className="contact__doodle contact__doodle--1" />
          <Doodle name="sparkle" className="contact__doodle contact__doodle--2" />
          <Doodle name="star" className="contact__doodle contact__doodle--3" />
          <Doodle name="sparkle" className="contact__doodle contact__doodle--4" />

          <p className="eyebrow">
            <Doodle name="flower" />
            <span>06 · say hello</span>
          </p>
          <h2 id="contact-title">
            Have a little idea? Let’s build something <em className="accent-word">wonderful</em>.
          </h2>
          <p className="lede">
            I’m always happy to talk about new projects, collaborations and opportunities — or just to swap notes about
            building for the web.
          </p>

          {email ? (
            <>
              <div className="contact__actions">
                <a className="btn btn--primary" href={`mailto:${email}`}>
                  <Icon name="mail" /> Email me <Icon name="arrow-right" className="icon--nudge" />
                </a>
                <button type="button" className="btn btn--ghost" onClick={copyEmail} data-state={copyState}>
                  <Icon name={copyState === 'copied' ? 'check' : 'copy'} />
                  {copyState === 'copied' ? 'Copied ♡' : 'Copy email'}
                </button>
              </div>
              <p className="contact__email">{email}</p>
              <p className="sr-only" role="status">
                {copyState === 'copied' && 'Email address copied to clipboard.'}
                {copyState === 'failed' && `Copying didn’t work. The address is ${email}.`}
              </p>
              {copyState === 'failed' && (
                <p className="contact__hint" aria-hidden="true">
                  Copying didn’t work here — the address is just above.
                </p>
              )}
              <PlaceholderNote>placeholder email &amp; links — add your own</PlaceholderNote>
            </>
          ) : (
            <p className="contact__hint">The best way to reach me is through the links below.</p>
          )}

          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
