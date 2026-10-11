import { site } from '../content/site'
import { HeroArt } from './HeroArt'
import { Icon, SocialLinks, stagger } from './ui'
import './Hero.css'

export function Hero() {
  const { headline, intro } = site.hero

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__hello" data-rise style={stagger(0)}>
            Hi, I’m {site.name} <span aria-hidden="true">♡</span>
          </p>
          <h1 id="hero-title" data-rise style={stagger(1)}>
            {headline.before} <em className="accent-word">{headline.highlight}</em> {headline.after}
          </h1>
          <p className="hero__title" data-rise style={stagger(2)}>
            {site.title}
          </p>
          <p className="hero__intro" data-rise style={stagger(3)}>
            {intro}
          </p>
          <div className="hero__actions" data-rise style={stagger(4)}>
            <a className="btn btn--primary" href="#work">
              See selected work <Icon name="arrow-right" className="icon--nudge" />
            </a>
            {site.resumeUrl ? (
              <a className="btn btn--ghost" href={site.resumeUrl} download>
                Download résumé <Icon name="download" className="icon--nudge-down" />
              </a>
            ) : (
              <a className="btn btn--ghost" href="#contact">
                Say hello
              </a>
            )}
          </div>
          <div data-rise style={stagger(5)}>
            <SocialLinks />
          </div>
        </div>

        <div className="hero__art" data-rise style={stagger(3)}>
          <HeroArt />
        </div>
      </div>

      <a className="hero__scroll-cue" href="#about">
        <span className="hand">scroll for more</span>
        <Icon name="arrow-down" />
      </a>
    </section>
  )
}
