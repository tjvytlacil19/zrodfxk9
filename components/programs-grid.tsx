import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ImagePlaceholder } from '@/components/image-placeholder'

const PROGRAMS = [
  {
    name: 'Advanced Board & Train',
    description:
      'The ultimate immersive experience where your dog stays with us for 4-6 weeks of intensive training, learning obedience, structure, and real-world manners.',
  },
  {
    name: 'Aggressive Dog Rehabilitation',
    description:
      'Specialized training for reactive, fearful, and aggressive dogs, addressing the root cause with proven behavior modification techniques.',
  },
  {
    name: 'Puppy Training & Socialization',
    description:
      'Start your pup off right with foundation training, house manners, socialization, and confidence-building exercises.',
  },
  {
    name: 'Urban K9 Anxiety',
    description:
      'Trains dogs to stay calm in crowded environments, around loud noises, and in high-distraction settings, ensuring they thrive in urban life.',
  },
  {
    name: 'Family Dog Mastery',
    description: 'Reinforces structure and obedience to create the ultimate family-friendly dog.',
  },
  {
    name: 'Rescue Dog Rehab',
    description:
      'A structured rehabilitation program focused on trust-building, confidence exercises, and socialization to help your dog feel secure in their new environment.',
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
