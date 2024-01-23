'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback } from 'react'

export default function Header() {
  const pathname = usePathname()
  const { push } = useRouter()

  const handlePush = useCallback(
    (section: string) => {
      push(`${pathname}?section=${section}`)
    },
    [pathname, push],
  )

  return (
    <header className="flex w-full items-center justify-between py-4">
      <figure className="relative h-[70px] w-[70px]">
        <Image src="/logo.svg" alt="logo" fill />
      </figure>

      <nav className="flex list-none items-center gap-6 font-thin">
        <li>
          <button
            className="hover:underline"
            onClick={() => handlePush('about')}
          >
            Sobre
          </button>
        </li>
        <li>
          <button
            className="hover:underline"
            onClick={() => handlePush('projects')}
          >
            Projetos
          </button>
        </li>
        <li>
          <button
            className="hover:underline"
            onClick={() => handlePush('skills')}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            className="hover:underline"
            onClick={() => handlePush('contact')}
          >
            Contato
          </button>
        </li>
      </nav>
    </header>
  )
}
