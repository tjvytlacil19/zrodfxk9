import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HexMark } from '@/components/hex-mark'

const NAV = [
  { label: 'Programs', href: '#programs' },
  { label: 'Trainer', href: '#trainer' },
  { label: 'Facility', href: '#facility' },
  { label: 'Reviews', href: '#testimonials' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2.5">
          <HexMark className="h-7 w-7 text-primary" />
          <span className="font-heading text-lg font-bold uppercase tracking-[0.18em] text-foreground">
            ZRODFX <span className="text-primary">K9</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          nativeButton={false}
          render={<a href="#contact" />}
          className="rounded-lg font-heading text-xs font-semibold uppercase tracking-widest"
        >
          Apply Now
        </Button>
      </div>
    </header>
  )
}
