const goals = [
  { n: '01', title: 'Restore Ecosystems', desc: 'Rebuild and safeguard the natural systems that sustain biodiversity.', border: 'border-forest-700' },
  { n: '02', title: 'Rescue Animals', desc: 'Protect creatures in distress with care, shelter, and rehabilitation.', border: 'border-forest-500' },
  { n: '03', title: 'Support Communities', desc: 'Stand with vulnerable people, building dignity and opportunity.', border: 'border-sand-500' },
  { n: '04', title: 'Build the Movement', desc: 'Unite advocates worldwide for compassion and sustainability.', border: 'border-ember-500' },
]

export default function Impact() {
  return (
    <section id="impact" className="bg-forest-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-end mb-14">
        <div className="lg:col-span-7">
          <p className="reveal text-forest-700 text-sm uppercase tracking-[0.22em] mb-5">Our Impact Vision</p>
          <h2 className="reveal reveal-1 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] text-forest-950">
            Young organization. <span className="italic font-medium text-forest-700">Bold ambition.</span>
          </h2>
        </div>
        <div className="lg:col-span-5 reveal reveal-2">
          <p className="text-lg text-forest-900/75 leading-relaxed">
            Every action — large or small — helps create lasting change. Here is the future we are
            building, together.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {goals.map((g, i) => (
          <div
            key={g.n}
            className={`reveal reveal-${i + 1} bg-white rounded-2xl p-7 shadow-soft border-t-4 ${g.border}`}
          >
            <div className="font-display text-5xl font-semibold text-forest-900 tabular-nums">{g.n}</div>
            <h3 className="font-display text-xl font-semibold text-forest-950 mt-4 mb-2">{g.title}</h3>
            <p className="text-sm text-forest-900/70 leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
