'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from "@/app/lib/utils";

type Props = {
  /** 높이(px) */
  height?: number
  /** z-index */
  zIndex?: number
  /** 컨테이너 클래스 */
  className?: string
  /** 채워지는 바 클래스 */
  barClassName?: string
}

export function ScrollProgressBar({
                                    height = 3,
                                    zIndex = 60,
                                    className,
                                    barClassName,
                                  }: Props) {
  const rafRef = useRef<number | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const scrollHeight = doc.scrollHeight || document.body.scrollHeight
      const clientHeight = doc.clientHeight || window.innerHeight

      const max = Math.max(1, scrollHeight - clientHeight)
      const p = Math.min(1, Math.max(0, scrollTop / max))
      setProgress(p)

      rafRef.current = null
    }

    const onScrollOrResize = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      className={cn(
        'fixed left-0 top-0 w-full',
        'bg-transparent',
        className,
      )}
      style={{ height, zIndex }}
      aria-hidden
    >
      <div
        className={cn(
          'h-full origin-left',
          'bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500',
          'shadow-[0_0_18px_rgba(59,130,246,0.35)]',
          'transition-transform duration-150 ease-out',
          barClassName,
        )}
        style={{
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  )
}
