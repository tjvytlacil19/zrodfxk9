import { Award, ShieldCheck, MapPin } from 'lucide-react'

const ITEMS = [
  {
    icon: Award,
    title: '20+ Years Experience',
    detail: 'Two decades shaping working-dog behavior.',
  },
  {
    icon: ShieldCheck,
    title: 'Aggression Specialists',
    detail: 'Proven protocols for the hardest cases.',
  },
  {
    icon: MapPin,
    title: '15-Acre Ranch',
    detail: 'Purpose-built grounds in Colorado Springs.',
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex items-center gap-4 px-4 py-8 sm:px-6 lg:px-8">
            <item.icon className="size-8 shrink-0 text-primary" strokeWidth={1.5} />
            <div>
              <p className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                {item.title}
              </p>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
