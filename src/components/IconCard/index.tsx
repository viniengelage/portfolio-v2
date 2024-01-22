import Image from 'next/image'
import { ComponentType, SVGProps } from 'react'

interface Props {
  url?: string
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  color?: string
}

export default function IconCard({ url, icon: Icon, color }: Props) {
  return (
    <button className="flex flex-col items-center gap-4 rounded-md bg-opaque p-3">
      {url ? (
        <figure className="relative h-7 w-7">
          <Image src={url} alt="icon-card-image" fill />
        </figure>
      ) : null}
      {Icon ? <Icon width={28} height={28} className="text-brand-900" /> : null}
    </button>
  )
}
