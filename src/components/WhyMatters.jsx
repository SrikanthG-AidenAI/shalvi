const reasons = [
  { icon: '🌳', title: 'Protecting forests protects wildlife.', sub: 'Every saved acre shelters thousands of species.' },
  { icon: '🌊', title: 'Protecting oceans protects food systems.', sub: 'Clean waters feed both ecosystems and humanity.' },
  { icon: '🐾', title: 'Protecting animals strengthens ecosystems.', sub: "Every creature plays a role in nature's balance." },
  { icon: '🤝', title: 'Protecting communities builds a sustainable future.', sub: 'Resilient people create a resilient planet.' },
]

export default function WhyMatters() {
  return (
    <section className="bg-sand-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 reveal">
          <p className="text-forest-700 text-sm uppercase tracking-[0.22em] mb-5">Why This Work Matters</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] text-forest-950 mb-8">
            Compassion for <span className="italic font-medium text-forest-700">one life</span> protects many.
          </h2>
          <p className="text-lg text-forest-900/75 leading-relaxed mb-10">
            The health of our planet is inseparable from the well-being of people and animals.
            Everything we touch is connected — and so is everything we save.
          </p>
          <blockquote className="fancy relative pl-6 border-l-2 border-forest-300">
            <p className="font-display text-xl italic text-forest-900 leading-snug relative z-10">
              "The world does not need more silence. It needs more voices."
            </p>
          </blockquote>
        </div>

        <div className="lg:col-span-7 reveal reveal-1">
          <div className="space-y-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="group flex items-center gap-5 bg-white rounded-2xl p-5 sm:p-6 shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-forest-100 text-forest-700 flex items-center justify-center text-2xl">
                  {r.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-lg font-semibold text-forest-950">{r.title}</h4>
                  <p className="text-sm text-forest-900/70 mt-1">{r.sub}</p>
                </div>
                <svg
                  className="text-forest-300 group-hover:text-forest-600 transition-colors"
                  width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
