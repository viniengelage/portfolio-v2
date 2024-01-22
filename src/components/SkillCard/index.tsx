import classNames from 'classnames'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Props {
  title: string
  icon: string
  value: number
  delay?: number
  className?: string
}

export default function SkillCard({
  title,
  icon,
  value,
  delay,
  className,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsOpen(true), delay || 500)
  }, [delay])

  return (
    <div className={classNames('flex w-full items-center gap-4', className)}>
      <div className="rounded-md bg-opaque p-3">
        <figure className="relative h-8 w-8">
          <Image src={icon} alt="skill-icon" fill objectFit="contain" />
        </figure>
      </div>
      <div className="bg-gradient flex w-full flex-col items-start gap-2">
        <div className="flex w-full items-center gap-2">
          <p className="text-gray-200">{title}</p>
          <span className="text-xs text-gray-400">(1 ano de XP)</span>
        </div>
        <div className="h-2 w-full bg-opaque">
          <div
            className="h-full bg-gradient-to-r from-brand-700 to-brand-950 transition-all duration-1000"
            style={{ width: isOpen ? `${value}%` : '0%' }}
          />
        </div>
      </div>
    </div>
  )
}
