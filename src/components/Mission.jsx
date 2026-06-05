export default function Mission() {
  return (
    <section id="mission" className="bg-forest-950 text-white py-24 lg:py-32 relative overflow-hidden">
      <div aria-hidden="true" className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-forest-700/40 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-ember-500/15 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <p className="reveal text-sand-300 text-sm uppercase tracking-[0.22em] mb-6">Our Mission</p>
        <h2 className="reveal reveal-1 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.15] max-w-4xl mx-auto">
          To conserve nature, reduce the most pressing threats to biodiversity, and be a{' '}
          <span className="italic font-medium text-sand-200">voice for the voiceless</span> —
          protecting vulnerable people and animals while promoting sustainable coexistence with our
          planet.
        </h2>
        <div className="reveal reveal-2 leaf-divider mt-12 max-w-md mx-auto">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#9bc1a4">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3 8 0 12-8 12-12 0-1.7-.66-3-1.5-4-1.91 2-3.5 4-1.5 4z" />
          </svg>
        </div>
      </div>
    </section>
  )
}
