import { site } from '../content/site'
import { Doodle, Icon, SocialLinks } from './ui'
import './SiteFooter.css'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__name">
            <Doodle name="flower" />
            {site.name}
          </p>
          <p className="site-footer__note">
            © {new Date().getFullYear()} · <span className="hand">made with care, one tiny detail at a time ♡</span>
          </p>
        </div>
        <SocialLinks />
        <a className="text-link site-footer__top" href="#top">
          Back to top <Icon name="arrow-up" />
        </a>
      </div>
    </footer>
  )
}
