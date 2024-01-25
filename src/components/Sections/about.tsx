import {
  // DribbbleLogo,
  GithubLogo,
  LinkedinLogo,
  MediumLogo,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

import TypewriterComponent from 'typewriter-effect'

export default function About() {
  return (
    <section className="flex w-full flex-col items-center gap-12 sm:flex-row">
      <div className="flex flex-1 animate-fade-right flex-col items-center gap-4 animate-delay-500 animate-duration-700 animate-once sm:items-start">
        <h2 className="inline-block bg-gradient-to-r from-brand-700 to-brand-800 bg-clip-text text-center text-4xl font-bold tracking-wider text-transparent sm:text-left">
          Vinicios Engelage
        </h2>

        <TypewriterComponent
          options={{
            strings: ['Frontend Developer', 'UX/UI Designer'],
            delay: 100,
            autoStart: true,
            loop: true,
            cursorClassName: 'text-2xl text-brand-950',
            wrapperClassName:
              'text-2xl font-medium tracking-wider text-gray-300',
          }}
        />

        <div className="h-1 w-[60px] rounded-lg bg-gradient-to-r from-brand-800 to-brand-950" />

        <p className="text-justify text-base font-light text-gray-300">
          Graduado em Análise e Desenvolvimento de Sistemas e Engenharia de
          Software, entusiasta de tecnologia, experiência do usuário e design de
          interfaces, estou há mais de 4 anos ajudando a construir sistemas que
          geram valor para empresas e melhoram a vida do cliente final.
        </p>

        <div className="flex items-center gap-4 text-brand-700">
          <Link
            href="https://github.com/viniengelage"
            target="_blank"
            className="animate-flip-down animate-delay-[1000ms] animate-once hover:text-brand-800"
          >
            <GithubLogo size={32} weight="light" />
          </Link>

          {/* 
          <Link
            href="https://dribbble.com/viniengelage"
            target="_blank"
            className="animate-flip-down animate-delay-[1000ms] animate-once hover:text-brand-600"
          >
            <DribbbleLogo size={32} weight="light" />
          </Link> */}

          <Link
            href="https://linkedin.com/in/viniengelage/"
            target="_blank"
            className="animate-flip-down animate-delay-[1000ms] animate-once hover:text-brand-600"
          >
            <LinkedinLogo size={32} weight="light" />
          </Link>

          <Link
            href="https://viniengelage.medium.com/"
            target="_blank"
            className="animate-flip-down animate-delay-[1000ms] animate-once hover:text-brand-600"
          >
            <MediumLogo size={32} weight="light" />
          </Link>
        </div>

        <Link href="mailto:viniciosvalensuela@gmail.com" target="_blank">
          <button className="mt-6 w-[160px] rounded-md bg-gradient-to-r from-brand-800 to-brand-950 p-4 hover:from-brand-950 ">
            Contato
          </button>
        </Link>
      </div>

      <div className="relative flex h-[300px] w-[300px] animate-fade-left items-center justify-center overflow-hidden rounded-2xl bg-transparent p-1 shadow-brand-950 drop-shadow-2xl animate-delay-300 animate-once before:absolute before:h-[160%] before:w-[120px] before:animate-rotate before:bg-gradient-to-bl before:from-brand-800 before:to-brand-950 before:content-[''] before:animate-duration-[6s] before:animate-infinite before:animate-ease-linear after:absolute after:inset-2 after:rounded-3xl after:bg-brand-950 after:content-[''] sm:h-[380px] sm:w-[380px]">
        <div className="relative h-full w-full p-4">
          <Image
            src="/profile.png"
            alt="profile-image"
            fill
            className="z-10 rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}
