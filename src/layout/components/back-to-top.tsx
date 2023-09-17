import cn from 'clsx'
import { ArrowRightIcon } from 'nextra/icons'
import type { ReactElement } from 'react'
import { useEffect, useRef } from 'react'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function BackToTop({ class }: { class?: string }): ReactElement {
  const ref = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    function toggleVisible() {
      const { scrollTop } = document.documentElement
      ref.current?.classList.toggle('nx-opacity-0', scrollTop < 300)
    }

    window.addEventListener('scroll', toggleVisible)
    return () => {
      window.removeEventListener('scroll', toggleVisible)
    }
  }, [])

  return (
    <button
      ref={ref}
      aria-hidden="true"
      onClick={scrollToTop}
      class={cn(
        'nx-flex nx-items-center nx-gap-1.5 nx-transition nx-opacity-0',
        class
      )}
    >
      Scroll to top
      <ArrowRightIcon class="-nx-rotate-90 nx-w-3.5 nx-h-3.5 nx-border nx-rounded-full nx-border-current" />
    </button>
  )
}
