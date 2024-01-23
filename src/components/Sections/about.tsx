import {
  DribbbleLogo,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

export default function About() {
  return (
    <section className="flex w-full items-center gap-12">
      <div className="flex flex-1 animate-fade-right flex-col gap-4 animate-delay-500 animate-duration-700 animate-once">
        <h2 className="text-4xl font-bold tracking-wider text-brand-500">
          Vinicios Engelage
        </h2>

        <div className="h-1 w-[80px] rounded-lg bg-brand-700" />

        <p className="font-light text-gray-300">
          Sou um profissional graduado em Análise e Desenvolvimento de Sistemas
          e Engenharia de Software, acumulando 4 anos de experiência
          especializada em JavaScript e seu ecossistema, notadamente em
          tecnologias como NodeJs, ReactJs, NextJs, Express e Typescript.
        </p>

        <div className="flex items-center gap-4 text-brand-500">
          <button className="animate-flip-down animate-delay-[1000ms] animate-once hover:text-brand-600">
            <GithubLogo size={32} />
          </button>

          <button className="animate-flip-down animate-delay-[1000ms] animate-once hover:text-brand-600">
            <DribbbleLogo size={32} />
          </button>

          <button className="animate-flip-down animate-delay-[1000ms] animate-once hover:text-brand-600">
            <LinkedinLogo size={32} />
          </button>
        </div>

        <button className="mt-6 w-[160px] rounded-md bg-brand-500 p-4 hover:bg-brand-700">
          Contato
        </button>
      </div>

      <div className="relative flex h-[380px] w-[380px] items-center justify-center overflow-hidden rounded-3xl bg-opaque p-2 shadow-brand-950 drop-shadow-2xl before:absolute before:h-[160%] before:w-[120px] before:animate-rotate before:bg-gradient-to-bl before:from-brand-800 before:to-brand-950 before:content-[''] before:animate-duration-[6s] before:animate-infinite before:animate-ease-linear after:absolute after:inset-2 after:rounded-3xl after:bg-brand-950 after:content-['']">
        <figure className="relative h-full w-full p-4">
          <Image
            src="/profile.png"
            alt="profile-image"
            fill
            className="z-10 rounded-2xl"
          />
        </figure>
      </div>
    </section>
  )
}
