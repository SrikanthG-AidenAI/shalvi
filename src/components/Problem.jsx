const cards = [
  {
    title: 'Vanishing Forests',
    desc: 'Forests disappear at an alarming rate, taking entire ecosystems with them.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e87b1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8M5 12l7-7 7 7M8 16l4-4 4 4" />
      </svg>
    ),
  },
  {
    title: 'Polluted Oceans',
    desc: 'Our oceans and freshwater fill with pollution — endangering food systems and life.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e87b1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12c4-3 8-3 12 0s8 3 8 0" />
        <path d="M2 17c4-3 8-3 12 0s8 3 8 0" />
        <path d="M2 7c4-3 8-3 12 0s8 3 8 0" />
      </svg>
    ),
  },
  {
    title: 'Lost Habitats',
    desc: 'Wildlife habitats vanish, leaving countless species without a home.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e87b1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
      </svg>
    ),
  },
  {
    title: 'Forgotten Lives',
    desc: 'Animals face cruelty and abandonment; communities struggle without support.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e87b1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-3-3.87" />
        <path d="M4 21v-2a4 4 0 013-3.87" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
]

export default function Problem() {
  return (
    <section id="problem" className="problem-bg text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 reveal">
          <p className="text-sand-300 text-sm uppercase tracking-[0.22em] mb-5">The Problem</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] mb-7">
            The world is <span className="italic font-medium text-sand-200">losing</span> its voice.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            These crises are deeply connected. When ecosystems collapse, animals suffer. When nature
            is damaged, human lives become more vulnerable. Yet the most affected beings rarely have
            the power to speak for themselves.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`reveal reveal-${i + 1} bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors`}
            >
              <div className="w-11 h-11 rounded-full bg-ember-500/20 flex items-center justify-center mb-5">
                {c.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
