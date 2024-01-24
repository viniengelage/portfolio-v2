import { ComponentType } from 'react'
import Link from 'next/link'

import { IconProps } from '@phosphor-icons/react'
import classNames from 'classnames'

interface Props {
  title: string
  icon: ComponentType<IconProps>
  url: string
  className?: string
}

export default function SocialCard({
  title,
  icon: Icon,
  url,
  className,
}: Props) {
  return (
    <div className={classNames('flex items-center gap-4', className)}>
      <Link
        href={url}
        target="_blank"
        className="font-light text-gray-300 hover:text-brand-700"
      >
        {title}
      </Link>

      <div className="relative flex items-center justify-center overflow-hidden rounded-md bg-opaque text-brand-800 ">
        <figure className="z-10 flex h-full w-full p-2">
          <Icon size={30} weight="light" />
        </figure>
      </div>
    </div>
  )
}
