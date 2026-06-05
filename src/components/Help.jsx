const ways = [
  {
    icon: '❤️',
    title: 'Donate',
    desc: 'Support life-saving programs that protect nature, animals, and vulnerable people.',
    cta: 'Give Today',
    primary: true,
  },
  {
    icon: '🌍',
    title: 'Volunteer',
    desc: 'Use your time and skills to create real impact for nature and communities.',
    cta: 'Get Involved',
  },
  {
    icon: '📣',
    title: 'Advocate',
    desc: 'Spread awareness and amplify the message of compassion and conservation.',
    cta: 'Spread the Word',
  },
  {
    icon: '🤝',
    title: 'Partner',
    desc: 'Collaborate with us to expand the mission across borders and communities.',
    cta: 'Work With Us',
  },
]

export default function Help() {
  return (
    <section id="help" className="bg-forest-950 text-white py-24 lg:py-32 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-1/2 h-full opacity-20"
        style={{ background: 'radial-gradient(circle at right top, #4d855e 0%, transparent 60%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <p className="reveal text-sand-300 text-sm uppercase tracking-[0.22em] mb-5">Join the Movement</p>
          <h2 className="reveal reveal-1 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05]">
            Real change happens when <span className="italic font-medium text-sand-200">people come together.</span>
          </h2>
          <p className="reveal reveal-2 mt-6 text-lg text-white/75 leading-relaxed">
            You can help protect nature and give a voice to the voiceless. Choose the way that fits
            you best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ways.map((w, i) => (
            <a
              key={w.title}
              href="#"
              className={`reveal reveal-${i + 1} group rounded-3xl p-8 transition-transform ${
                w.primary
                  ? 'bg-gradient-to-br from-ember-500 to-ember-700 hover:scale-[1.02]'
                  : 'bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="text-4xl mb-6">{w.icon}</div>
              <h3 className="font-display text-2xl font-semibold mb-3">{w.title}</h3>
              <p className={`text-sm leading-relaxed mb-8 ${w.primary ? 'text-white/85' : 'text-white/75'}`}>
                {w.desc}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                {w.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
