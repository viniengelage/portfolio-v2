import Image from 'next/image'

interface Props {
  url: string
  color?: string
}

export default function IconCard({ url }: Props) {
  return (
    <button className="flex flex-col items-center gap-4 rounded-md bg-opaque p-3">
      <figure className="relative h-7 w-7">
        <Image src={url} alt="icon-card-image" fill />
      </figure>
    </button>
  )
}
