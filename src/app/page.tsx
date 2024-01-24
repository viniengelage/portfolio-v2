'use client'

import { useCallback, useEffect, useMemo, useRef } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import About from '@/components/Sections/about'
import Projects from '@/components/Sections/projects'
import Contact from '@/components/Sections/contact'
import Skills from '@/components/Sections/skills'

export default function Home() {
  const swiperRef = useRef<SwiperRef>(null)

  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  const section = params.get('section')

  const sections = useMemo(
    () => ({
      about: 0,
      projects: 1,
      skills: 2,
      contact: 3,
    }),
    [],
  )

  const handleUpdateSlie = useCallback(() => {
    const sectionIndex = Object.entries(sections).find(
      (item) => item[0] === section,
    )

    swiperRef.current?.swiper.enable()
    swiperRef.current?.swiper.slideTo(sectionIndex ? sectionIndex[1] : 0)
    swiperRef.current?.swiper.disable()
  }, [section, sections])

  const handleNextSlide = useCallback(() => {
    const currentSlide = swiperRef.current?.swiper.activeIndex || 0

    const isLastSlide = swiperRef.current?.swiper.isEnd

    const slide = Object.entries(sections).find(
      (item) => item[1] === currentSlide + 1,
    )

    const slideSection = isLastSlide ? 'about' : slide ? slide[0] : 'about'

    router.push(`${pathname}?section=${slideSection}`)
  }, [sections, pathname, router])

  const handlePrevSlide = useCallback(() => {
    const currentSlide = swiperRef.current?.swiper.activeIndex || 0

    const isFirstSlide = swiperRef.current?.swiper.isBeginning

    const slide = Object.entries(sections).find(
      (item) => item[1] === currentSlide - 1,
    )

    const slideSection = isFirstSlide ? 'contact' : slide ? slide[0] : 'contact'

    router.push(`${pathname}?section=${slideSection}`)
  }, [sections, pathname, router])

  useEffect(() => {
    if (section) {
      handleUpdateSlie()
    }
  }, [section, sections, handleUpdateSlie])

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center pb-20">
      <div className="relative hidden h-full w-full flex-col items-center justify-center md:flex">
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
          className="fixed bottom-20 left-20 text-gray-300 hover:text-gray-500"
          onClick={handlePrevSlide}
        >
          <CaretLeft size={32} />
        </button>

        <p className="fixed bottom-6 text-xs text-gray-500">
          Crafted with ❤️ by Vinicios Engelage
        </p>

        <button
          className="fixed bottom-20 right-20 text-gray-300 hover:text-gray-500"
          onClick={handleNextSlide}
        >
          <CaretRight size={32} />
        </button>
      </div>

      <div className="flex w-full flex-col gap-10 py-10 sm:hidden">
        <About />
        <Projects />
        <Skills />
        <Contact />
        <p className="text-center text-xs text-gray-500">
          Crafted with ❤️ by Vinicios Engelage
        </p>
      </div>
    </div>
  )
}
