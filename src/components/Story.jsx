export default function Story() {
  return (
    <section id="story" className="bg-sand-50 grain py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        <div className="lg:col-span-6 reveal order-2 lg:order-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80"
              alt="Rakhi Singh, founder of Shalvi.org"
              className="rounded-3xl shadow-card w-full object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-forest-900 text-sand-100 rounded-2xl p-6 sm:p-8 shadow-card max-w-xs">
              <div className="font-display text-xl sm:text-2xl leading-snug">
                "Every living being deserves protection, dignity, and a chance to thrive."
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.18em] text-sand-300">
                — Rakhi Singh, Founder
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 reveal reveal-1 order-1 lg:order-2">
          <p className="text-forest-700 text-sm uppercase tracking-[0.22em] mb-5">Our Story</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] text-forest-950 mb-8">
            A mission born from <span className="italic font-medium text-forest-700">compassion.</span>
          </h2>
          <div className="space-y-5 text-forest-900/80 text-lg leading-relaxed">
            <p>
              Shalvi.org was founded in <strong className="text-forest-900">2025 by Rakhi Singh</strong>,
              inspired by a simple but powerful belief — that every living being deserves protection,
              dignity, and a chance to thrive.
            </p>
            <p>
              What began as a vision to protect both <em>nature</em> and <em>muted beings</em> has
              grown into a global mission, connecting communities, volunteers, and advocates across
              the <strong className="text-forest-900">United States</strong> and{' '}
              <strong className="text-forest-900">India</strong>.
            </p>
            <p>
              Shalvi exists to bridge the gap between environmental protection, animal welfare, and
              human compassion.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-full bg-forest-100 text-forest-800 text-sm font-medium">Founded 2025</span>
            <span className="px-4 py-1.5 rounded-full bg-forest-100 text-forest-800 text-sm font-medium">USA · India</span>
            <span className="px-4 py-1.5 rounded-full bg-forest-100 text-forest-800 text-sm font-medium">Non-profit</span>
          </div>
        </div>
      </div>
    </section>
  )
}
