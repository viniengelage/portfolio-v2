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

        <p className="text-gray-300">
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

      <figure className="relative h-[400px] w-[400px] animate-fade-left animate-delay-300 animate-duration-700 animate-once">
        <Image src="/profile.png" alt="profile-image" fill />
      </figure>
    </section>
  )
}
