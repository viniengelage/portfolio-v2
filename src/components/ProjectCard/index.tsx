import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  description: string
  logo: string
  url: string
  className?: string
}

export default function ProjectCard({
  description,
  logo,
  url,
  className,
}: Props) {
  return (
    <div
      className={classNames(
        'flex animate-fade-down flex-col items-center gap-4 rounded-md bg-opaque p-4',
        className,
      )}
    >
      <figure className="relative h-[40px] w-[120px]">
        <Image src={logo} alt="path-logo" fill />
      </figure>

      <p className="text-sm font-light text-gray-300">{description}</p>

      <div className="mt-2 flex w-full flex-1 items-end">
        <Link
          href={url}
          target="_blank"
          className="flex w-full items-center justify-between text-brand-500 hover:text-brand-800"
        >
          Saiba mais
          <ArrowRight />
        </Link>
      </div>
    </div>
  )
}
