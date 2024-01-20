import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

export default function ProjectCard() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-md bg-opaque p-4">
      <figure className="relative h-[40px] w-[120px]">
        <Image src="/path-logo.svg" alt="path-logo" fill />
      </figure>

      <p className="font-light">
        Lorem ipsum dolor sit amet consectetur. Diam et justo ridiculus mauris
        massa turpis ultrices viverra. Dignissim sed enim consectetur massa
        nullam.
      </p>

      <button className="flex w-full items-center justify-between text-brand-500 hover:text-brand-800">
        Saiba
        <ArrowRight />
      </button>
    </div>
  )
}
