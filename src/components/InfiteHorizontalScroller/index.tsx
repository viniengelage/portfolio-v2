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
    const scrollers = document.querySelectorAll('#scroller')

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation()
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute('data-animated', 'true')

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector('#scroller_inner')

        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children)

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true)

            // duplicatedItem.setAttribute('aria-hidden', true)

            scrollerInner.appendChild(duplicatedItem)
          })
        }
      })
    }
  }, [])

  return (
    <div id="scroller" className="mask-gradient w-[700px]">
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
