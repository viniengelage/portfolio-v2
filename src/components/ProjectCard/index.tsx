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

interface SmallProjectCardProps extends Props {
  title: string
}

export function SmallProjectCard({
  title,
  description,
  logo,
  url,
  className,
}: SmallProjectCardProps) {
  return (
    <div
      className={classNames(
        'flex animate-fade-down items-center gap-4 rounded-md bg-opaque p-4',
        className,
      )}
    >
      <Image width={100} height={100} src={logo} alt="project-logo" />

      <div className="flex h-full flex-1 flex-col">
        <p>{title}</p>
        <span className="mt-2 flex-1 text-xs text-gray-300">{description}</span>

        <Link
          href={url}
          target="_blank"
          className="mt-4 flex items-center justify-between text-xs text-brand-500"
        >
          Saiba mais
          <ArrowRight size={16} weight="light" />
        </Link>
      </div>
    </div>
  )
}
