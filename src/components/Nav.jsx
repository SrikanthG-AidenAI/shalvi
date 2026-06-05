import { useState } from 'react'

const links = [
  { href: '#story', label: 'Our Story' },
  { href: '#mission', label: 'Mission' },
  { href: '#protect', label: 'What We Protect' },
  { href: '#impact', label: 'Impact' },
  { href: '#help', label: 'Get Involved' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header id="nav" className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="brand-mark inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 backdrop-blur text-white font-display font-bold text-lg transition-colors">
            S
          </span>
          <span className="brand text-white font-display text-xl tracking-tight transition-colors">
            Shalvi<span className="text-sand-200">.org</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-white/90">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#help"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ember-500 hover:bg-ember-600 text-white text-sm font-semibold shadow-soft btn-shine transition-colors"
          >
            <span>Donate</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
            </svg>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-sand-50 border-t border-forest-100">
          <div className="px-6 py-5 flex flex-col gap-4 text-forest-900">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
