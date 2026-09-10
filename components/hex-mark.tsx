import { cn } from '@/lib/utils'

export function HexMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 88"
      className={cn('h-8 w-8', className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M27 3H73L96 44L73 85H27L4 44L27 3Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  )
}
