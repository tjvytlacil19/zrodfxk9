import { SectionHeading } from '@/components/section-heading'
import { ImagePlaceholder } from '@/components/image-placeholder'

export function Facility() {
  return (
    <section id="facility" className="scroll-mt-16 py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center">
            <SectionHeading index="04" eyebrow="The Ranch" title="The Ground" />
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Our purpose-built
              facility gives every dog space to train, decompress, and generalize new
              behavior across real-world environments.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat duis aute irure dolor.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
              {[
                ['15', 'Acre ranch'],
                ['Climate', 'Controlled kennels'],
                ['Daily', 'Structured sessions'],
                ['On-Site', 'Live-in trainers'],
              ].map(([stat, label]) => (
                <div key={label} className="bg-card p-5">
                  <dt className="font-heading text-2xl font-bold uppercase text-primary">
                    {stat}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Photo grid — neutral gray placeholders */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3">
            <ImagePlaceholder label="Ranch wide shot" className="col-span-2 aspect-[16/9]" />
            <ImagePlaceholder label="Training field" className="aspect-square" />
            <ImagePlaceholder label="Kennel facility" className="aspect-square" />
          </div>
        </div>
      </div>
    </section>
  )
}
