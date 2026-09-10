import { cn } from '@/lib/utils'

export function HexMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 115"
      className={cn('h-8 w-8', className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M50 2 96 28.75V86.25L50 113 4 86.25V28.75L50 2Z"
        stroke="currentColor"
        strokeWidth="5"
      />
      <path
        d="M50 34 74 47.5V74.5L50 88 26 74.5V47.5L50 34Z"
        fill="currentColor"
      />
    </svg>
  )
}
