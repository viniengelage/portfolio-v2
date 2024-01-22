'use client'

import { useRef } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'

import About from '@/components/Sections/about'
import Projects from '@/components/Sections/projects'
import Contact from '@/components/Sections/contact'
import Skills from '@/components/Sections/skills'

export default function Home() {
  const swiperRef = useRef<SwiperRef>(null)

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center pb-20">
      <Swiper
        ref={swiperRef}
        className="flex w-full"
        loop
        onAfterInit={(swiper) => swiper.disable()}
      >
        <SwiperSlide>
          {({ isActive }) => (isActive ? <About /> : null)}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (isActive ? <Projects /> : null)}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (isActive ? <Skills /> : null)}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (isActive ? <Contact /> : null)}
        </SwiperSlide>
      </Swiper>

      <button
        className="fixed bottom-20 right-20 text-gray-300 hover:text-gray-500"
        onClick={() => {
          swiperRef.current?.swiper.enable()
          swiperRef.current?.swiper.slideNext()
          swiperRef.current?.swiper.disable()
        }}
      >
        <CaretRight size={32} />
      </button>

      <button
        className="fixed bottom-20 left-20 text-gray-300 hover:text-gray-500"
        onClick={() => {
          swiperRef.current?.swiper.enable()
          swiperRef.current?.swiper.slidePrev()
          swiperRef.current?.swiper.disable()
        }}
      >
        <CaretLeft size={32} />
      </button>
    </div>
  )
}
