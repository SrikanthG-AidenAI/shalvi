const photos = [
  {
    src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1400&q=80',
    alt: 'Close-up of a rescued dog with soulful eyes',
    caption: 'Heard.',
    span: 'lg:col-span-5 lg:row-span-2 aspect-[4/5]',
  },
  {
    src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Golden retriever being petted',
    caption: 'Held.',
    span: 'lg:col-span-4 aspect-[4/3]',
  },
  {
    src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80',
    alt: 'Tabby cat looking calmly at the camera',
    caption: 'Safe.',
    span: 'lg:col-span-3 aspect-square',
  },
  {
    src: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&w=1400&q=80',
    alt: 'Elephant herd walking in the wild',
    caption: 'Free.',
    span: 'lg:col-span-4 aspect-[4/3]',
  },
  {
    src: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=900&q=80',
    alt: 'Cat resting peacefully',
    caption: 'Home.',
    span: 'lg:col-span-3 aspect-square',
  },
  {
    src: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1400&q=80',
    alt: 'Tiny rescued puppy in human hands',
    caption: 'Loved.',
    span: 'lg:col-span-7 aspect-[16/9]',
  },
  {
    src: 'https://images.unsplash.com/photo-1530041539828-114de669390e?auto=format&fit=crop&w=900&q=80',
    alt: 'Horse in a peaceful field',
    caption: 'Calm.',
    span: 'lg:col-span-5 aspect-[16/9]',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-sand-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="reveal text-forest-700 text-sm uppercase tracking-[0.22em] mb-5">
              Faces We Fight For
            </p>
            <h2 className="reveal reveal-1 font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] text-forest-950">
              Every silent life has a <span className="italic font-medium text-forest-700">story.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 reveal reveal-2">
            <p className="text-lg text-forest-900/75 leading-relaxed">
              Behind every rescue is a moment of trust — a tail wag, a slow blink, a body relaxing
              into safety. These are the lives we are here to defend.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">
          {photos.map((p, i) => (
            <figure
              key={p.src}
              className={`reveal reveal-${(i % 4) + 1} group relative overflow-hidden rounded-3xl shadow-soft ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between text-white">
                <span className="font-display text-2xl sm:text-3xl italic font-medium">
                  {p.caption}
                </span>
                <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 text-[10px] uppercase tracking-[0.22em] text-sand-200">
                  Shalvi · Rescued
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reveal mt-14 text-center">
          <p className="font-display italic text-2xl sm:text-3xl text-forest-900 max-w-3xl mx-auto leading-snug">
            "They cannot speak. So we will. With every act of compassion, the silence breaks."
          </p>
        </div>
      </div>
    </section>
  )
}
