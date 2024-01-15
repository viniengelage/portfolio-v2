import {
  DribbbleLogo,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

export default function About() {
  return (
    <section className="flex w-full items-center gap-12">
      <div className="animate-fade-right animate-once animate-duration-700 flex flex-1 flex-col gap-4">
        <h2 className="text-4xl font-bold tracking-wider text-brand-500">
          Vinicios Engelage
        </h2>
        <p className="text-slate-200">
          Sou um profissional graduado em Análise e Desenvolvimento de Sistemas
          e Engenharia de Software, acumulando 4 anos de experiência
          especializada em JavaScript e seu ecossistema, notadamente em
          tecnologias como NodeJs, ReactJs, NextJs, Express e Typescript.
        </p>

        <div className="flex items-center gap-4 text-brand-500">
          <button className="hover:text-brand-600">
            <GithubLogo size={32} />
          </button>

          <button className="hover:text-brand-600">
            <DribbbleLogo size={32} />
          </button>

          <button className="hover:text-brand-600">
            <LinkedinLogo size={32} />
          </button>
        </div>

        <button className="mt-6 w-[160px] rounded-md bg-brand-500 p-4 hover:bg-brand-700">
          Contato
        </button>
      </div>

      <figure className="animate-fade-left animate-once animate-duration-700 relative h-[400px] w-[400px]">
        <Image src="/profile.png" alt="profile-image" fill />
      </figure>
    </section>
  )
}
