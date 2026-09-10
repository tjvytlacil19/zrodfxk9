'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'

const DETAILS = [
  { icon: MapPin, label: 'Ranch', value: '1234 Working Dog Road, Colorado Springs, CO 80906' },
  { icon: Phone, label: 'Phone', value: '(719) 555-0199' },
  { icon: Mail, label: 'Email', value: 'train@zrodfxk9.com' },
]

const inputClass =
  'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="scroll-mt-16 py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading index="05" eyebrow="Get Started" title="Apply" />
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tell us about your
              dog and goals. We review every application personally.
            </p>

            <ul className="mt-10 flex flex-col gap-6">
              {DETAILS.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center border border-primary/40 text-primary">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-heading text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-0.5 text-foreground">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-border bg-card p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center">
                <span className="flex size-14 items-center justify-center bg-primary text-primary-foreground">
                  <Check className="size-7" />
                </span>
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground">
                  Application Received
                </h3>
                <p className="max-w-xs text-sm text-muted-foreground">
                  Placeholder confirmation copy. We&apos;ll be in touch within one
                  business day.
                </p>
              </div>
            ) : (
              <form
                suppressHydrationWarning
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Full Name
                    </label>
                    <input suppressHydrationWarning id="name" name="name" type="text" required placeholder="Jane Doe" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Phone
                    </label>
                    <input suppressHydrationWarning id="phone" name="phone" type="tel" placeholder="(719) 555-0000" className={inputClass} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input suppressHydrationWarning id="email" name="email" type="email" required placeholder="you@email.com" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Tell Us About Your Dog
                  </label>
                  <textarea suppressHydrationWarning id="message" name="message" rows={4} placeholder="Breed, age, and the behavior you want to address…" className={inputClass} />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-13 w-full rounded-xl py-3 font-heading text-sm font-semibold uppercase tracking-widest"
                >
                  Submit Application
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
