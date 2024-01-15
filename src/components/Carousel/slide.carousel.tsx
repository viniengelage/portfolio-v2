import { ReactNode } from 'react'
import { SwiperSlide } from 'swiper/react'

export default function CarouselSlide({ children }: { children: ReactNode }) {
  return <SwiperSlide>{children}</SwiperSlide>
}
