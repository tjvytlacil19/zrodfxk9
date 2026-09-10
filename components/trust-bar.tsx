'use client'

import { Clock, Phone, MessageSquare } from 'lucide-react'
import { useBooking } from '@/components/booking-dialog'

const PHONE = '(719) 555-0199'
const TEL = 'tel:+17195550199'
const SMS = 'sms:+17195550199'

export function TrustBar() {
  const { open } = useBooking()

  const itemClass =
    'group flex w-full items-center gap-4 px-4 py-8 text-left transition-colors hover:bg-secondary sm:px-6 lg:px-8'

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <button type="button" onClick={open} className={itemClass}>
          <Clock className="size-8 shrink-0 text-primary" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
              Submit A Form
            </p>
            <p className="text-sm text-muted-foreground">Response in under 24 hours</p>
          </div>
        </button>

        <a href={TEL} className={itemClass}>
          <Phone className="size-8 shrink-0 text-primary" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
              Call TJ Now
            </p>
            <p className="text-sm text-muted-foreground">{PHONE}</p>
          </div>
        </a>

        <a href={SMS} className={itemClass}>
          <MessageSquare className="size-8 shrink-0 text-primary" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
              Text TJ Now
            </p>
            <p className="text-sm text-muted-foreground">{PHONE}</p>
          </div>
        </a>
      </div>
    </section>
  )
}
