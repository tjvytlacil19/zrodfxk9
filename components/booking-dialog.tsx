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
  const [mode, setMode] = useState<'form' | 'call'>('form')
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
      setMode('form')
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
        className="relative z-10 flex max-h-[90dvh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/50"
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
              Thanks — we&apos;ll be in touch in less than 24 hours to schedule your
              evaluation.
            </p>
            <Button
              onClick={onClose}
              className="mt-2 rounded-xl px-8 font-heading text-xs font-semibold uppercase tracking-widest"
            >
              Done
            </Button>
          </div>
        ) : (
          <div className="flex min-h-0 flex-col overflow-y-auto px-6 py-6">
            {/* View toggle — keeps the panel compact by swapping views */}
            <div className="flex gap-1 rounded-xl border border-border bg-background/60 p-1">
              <button
                type="button"
                onClick={() => setMode('form')}
                className={
                  'flex-1 rounded-lg py-2 font-heading text-xs font-semibold uppercase tracking-widest transition-colors ' +
                  (mode === 'form'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground')
                }
              >
                Submit a Form
              </button>
              <button
                type="button"
                onClick={() => setMode('call')}
                className={
                  'flex-1 rounded-lg py-2 font-heading text-xs font-semibold uppercase tracking-widest transition-colors ' +
                  (mode === 'call'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground')
                }
              >
                Call TJ Now
              </button>
            </div>

            {mode === 'call' ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Phone className="size-7" />
                </span>
                <h2
                  id={titleId}
                  className="font-heading text-3xl font-bold uppercase leading-none tracking-tight"
                >
                  Talk to TJ
                </h2>
                <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
                  Prefer to talk it through? Reach TJ directly and we&apos;ll figure out
                  the right program for your dog.
                </p>
                <div className="mt-2 flex w-full flex-col gap-3">
                  <a
                    href="tel:+17195550199"
                    className="flex items-center justify-center gap-2.5 rounded-xl bg-primary py-3.5 font-heading text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <Phone className="size-4" />
                    Call (719) 555-0199
                  </a>
                  <a
                    href="sms:+17195550199"
                    className="flex items-center justify-center gap-2.5 rounded-xl border border-primary/50 py-3.5 font-heading text-sm font-semibold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Call or Text
                  </a>
                </div>
              </div>
            ) : (
              <>
                <h2
                  id={titleId}
                  className="mt-6 font-heading text-3xl font-bold uppercase leading-none tracking-tight"
                >
                  Book an Evaluation
                </h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  Placeholder copy — tell us about your dog and we&apos;ll reach out to set
                  up an assessment.
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
                  Your Name
                </label>
                <input suppressHydrationWarning id="booking-name" name="name" type="text" required placeholder="Jane Doe" className={inputClass} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="booking-email" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input suppressHydrationWarning id="booking-email" name="email" type="email" required placeholder="you@email.com" className={inputClass} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="booking-dog" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Dog&apos;s Name
                </label>
                <input suppressHydrationWarning id="booking-dog" name="dogName" type="text" required placeholder="Ranger" className={inputClass} />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="booking-breed" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Breed
                  </label>
                  <input suppressHydrationWarning id="booking-breed" name="breed" type="text" required placeholder="German Shepherd" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="booking-age" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Age
                  </label>
                  <input suppressHydrationWarning id="booking-age" name="age" type="text" required placeholder="2 yrs" className={inputClass} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="booking-message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  About your dog
                </label>
                <textarea suppressHydrationWarning id="booking-message" name="message" rows={3} placeholder="The behavior you want to address…" className={inputClass} />
              </div>

                  <Button
                    type="submit"
                    className="h-13 w-full rounded-xl py-3 font-heading text-sm font-semibold uppercase tracking-widest"
                  >
                    Submit Request
                  </Button>
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
