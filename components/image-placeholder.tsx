import { cn } from '@/lib/utils'
import { HexMark } from '@/components/hex-mark'

export function ImagePlaceholder({
  className,
  label = 'Image',
}: {
  className?: string
  label?: string
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
      <HexMark className="relative size-10 text-white/15" />
    </div>
  )
}
