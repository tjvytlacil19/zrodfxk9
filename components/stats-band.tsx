'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const STATS = [
  { value: 20, suffix: '+', label: 'Years Behind the Leash' },
  { value: 2400, suffix: '+', label: 'Dogs Rehabilitated' },
  { value: 94, suffix: '%', label: 'Off-Leash Reliability' },
  { value: 15, suffix: '', label: 'Acre Working Ranch' },
]

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutExpo for a decelerating, cinematic count
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])

  return value
}

function Stat({ value, suffix, label, active }: (typeof STATS)[number] & { active: boolean }) {
  const count = useCountUp(value, active)
  return (
    <div className="flex flex-col gap-3 px-4 py-10 sm:px-8 lg:py-16">
      <span className="font-heading text-6xl font-bold uppercase tracking-tight text-foreground sm:text-7xl lg:text-8xl">
        <span className="text-primary">{count.toLocaleString()}</span>
        {suffix}
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function StatsBand() {
  const ref = useRef<HTMLElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-4 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(i % 2 === 1 && 'sm:border-t-0', 'flex')}
          >
            <Stat {...stat} active={active} />
          </div>
        ))}
      </div>
    </section>
  )
}
