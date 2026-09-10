import { SectionHeading } from '@/components/section-heading'
import { HexMark } from '@/components/hex-mark'

const QUOTES = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our dog came back a completely different animal — calm, focused, and reliable off leash.',
    name: 'Placeholder Name',
    detail: 'Owner, German Shepherd',
  },
  {
    quote:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The aggression work was nothing short of transformational for our household.',
    name: 'Placeholder Name',
    detail: 'Owner, Belgian Malinois',
  },
  {
    quote:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Worth every mile of the drive to the ranch. Results speak for themselves.',
    name: 'Placeholder Name',
    detail: 'Owner, Rottweiler',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 honeycomb-surface py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading index="03" eyebrow="Client Results" title="Proof" />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-24">
          {QUOTES.map((item, i) => (
            <figure
              key={i}
              className="relative flex flex-col border border-border bg-background p-8"
            >
              <HexMark className="size-8 text-primary" />
              <blockquote className="mt-6 flex-1 text-pretty leading-relaxed text-foreground">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
                  {item.name}
                </p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
