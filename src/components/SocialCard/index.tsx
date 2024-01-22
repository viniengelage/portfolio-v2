import { ComponentType } from 'react'
import Link from 'next/link'

import { IconProps } from '@phosphor-icons/react'

interface Props {
  title: string
  icon: ComponentType<IconProps>
  url: string
}

export default function SocialCard({ title, icon: Icon, url }: Props) {
  return (
    <div className="flex items-center gap-4">
      <figure className="rounded-md bg-opaque p-2 text-gray-300">
        <Icon size={30} />
      </figure>
      <Link href={url} target="_blank" className="font-light text-gray-300">
        {title}
      </Link>
    </div>
  )
}
