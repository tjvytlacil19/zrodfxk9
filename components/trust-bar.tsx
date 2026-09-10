import { Award, ShieldCheck, Target } from 'lucide-react'

const ITEMS = [
  {
    icon: Award,
    stat: '20+ Years',
    text: 'Professional behaviorist experience',
  },
  {
    icon: ShieldCheck,
    stat: 'Aggression',
    text: 'Rehabilitation specialists',
  },
  {
    icon: Target,
    stat: 'Off-Leash',
    text: 'Reliability guaranteed protocols',
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {ITEMS.map(({ icon: Icon, stat, text }) => (
          <div
            key={stat}
            className="flex items-center gap-4 px-4 py-8 sm:px-6 lg:px-8"
          >
            <Icon className="size-8 shrink-0 text-primary" strokeWidth={1.5} />
            <div>
              <p className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                {stat}
              </p>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
