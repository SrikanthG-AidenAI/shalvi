export default function FinalCTA() {
  return (
    <section className="cta-bg text-white relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-28 lg:py-36 text-center">
        <p className="reveal text-sand-300 text-sm uppercase tracking-[0.25em] mb-7">Together</p>
        <h2 className="reveal reveal-1 font-display text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.05] mb-8">
          Be the <span className="italic font-medium text-sand-200">Voice</span> for the{' '}
          <span className="italic font-medium text-sand-200">Voiceless.</span>
        </h2>
        <p className="reveal reveal-2 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-12 leading-relaxed">
          Together, we can protect nature, defend vulnerable lives, and build a more compassionate
          future.
        </p>
        <div className="reveal reveal-3 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="btn-shine inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ember-500 hover:bg-ember-600 text-white font-semibold shadow-soft transition-colors"
          >
            Donate Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur border border-white/25 text-white font-semibold transition-colors"
          >
            Join the Movement
          </a>
        </div>
      </div>
    </section>
  )
}
