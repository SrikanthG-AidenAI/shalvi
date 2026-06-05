const pillars = [
  {
    tag: '🌿 Nature',
    title: 'Defending the Ecosystems That Sustain Life',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80',
    alt: 'Sun rays through a misty forest',
    desc: 'We protect the wild systems Earth depends on — fighting climate change, deforestation, and water degradation while championing biodiversity.',
    items: [
      'Climate change & rising CO₂ levels',
      'Deforestation & habitat loss',
      'Ocean & freshwater degradation',
      'Biodiversity conservation',
    ],
  },
  {
    tag: '🕊️ Muted Beings',
    title: 'A Voice for Those Who Cannot Speak',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80',
    alt: 'Hands joined together in solidarity',
    desc: 'Many lives suffer in silence. We stand beside vulnerable people — ensuring they have shelter, dignity, and the support they need to thrive.',
    items: [
      'Access to shelter, food, and healthcare',
      'Human rights protection',
      'Community support networks',
      'Advocacy for the unheard',
    ],
  },
  {
    tag: '🐾 Animals',
    title: 'Rescue, Rehabilitate, Re-home',
    img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1400&q=80',
    alt: 'Rescued puppy looking up trustingly',
    desc: 'From street rescues to wildlife protection, we work tirelessly to give animals the safety and care they deserve — and the second chance they need.',
    items: [
      'Rescue and rehabilitation',
      'Anti-cruelty advocacy',
      'Responsible care and adoption',
      'Wildlife habitat protection',
    ],
  },
]

export default function Protect() {
  return (
    <section id="protect" className="bg-sand-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <p className="reveal text-forest-700 text-sm uppercase tracking-[0.22em] mb-5">What We Protect</p>
          <h2 className="reveal reveal-1 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] text-forest-950">
            Three pillars. <span className="italic font-medium text-forest-700">One mission.</span>
          </h2>
          <p className="reveal reveal-2 mt-6 text-lg text-forest-900/75 leading-relaxed">
            The health of our planet, its people, and its creatures are inseparable. We work where
            compassion meets conservation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-7">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className={`pillar reveal reveal-${i + 1} bg-white rounded-3xl overflow-hidden shadow-soft flex flex-col`}
            >
              <div className="img-wrap aspect-[5/4] relative">
                <img src={p.img} alt={p.alt} className="w-full h-full object-cover" />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-forest-900 text-xs font-semibold uppercase tracking-wider">
                  {p.tag}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-forest-950 mb-3">
                  {p.title}
                </h3>
                <p className="text-forest-900/75 leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-2.5 text-sm text-forest-900/80 mt-auto">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5">
                      <span className="text-forest-600 mt-1">▹</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
