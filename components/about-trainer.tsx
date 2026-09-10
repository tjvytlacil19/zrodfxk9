import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { ImagePlaceholder } from '@/components/image-placeholder'

const CREDENTIALS = [
  'Certified canine behaviorist, 20+ years',
  'Aggression & bite-case rehabilitation',
  'Off-leash and e-collar proficiency',
  'Working & sport dog development',
]

export function AboutTrainer() {
  return (
    <section id="trainer" className="scroll-mt-16 py-32 lg:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Portrait — hexagon-masked gray placeholder */}
        <div className="relative mx-auto w-full max-w-md">
          <ImagePlaceholder
            label="TJ Vytlacil portrait"
            className="hex-clip relative aspect-square w-full"
          />
        </div>

        <div>
          <SectionHeading index="02" eyebrow="Meet the Trainer" title="The Trainer" />
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CREDENTIALS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <span
                  aria-hidden="true"
                  className="hex-clip-flat mt-1 size-3 shrink-0 bg-primary"
                />
                {item}
              </li>
            ))}
          </ul>

          <Button
            nativeButton={false}
            render={<a href="#trainer" />}
            variant="outline"
            size="lg"
            className="group mt-10 rounded-none border-primary/50 font-heading text-xs font-semibold uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Read Full Bio
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
