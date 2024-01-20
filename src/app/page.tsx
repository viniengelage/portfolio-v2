'use client'

import { useState } from 'react'
import About from '@/components/Sections/about'
import Skills from '@/components/Sections/skills'
import Contact from '@/components/Sections/contact'

import { Carousel } from '@/components/Carousel'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Home() {
  // const swiperRef = useRef<SwiperType>()

  const [selectedIndex, setSelectedState] = useState(0)

  return (
    <div className="2flex h-full w-full flex-col items-center justify-between py-24">
      <Swiper onSlideChange={(swiper) => setSelectedState(swiper.activeIndex)}>
        <SwiperSlide>
          <About />
        </SwiperSlide>

        <SwiperSlide>
          <Skills />
        </SwiperSlide>

        <SwiperSlide>
          <Contact />
        </SwiperSlide>

        <Carousel.Navigation>
          <Carousel.Prev />
          <Carousel.Dots selectedIndex={selectedIndex} />
          <Carousel.Next />
        </Carousel.Navigation>
      </Swiper>
    </div>
  )
}
