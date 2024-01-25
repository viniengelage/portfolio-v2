import classNames from 'classnames'
import { ReactNode, useEffect } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
  direction?: 'left' | 'right'
  duration?: number
}

export default function InfiteHorizontalScroller({
  children,
  direction = 'right',
  duration = 100,
}: Props) {
  useEffect(() => {
    const scrollers = document.querySelectorAll<HTMLDivElement>('#scroller')

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation()
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', 'true')

        const scrollerInner =
          scroller.querySelector<HTMLDivElement>('#scroller_inner')

        if (scrollerInner) {
          const scrollerContent = Array.from(
            scrollerInner.children,
          ) as HTMLDivElement[]

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLDivElement

            duplicatedItem.setAttribute('aria-hidden', 'true')

            scrollerInner.appendChild(duplicatedItem)
          })
        }
      })
    }
  }, [])

  return (
    <div id="scroller" className="w-[80%] mask-gradient sm:w-[700px]">
      <div
        id="scroller_inner"
        className={classNames(
          'flex w-max flex-nowrap gap-4 animate-infinite animate-ease-linear',
          direction === 'right'
            ? 'animate-scrollFoward'
            : 'animate-scrollReverse',
        )}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
