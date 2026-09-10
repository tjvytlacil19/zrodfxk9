import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ImagePlaceholder } from '@/components/image-placeholder'

const PROGRAMS = [
  {
    name: 'Board & Train',
    description: 'Immersive on-ranch program building obedience from the ground up.',
  },
  {
    name: 'Aggression Rehab',
    description: 'Structured protocols for reactive, fearful, and aggressive dogs.',
  },
  {
    name: 'Off-Leash Reliability',
    description: 'Dependable recall and control in high-distraction environments.',
  },
  {
    name: 'Puppy Foundations',
    description: 'Early development shaping confident, well-adjusted working dogs.',
  },
  {
    name: 'Protection Basics',
    description: 'Controlled foundations in personal protection and guardian work.',
  },
  {
    name: 'Handler Coaching',
    description: 'Owner transfer sessions so results carry over into daily life.',
  },
]

export function ProgramsGrid() {
  return (
    <section id="programs" className="scroll-mt-16 border-b border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What We Offer" title="Training Programs" />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <a
              key={program.name}
              href="#contact"
              className="group relative flex flex-col bg-card transition-colors hover:bg-secondary"
            >
              <ImagePlaceholder
                label={program.name}
                className="aspect-[16/10] w-full"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">
                    {program.name}
                  </h3>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
                <span className="mt-4 font-heading text-xs font-semibold uppercase tracking-widest text-primary">
                  Learn More
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
