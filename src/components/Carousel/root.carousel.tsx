import { ReactNode } from 'react'
import { Swiper } from 'swiper/react'

export default function CarouselRoot({ children }: { children: ReactNode }) {
  return <Swiper className="flex w-full items-center">{children}</Swiper>
}
