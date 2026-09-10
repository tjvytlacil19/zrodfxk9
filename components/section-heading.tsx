import { cn } from '@/lib/utils'

export function SectionHeading({
  index,
  eyebrow,
  title,
  className,
}: {
  index: string
  eyebrow: string
  title: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <span className="flex flex-wrap items-center gap-3 font-mono text-sm font-medium tracking-[0.2em] text-primary">
        <span aria-hidden="true">{`[ ${index} ]`}</span>
        <span aria-hidden="true" className="h-px w-8 bg-primary/50" />
        <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          {eyebrow}
        </span>
      </span>
      <h2 className="text-balance font-heading text-5xl font-bold uppercase leading-[0.9] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
        {title}
      </h2>
    </div>
  )
}
