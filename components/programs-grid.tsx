import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ImagePlaceholder } from '@/components/image-placeholder'

const PROGRAMS = [
  {
    name: 'Advanced Board & Train',
    description:
      'The ultimate immersive experience where your dog stays with us for 4-6 weeks of intensive training, learning obedience, structure, and real-world manners.',
    stats: [
      { label: 'Duration', value: '4–6 Weeks' },
      { label: 'Format', value: 'On-Ranch' },
    ],
  },
  {
    name: 'Aggressive Dog Rehabilitation',
    description:
      'Specialized training for reactive, fearful, and aggressive dogs, addressing the root cause with proven behavior modification techniques.',
    stats: [
      { label: 'Focus', value: 'Behavior' },
      { label: 'Success Rate', value: '94%' },
    ],
  },
  {
    name: 'Puppy Training & Socialization',
    description:
      'Start your pup off right with foundation training, house manners, socialization, and confidence-building exercises.',
    stats: [
      { label: 'Age Range', value: '8–20 Wks' },
      { label: 'Sessions', value: '12' },
    ],
  },
  {
    name: 'Urban K9 Anxiety',
    description:
      'Trains dogs to stay calm in crowded environments, around loud noises, and in high-distraction settings, ensuring they thrive in urban life.',
    stats: [
      { label: 'Focus', value: 'Composure' },
      { label: 'Setting', value: 'Urban' },
    ],
  },
  {
    name: 'Family Dog Mastery',
    description: 'Reinforces structure and obedience to create the ultimate family-friendly dog.',
    stats: [
      { label: 'Level', value: 'Mastery' },
      { label: 'Format', value: 'Family' },
    ],
  },
  {
    name: 'Rescue Dog Rehab',
    description:
      'A structured rehabilitation program focused on trust-building, confidence exercises, and socialization to help your dog feel secure in their new environment.',
    stats: [
      { label: 'Focus', value: 'Trust' },
      { label: 'Approach', value: 'Gradual' },
    ],
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
                  video
                  className="aspect-video w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border transition-colors duration-300 group-hover:ring-primary/50"
                />
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

              <dl className="mt-7 flex divide-x divide-border border-t border-border pt-5">
                {program.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1.5 pr-10 pl-6 first:pl-0">
                    <dt className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {stat.label}
                    </dt>
                    <dd className="font-heading text-xl font-bold uppercase tracking-wide text-primary">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
