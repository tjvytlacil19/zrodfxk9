'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useBooking } from '@/components/booking-dialog'

export function Hero() {
  const { open } = useBooking()
  return (
    <section id="top" className="relative min-h-svh w-full overflow-hidden">
      {/* Full-width photo background — neutral gray placeholder block */}
      <div
        role="img"
        aria-label="Working dog on the ranch photo placeholder"
        className="absolute inset-0 bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900"
      />

      {/* Darkening overlays for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20"
      />

      {/* Top metadata row */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 pt-28 sm:px-6 lg:px-8">
        <span className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          ZRODFX K9
        </span>
        <span className="hidden font-mono text-xs tracking-[0.2em] text-muted-foreground sm:block">
          [ COLORADO SPRINGS, CO ]
        </span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28">
        <div className="max-w-5xl">
          <h1 className="text-balance font-heading text-6xl font-bold uppercase leading-[0.88] tracking-tight text-foreground sm:text-7xl lg:text-8xl xl:text-[9rem]">
            Serious Dogs.
            <br />
            <span className="text-primary">Serious Results.</span>
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Board-and-train
            rehabilitation for aggression and off-leash reliability on a 15-acre working
            ranch. Placeholder subhead copy goes here for context.
          </p>
          <div className="mt-10">
            <Button
              onClick={open}
              size="lg"
              className="group h-14 rounded-xl px-8 font-heading text-sm font-semibold uppercase tracking-widest"
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
