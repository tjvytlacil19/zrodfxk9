import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ImagePlaceholder } from '@/components/image-placeholder'
import { HexMark } from '@/components/hex-mark'

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
    <section id="programs" className="scroll-mt-16 py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading index="01" eyebrow="Selected Work" title="Programs" />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:mt-24 lg:gap-y-24">
          {PROGRAMS.map((program) => (
            <a key={program.name} href="#contact" className="group block">
              <div className="relative overflow-hidden">
                <ImagePlaceholder
                  label={program.name}
                  className="aspect-video w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border transition-colors duration-300 group-hover:ring-primary/50"
                />
                {/* Hexagon badge */}
                <span className="absolute left-5 top-5 flex size-11 items-center justify-center bg-background/80 backdrop-blur-sm hex-clip-flat">
                  <HexMark className="size-6 text-primary" />
                </span>
              </div>

              <div className="mt-7 flex items-start justify-between gap-6">
                <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  {program.name}
                </h3>
                <ArrowUpRight className="mt-1 size-7 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>

              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                {program.description}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                View Program
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-primary transition-all duration-300 group-hover:w-12"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
