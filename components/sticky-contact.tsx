'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useBooking } from '@/components/booking-dialog'

export function StickyContact() {
  const [visible, setVisible] = useState(false)
  const { open } = useBooking()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={open}
      className={cn(
        'group fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-primary px-6 py-4 font-heading text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-lg shadow-black/40 transition-all duration-300',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      Book an Evaluation
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </button>
  )
}
