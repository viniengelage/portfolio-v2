import classNames from 'classnames'
import { useSwiper } from 'swiper/react'

interface Props {
  selectedIndex: number
}

export default function CarouselDots({ selectedIndex }: Props) {
  const swiper = useSwiper()

  return (
    <div className="flex w-full items-center justify-center gap-2">
      {swiper.slides.map((_, index) => (
        <button
          key={index}
          onClick={() => {
            swiper.slideTo(index)
          }}
          className={classNames(
            'h-2 w-2 rounded-full',
            selectedIndex === index ? 'bg-brand-500' : 'bg-white',
          )}
        />
      ))}
    </div>
  )
}
