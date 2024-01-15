import { CaretLeft } from '@phosphor-icons/react/dist/ssr'
import { useSwiper } from 'swiper/react'

export default function CarouselPrevButton() {
  const swiper = useSwiper()

  return (
    <button onClick={() => swiper.slidePrev()}>
      <CaretLeft size={24} />
    </button>
  )
}
