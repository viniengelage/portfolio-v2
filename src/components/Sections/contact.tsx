import { At, GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import SocialCard from '../SocialCard'

export default function Contact() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-normal uppercase tracking-wider text-slate-200">
        Contato
      </h2>

      <div className="mt-6 flex w-full items-start justify-center gap-12">
        <form className="flex w-full max-w-[400px] flex-col gap-4">
          <input
            type="text"
            placeholder="E-mail"
            className="rounded-md border-none bg-opaque p-4 outline-none placeholder:text-gray-400"
          />

          <input
            type="text"
            placeholder="Nome"
            className="rounded-md border-none bg-opaque p-4 outline-none placeholder:text-gray-400"
          />

          <textarea
            placeholder="Mensagem"
            className="resize-none appearance-none rounded-md border-none bg-opaque p-4 outline-none placeholder:text-gray-400"
          />

          <button
            type="submit"
            className="rounded-md bg-brand-500 p-4 hover:to-brand-800"
          >
            Enviar
          </button>
        </form>

        <div className="flex flex-col gap-4">
          <h4>
            Preencha o formulário ou entre em contato <br /> pelos links abaixo
          </h4>

          <SocialCard
            title="linkedin.com/viniengelage"
            icon={LinkedinLogo}
            url="https://www.linkedin.com/in/viniengelage"
          />

          <SocialCard
            title="github.com/viniengelage"
            icon={GithubLogo}
            url="https://www.github.com/viniengelage"
          />

          <SocialCard
            title="viniciosvalensuela@gmail.com"
            icon={GithubLogo}
            url="mailto:viniciosvalensuela@gmail.com"
          />
        </div>
      </div>
    </section>
  )
}
