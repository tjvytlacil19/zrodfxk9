'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useBooking } from '@/components/booking-dialog'

export function CtaBand() {
  const { open } = useBooking()
  return (
    <section className="w-full bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-16">
        <div>
          <h2 className="text-balance font-heading text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:text-4xl lg:text-5xl">
            Not sure what your dog needs?
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80">
            Tell us about your dog and we&apos;ll point you to the right program — no
            pressure, no guesswork.
          </p>
        </div>
        <Button
          onClick={open}
          size="lg"
          variant="secondary"
          className="group h-14 shrink-0 rounded-xl bg-background px-8 font-heading text-sm font-semibold uppercase tracking-widest text-foreground hover:bg-background/90"
        >
          Get a Recommendation
          <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  )
}
