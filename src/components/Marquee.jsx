const items = [
  'Protect Nature',
  'Defend Vulnerable Lives',
  'Rescue Animals',
  'Inspire Compassion',
  'Be the Voice',
]

function Row({ ariaHidden = false }) {
  return (
    <div className="flex items-center gap-12 px-6" aria-hidden={ariaHidden || undefined}>
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-12">
          <span className={i % 2 === 1 ? 'italic text-sand-200' : ''}>{t}</span>
          <span className="text-sand-400">✦</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="bg-forest-900 text-sand-100 overflow-hidden py-6 border-y border-forest-800">
      <div className="flex gap-12 whitespace-nowrap font-display text-xl sm:text-2xl animate-marquee">
        <Row />
        <Row ariaHidden />
      </div>
    </section>
  )
}
