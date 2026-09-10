import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string
  title: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <span className="flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-primary">
        <span aria-hidden="true" className="h-px w-8 bg-primary" />
        {eyebrow}
      </span>
      <h2 className="text-balance font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  )
}
