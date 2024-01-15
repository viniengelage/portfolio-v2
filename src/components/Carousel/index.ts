'use client'

import CarouselDots from './dots.carousel'
import CarouselNavigation from './navigation.carousel'
import CarouselNextButton from './nextButton.carousel'
import CarouselPrevButton from './prevButton.carousel'
import CarouselRoot from './root.carousel'
import CarouselSlide from './slide.carousel'

export const Carousel = {
  Root: CarouselRoot,
  Slide: CarouselSlide,
  Navigation: CarouselNavigation,
  Dots: CarouselDots,
  Next: CarouselNextButton,
  Prev: CarouselPrevButton,
}
