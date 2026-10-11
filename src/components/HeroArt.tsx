import { useEffect, useState } from 'react'
import { site } from '../content/site'
import { Doodle } from './ui'
import './HeroArt.css'

const INK = '#342746'
const CREAM = '#fff6ec'
const SPARKLE = 'M0-9c.9 5.4 3.6 8.1 9 9-5.4.9-8.1 3.6-9 9-.9-5.4-3.6-8.1-9-9 5.4-.9 8.1-3.6 9-9z'
const HEART = 'M0 9C-6.5 4.5-9 1.1-9-2.3A4.7 4.7 0 0 1 0-4.5a4.7 4.7 0 0 1 9 2.2C9 1.1 6.5 4.5 0 9z'

// Typing speed for the mini terminal, in seconds.
const PER_CHAR = 0.07
const PAUSE = 0.55

/** The atelier's cat. Its viewBox matches its spot in the desk scene, so it can also sit on its own. */
function Cat() {
  return (
    <svg className="hero-art__cat-svg" viewBox="384 196 124 176" aria-hidden="true">
    {/* the cat */}
    <g className="hero-art__tail">
      <path d="M466 340c30 6 40-24 22-42" fill="none" stroke={INK} strokeWidth="15" strokeLinecap="round" />
      <path d="M466 340c30 6 40-24 22-42" fill="none" stroke={CREAM} strokeWidth="9" strokeLinecap="round" />
    </g>
    <path d="M404 352c-4-40 10-66 36-66s40 26 36 66z" fill={CREAM} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <path d="M414 246l-4-30 26 16z" fill={CREAM} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <path d="M466 246l4-30-26 16z" fill={CREAM} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <ellipse cx="440" cy="262" rx="34" ry="28" fill={CREAM} stroke={INK} strokeWidth="3" />
    <path d="M417 239l-2-14 13 8zM463 239l2-14-13 8z" fill="#ffd9e8" />
    <g className="hero-art__eyes" fill={INK}>
      <circle cx="428" cy="261" r="3.4" />
      <circle cx="452" cy="261" r="3.4" />
    </g>
    <ellipse cx="418" cy="271" rx="6" ry="3.5" fill="#f4a8cc" opacity=".6" />
    <ellipse cx="462" cy="271" rx="6" ry="3.5" fill="#f4a8cc" opacity=".6" />
    <path d="M437 267h6l-3 3.6z" fill="#f4a8cc" stroke={INK} strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M440 271c-1 4-6 5-8 2M440 271c1 4 6 5 8 2" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    <ellipse cx="428" cy="349" rx="9" ry="6" fill={CREAM} stroke={INK} strokeWidth="2.5" />
    <ellipse cx="452" cy="349" rx="9" ry="6" fill={CREAM} stroke={INK} strokeWidth="2.5" />

    {/* hearts that float up when the cat is petted */}
    <g transform="translate(420 214)"><path className="hero-art__purr" d={HEART} fill="#f4a8cc" /></g>
    <g transform="translate(446 204) scale(.7)"><path className="hero-art__purr" style={{ animationDelay: '.15s' }} d={HEART} fill="#c9b4ff" /></g>
    <g transform="translate(466 218) scale(.55)"><path className="hero-art__purr" style={{ animationDelay: '.3s' }} d={HEART} fill="#f4a8cc" /></g>
    </svg>
  )
}

/** Fallback centrepiece when no portrait is configured: a tiny desk with a laptop and a mug of tea. */
function DeskScene() {
  return (
    <svg
      className="hero-art__scene"
      viewBox="0 0 520 440"
      role="img"
      aria-label="Illustration of a desk with a laptop showing colourful lines of code, a pink mug of tea and a small cream cat."
    >
      <path className="hero-art__blob" d="M92 238c0-102 78-180 184-180s192 70 192 174-84 172-192 172S92 340 92 238z" />
      <circle className="hero-art__blob hero-art__blob--pink" cx="446" cy="292" r="72" />
      <ellipse cx="260" cy="392" rx="190" ry="9" fill={INK} opacity=".08" />

      {/* sparkles */}
      <g transform="translate(74 206)"><path className="hero-art__sparkle" d={SPARKLE} fill="#c9b4ff" /></g>
      <g transform="translate(318 104) scale(.8)"><path className="hero-art__sparkle" style={{ animationDelay: '-1.4s' }} d={SPARKLE} fill="#ffd98a" /></g>
      <g transform="translate(496 196) scale(.7)"><path className="hero-art__sparkle" style={{ animationDelay: '-2.6s' }} d={SPARKLE} fill="#f4a8cc" /></g>
      <g transform="translate(40 318) scale(.55)"><path className="hero-art__sparkle" style={{ animationDelay: '-0.7s' }} d={SPARKLE} fill="#f4a8cc" /></g>

      {/* mug of tea */}
      <g transform="translate(-20 0)">
        <path className="hero-art__steam" d="M86 290c-6-8 6-12 0-20" />
        <path className="hero-art__steam" style={{ animationDelay: '-1.3s' }} d="M104 288c-6-8 6-12 0-20" />
        <path d="M118 316c17-2 17 24 0 22" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <rect x="70" y="300" width="50" height="52" rx="12" fill="#ffd9e8" stroke={INK} strokeWidth="3" />
        <g transform="translate(95 327) scale(.75)"><path d={HEART} fill="#f4a8cc" /></g>
      </g>

      {/* laptop */}
      <rect x="150" y="166" width="220" height="154" rx="14" fill="#fff" stroke={INK} strokeWidth="3" />
      <rect x="162" y="178" width="196" height="130" rx="7" fill="#2e2240" />
      <circle cx="175" cy="191" r="3" fill="#f4a8cc" />
      <circle cx="185" cy="191" r="3" fill="#ffd98a" />
      <circle cx="195" cy="191" r="3" fill="#c9b4ff" />
      <g>
        <rect x="174" y="206" width="44" height="6" rx="3" fill="#c9b4ff" />
        <rect x="224" y="206" width="70" height="6" rx="3" fill="#ffd9e8" />
        <rect x="186" y="222" width="58" height="6" rx="3" fill="#dde4ff" />
        <rect x="250" y="222" width="34" height="6" rx="3" fill="#ffd98a" />
        <rect x="186" y="238" width="92" height="6" rx="3" fill="#fff" opacity=".5" />
        <rect x="198" y="254" width="48" height="6" rx="3" fill="#f4a8cc" />
        <rect x="252" y="254" width="62" height="6" rx="3" fill="#c9b4ff" />
        <rect x="186" y="270" width="30" height="6" rx="3" fill="#ffe5d6" />
        <rect x="174" y="286" width="22" height="6" rx="3" fill="#c9b4ff" />
        <rect className="hero-art__cursor" x="202" y="283" width="7" height="12" rx="1.5" fill="#fff" />
      </g>
      <path d="M130 320h260l13 21a7 7 0 0 1-6 11H123a7 7 0 0 1-6-11z" fill="#e8deff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="236" y="321" width="48" height="5" rx="2.5" fill={INK} opacity=".25" />
      <g transform="translate(366 170) rotate(14) scale(1.5)">
        <path d={HEART} fill="#f4a8cc" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      </g>

      {/* desk */}
      <rect x="36" y="352" width="448" height="16" rx="8" fill="#ffe5d6" stroke={INK} strokeWidth="3" />
    </svg>
  )
}

/**
 * The signature hero visual: the portrait (or the desk illustration) with a
 * self-typing mini terminal, a taped note and the cat. Pet the cat for a small surprise.
 */
export function HeroArt() {
  const { portrait } = site
  const [purring, setPurring] = useState(false)

  useEffect(() => {
    if (!purring) return
    const timer = setTimeout(() => setPurring(false), 1800)
    return () => clearTimeout(timer)
  }, [purring])

  // Each terminal line starts after the previous one has finished "typing".
  let clock = 0.9
  const lines = site.hero.terminal.map((line) => {
    const typeAt = clock
    const printAt = typeAt + line.command.length * PER_CHAR + 0.25
    clock = printAt + PAUSE
    return { ...line, typeAt, printAt }
  })

  return (
    <div className={`hero-art ${portrait ? 'hero-art--portrait' : ''} ${purring ? 'is-purring' : ''}`}>
      {portrait ? (
        <div className="hero-art__portrait">
          <img
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      ) : (
        <DeskScene />
      )}

      {portrait && (
        <>
          <Doodle name="sparkle" className="hero-art__doodle hero-art__doodle--1" />
          <Doodle name="heart" className="hero-art__doodle hero-art__doodle--2" />
          <Doodle name="star" className="hero-art__doodle hero-art__doodle--3" />
        </>
      )}

      {/* Decorative: it repeats what the page already says in plain text. */}
      <div className="hero-art__terminal" aria-hidden="true">
        <div className="hero-art__terminal-bar">
          <i /><i /><i />
        </div>
        {lines.map((line) => (
          <div key={line.command}>
            <p>
              <span className="hero-art__prompt">$</span>{' '}
              <span
                className="hero-art__typed"
                style={{
                  width: `${line.command.length}ch`,
                  animation: `type ${line.command.length * PER_CHAR}s steps(${line.command.length}) ${line.typeAt}s backwards`,
                }}
              >
                {line.command}
              </span>
            </p>
            <p className="hero-art__output" style={{ animationDelay: `${line.printAt}s` }}>
              {line.output}
            </p>
          </div>
        ))}
      </div>

      <p className="hero-art__note" aria-hidden="true">
        {site.hero.note}
      </p>

      <button type="button" className="hero-art__cat" aria-label="Pet the cat" onClick={() => setPurring(true)}>
        <Cat />
      </button>
      <p className="hero-art__bubble" aria-hidden="true">
        purr ♡
      </p>
      <span className="sr-only" role="status">
        {purring ? 'The cat purrs happily.' : ''}
      </span>
    </div>
  )
}
