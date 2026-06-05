export default function Hero() {
  return (
    <section className="hero-bg relative min-h-screen flex items-center text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-forest-950/40" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-xs uppercase tracking-[0.18em] text-sand-100 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-ember-500 animate-pulse" />
            A Global Movement, Founded 2025
          </div>
          <h1 className="reveal reveal-1 font-display font-light text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] mb-7">
            Be the <span className="italic font-medium text-sand-200">Voice</span>
            <br />
            for the <span className="italic font-medium text-sand-200">Voiceless.</span>
          </h1>
          <p className="reveal reveal-2 text-lg sm:text-xl text-white/85 max-w-2xl mb-10 leading-relaxed">
            Millions of vulnerable people, animals, and ecosystems suffer in silence. Together, we
            can protect nature and give muted beings the safety, dignity, and care they deserve.
          </p>
          <div className="reveal reveal-3 flex flex-wrap items-center gap-4">
            <a
              href="#help"
              className="btn-shine inline-flex items-center gap-3 px-7 py-4 rounded-full bg-ember-500 hover:bg-ember-600 text-white font-semibold shadow-soft transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21s-7-4.534-9.5-9C1 8 3.5 4 7.5 4c2 0 3.5 1 4.5 2.5C13 5 14.5 4 16.5 4c4 0 6.5 4 5 8-2.5 4.466-9.5 9-9.5 9z" />
              </svg>
              Donate Now
            </a>
            <a
              href="#help"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur border border-white/25 text-white font-semibold transition-colors"
            >
              Join the Movement
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="reveal reveal-4 grid grid-cols-3 gap-6 sm:gap-10 max-w-2xl mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="font-display text-3xl sm:text-4xl font-semibold text-sand-100">2</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-white/75 mt-1">
                Countries<br className="hidden sm:block" /> US &amp; India
              </div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-semibold text-sand-100">3</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-white/75 mt-1">
                Pillars<br className="hidden sm:block" /> Nature · People · Animals
              </div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-semibold text-sand-100">∞</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-white/75 mt-1">
                Lives we<br className="hidden sm:block" /> aim to protect
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#problem"
        className="animate-bob absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white text-xs tracking-[0.25em] uppercase flex flex-col items-center gap-2"
      >
        Scroll
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </a>
    </section>
  )
}
