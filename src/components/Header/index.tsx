import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between py-4">
      <figure className="relative h-[70px] w-[70px]">
        <Image src="/logo.svg" alt="logo" fill />
      </figure>

      <nav className="flex list-none items-center gap-6 font-thin">
        <li className="hover:underline">
          <Link href="#">Sobre</Link>
        </li>
        <li className="hover:underline">
          <Link href="#">Projetos</Link>
        </li>
        <li className="hover:underline">
          <Link href="#">Contato</Link>
        </li>
      </nav>
    </header>
  )
}
