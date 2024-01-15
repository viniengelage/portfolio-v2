import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import { useSwiper } from 'swiper/react'

export default function CarouselNextButton() {
  const swiper = useSwiper()

  return (
    <button onClick={() => swiper.slideNext()}>
      <CaretRight size={24} />
    </button>
  )
}
