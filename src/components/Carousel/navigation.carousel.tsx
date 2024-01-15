import classNames from 'classnames'
import { ReactNode } from 'react'

interface Props {
  className?: string
  children: ReactNode
}

export default function CarouselNavigation({ children, className }: Props) {
  return (
    <nav className={classNames('flex items-center', className)}>{children}</nav>
  )
}
