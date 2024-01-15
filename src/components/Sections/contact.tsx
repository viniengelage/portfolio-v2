import { At, GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function Contact() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-normal uppercase tracking-wider text-slate-200">
        Contato
      </h2>

      <div className="mt-4 flex w-full items-start justify-center gap-12">
        <form className="flex w-full max-w-[400px] flex-col gap-4">
          <input
            type="text"
            placeholder="E-mail"
            className="bg-opaque rounded-md border-none p-4 outline-none placeholder:text-gray-400"
          />

          <input
            type="text"
            placeholder="Nome"
            className="bg-opaque rounded-md border-none p-4 outline-none placeholder:text-gray-400"
          />

          <textarea
            placeholder="Mensagem"
            className="bg-opaque resize-none appearance-none rounded-md border-none p-4 outline-none placeholder:text-gray-400"
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

          <div className="flex items-center">
            <figure className="bg-opaque rounded-md p-2 text-gray-300">
              <LinkedinLogo size={30} />
            </figure>
            <Link
              href="https://www.linkedin.com/in/viniengelage/"
              target="_blank"
              className="font-light text-gray-300"
            >
              linkedin.com/viniengelage
            </Link>
          </div>

          <div className="flex items-center">
            <figure className="bg-opaque rounded-md p-2 text-gray-300">
              <GithubLogo size={30} />
            </figure>
            <Link
              href="https://www.github.com/viniengelage"
              target="_blank"
              className="font-light text-gray-300"
            >
              github.com/viniengelage
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <figure className="bg-opaque rounded-md p-2 text-gray-300">
              <At size={30} />
            </figure>
            <Link
              href="mailto:viniciosvalensuela@gmail.com"
              target="_blank"
              className="font-light text-gray-300"
            >
              contato@viniengelage.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
