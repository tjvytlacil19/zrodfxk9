import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="top" className="relative min-h-svh w-full overflow-hidden">
      {/* Full-width photo background — neutral gray placeholder */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black"
      />
      <div aria-hidden="true" className="honeycomb-bg absolute inset-0 opacity-70" />
      {/* Darkening overlays for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30"
      />

      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 border border-primary/40 px-3 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Colorado Springs, Colorado
          </span>
          <h1 className="text-balance font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            Serious Dogs.
            <br />
            <span className="text-primary">Serious Results.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Board-and-train
            rehabilitation for aggression and off-leash reliability on a 15-acre working
            ranch. Placeholder subhead copy goes here for context.
          </p>
          <div className="mt-10">
            <Button
              nativeButton={false}
              render={<a href="#contact" />}
              size="lg"
              className="group h-14 rounded-none px-8 font-heading text-sm font-semibold uppercase tracking-widest"
            >
              Book an Evaluation
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
