import { useState } from 'react'

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-950 text-sand-200 pt-20 pb-10 border-t border-forest-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <a href="#top" className="inline-flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-ember-500 text-white font-display font-bold text-lg">
              S
            </span>
            <span className="font-display text-2xl text-white">
              Shalvi<span className="text-sand-300">.org</span>
            </span>
          </a>
          <p className="mt-6 max-w-md text-sand-300/80 leading-relaxed">
            Protect Nature. Protect Life. Inspire Compassion.
            <br />A global movement bridging environmental protection, animal welfare, and human
            compassion.
          </p>
          <div className="mt-7 flex items-center gap-3">
            {['instagram', 'twitter', 'facebook', 'linkedin'].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-10 h-10 rounded-full border border-sand-300/30 inline-flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <SocialIcon name={s} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Explore" items={[
          { href: '#story', label: 'Our Story' },
          { href: '#mission', label: 'Mission' },
          { href: '#protect', label: 'What We Protect' },
          { href: '#impact', label: 'Impact Vision' },
        ]} />

        <FooterCol title="Get Involved" items={[
          { href: '#help', label: 'Donate' },
          { href: '#help', label: 'Volunteer' },
          { href: '#help', label: 'Advocate' },
          { href: '#help', label: 'Partner' },
        ]} />

        <div className="lg:col-span-3">
          <h4 className="text-white font-display text-lg font-semibold mb-4">Stay Connected</h4>
          <p className="text-sm text-sand-300/85 mb-4">
            Be the first to hear stories of change, rescue, and renewal.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubscribed(true)
            }}
            className="flex items-center gap-2 bg-white/5 border border-sand-300/20 rounded-full p-1.5 pl-4"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="bg-transparent flex-1 text-sm placeholder:text-sand-300/50 focus:outline-none text-white"
            />
            <button className="px-4 py-2 rounded-full bg-ember-500 hover:bg-ember-600 text-white text-sm font-semibold transition-colors">
              {subscribed ? 'Subscribed ✓' : 'Join'}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-14 pt-8 border-t border-sand-300/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-300/60">
        <p>© {year} Shalvi.org — Protect Nature. Protect Life. Inspire Compassion.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div className="lg:col-span-2">
      <h4 className="text-white font-display text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-3 text-sm text-sand-300/85">
        {items.map((it) => (
          <li key={it.label}>
            <a href={it.href} className="hover:text-white transition-colors">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcon({ name }) {
  switch (name) {
    case 'instagram':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    case 'twitter':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 5.92a8.2 8.2 0 01-2.36.65 4.12 4.12 0 001.8-2.27 8.22 8.22 0 01-2.6 1A4.1 4.1 0 0011.86 9.1a11.65 11.65 0 01-8.45-4.28A4.1 4.1 0 004.68 10.3a4.07 4.07 0 01-1.86-.51v.05a4.1 4.1 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 012 18.4a11.62 11.62 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.68 0-.18 0-.36-.01-.53A8.36 8.36 0 0022 5.92z" />
        </svg>
      )
    case 'facebook':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.76c1.4-2.58 7-2.78 7 2.47V19z" />
        </svg>
      )
    default:
      return null
  }
}
