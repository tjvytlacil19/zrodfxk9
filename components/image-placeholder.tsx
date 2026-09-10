import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { HexMark } from '@/components/hex-mark'

export function ImagePlaceholder({
  className,
  label = 'Image',
  video = false,
}: {
  className?: string
  label?: string
  video?: boolean
}) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className={cn(
        'group/ph relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900',
        className,
      )}
    >
      {video ? (
        <span className="relative flex size-16 items-center justify-center rounded-full border border-white/25 bg-black/30 backdrop-blur-sm transition-transform duration-300 group-hover/ph:scale-110 group-hover/ph:border-primary/70">
          <Play
            className="size-6 translate-x-0.5 text-white transition-colors group-hover/ph:text-primary"
            fill="currentColor"
          />
        </span>
      ) : (
        <HexMark className="relative size-10 text-white/15" />
      )}
    </div>
  )
}
