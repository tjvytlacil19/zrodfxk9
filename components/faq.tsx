'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'How long is the board-and-train program?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Most dogs stay on the ranch for four to six weeks depending on their starting point and the behaviors we are addressing.',
  },
  {
    q: 'Do you work with aggressive or reactive dogs?',
    a: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Aggression and reactivity rehabilitation is a core specialty, and every case is assessed individually before intake.',
  },
  {
    q: 'What happens after my dog comes home?',
    a: 'Duis aute irure dolor in reprehenderit in voluptate velit esse. We include handler transfer sessions so the structure and results carry over into your daily life at home.',
  },
  {
    q: 'Where is the ranch located?',
    a: 'Excepteur sint occaecat cupidatat non proident. Our 15-acre facility sits just outside Colorado Springs, Colorado, with climate-controlled kennels and live-in trainers on site.',
  },
  {
    q: 'How do I get started?',
    a: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Submit an application below or call TJ directly, and we will schedule an evaluation to build the right plan.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-16 py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading index="05" eyebrow="Questions" title="FAQ" />
            <p className="mt-6 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. The answers owners
              ask for most before booking an evaluation.
            </p>
          </div>

          <ul className="flex flex-col">
            {FAQS.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={item.q} className="border-b border-border first:border-t">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-heading text-lg font-semibold uppercase tracking-tight text-foreground sm:text-xl">
                      {item.q}
                    </span>
                    <Plus
                      className={cn(
                        'size-5 shrink-0 text-primary transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
