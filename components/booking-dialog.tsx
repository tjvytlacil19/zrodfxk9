'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { X, Phone, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type BookingContextValue = {
  open: () => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <BookingContext.Provider value={{ open }}>
      {children}
      <BookingDialog isOpen={isOpen} onClose={close} />
    </BookingContext.Provider>
  )
}

function BookingDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  const [phoneCall, setPhoneCall] = useState(false)
  const titleId = useId()
  const panelRef = useRef<HTMLDivElement>(null)

  // Close on Escape and lock body scroll while open
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, onClose])

  // Reset internal state shortly after close so it's fresh next open
  useEffect(() => {
    if (isOpen) return
    const t = setTimeout(() => {
      setSubmitted(false)
      setPhoneCall(false)
    }, 250)
    return () => clearTimeout(t)
  }, [isOpen])

  if (!isOpen) return null

  const inputClass =
    'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary'

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/50"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            ZRODFX K9
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 px-6 py-16 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Check className="size-7" />
            </span>
            <h2 id={titleId} className="font-heading text-2xl font-bold uppercase tracking-tight">
              Request Received
            </h2>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Thanks — we&apos;ll be in touch shortly to schedule your evaluation
              {phoneCall ? ' with a phone call' : ''}.
            </p>
            <Button
              onClick={onClose}
              className="mt-2 rounded-xl px-8 font-heading text-xs font-semibold uppercase tracking-widest"
            >
              Done
            </Button>
          </div>
        ) : (
          <div className="px-6 py-6">
            <h2
              id={titleId}
              className="font-heading text-3xl font-bold uppercase leading-none tracking-tight"
            >
              Book an Evaluation
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              Placeholder copy — tell us about your dog and we&apos;ll reach out to set up
              an assessment.
            </p>

            <form
              suppressHydrationWarning
              className="mt-6 flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="booking-name" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input suppressHydrationWarning id="booking-name" name="name" type="text" required placeholder="Jane Doe" className={inputClass} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="booking-email" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input suppressHydrationWarning id="booking-email" name="email" type="email" required placeholder="you@email.com" className={inputClass} />
              </div>

              {/* Phone call toggle */}
              <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background/60 px-4 py-3.5">
                <span className="flex items-center gap-2.5">
                  <Phone className="size-4 text-primary" />
                  <span className="text-sm text-foreground">Request a phone call</span>
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={phoneCall}
                  aria-label="Request a phone call"
                  onClick={() => setPhoneCall((v) => !v)}
                  className={cn(
                    'relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card',
                    phoneCall ? 'bg-primary' : 'bg-secondary',
                  )}
                >
                  <span
                    className={cn(
                      'inline-block size-5 transform rounded-full bg-background shadow transition-transform',
                      phoneCall ? 'translate-x-[22px]' : 'translate-x-0.5',
                    )}
                  />
                </button>
              </div>

              {/* Phone number field reveals when the toggle is on */}
              {phoneCall && (
                <div className="flex flex-col gap-2">
                  <label htmlFor="booking-phone" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Phone
                  </label>
                  <input suppressHydrationWarning id="booking-phone" name="phone" type="tel" required placeholder="(719) 555-0000" className={inputClass} />
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label htmlFor="booking-message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  About your dog
                </label>
                <textarea suppressHydrationWarning id="booking-message" name="message" rows={3} placeholder="Breed, age, and the behavior you want to address…" className={inputClass} />
              </div>

              <Button
                type="submit"
                className="h-13 w-full rounded-xl py-3 font-heading text-sm font-semibold uppercase tracking-widest"
              >
                Submit Request
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
