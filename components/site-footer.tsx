import { HexMark } from '@/components/hex-mark'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <HexMark className="h-6 w-6 text-primary" />
          <span className="font-heading text-base font-bold uppercase tracking-[0.18em] text-foreground">
            ZRODFX <span className="text-primary">K9</span>
          </span>
        </div>
        <p className="text-center text-sm text-muted-foreground sm:text-right">
          &copy; {new Date().getFullYear()} ZRODFX K9 &middot; Colorado Springs, Colorado
        </p>
      </div>
    </footer>
  )
}
