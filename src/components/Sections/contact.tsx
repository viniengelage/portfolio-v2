import {
  At,
  DribbbleLogo,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr'
import SocialCard from '../SocialCard'
import { FormEvent, useCallback, useState } from 'react'
interface CustomElements extends HTMLFormControlsCollection {
  name: HTMLInputElement
  email: HTMLInputElement
  message: HTMLTextAreaElement
}

interface FormData extends HTMLFormElement {
  readonly elements: CustomElements
}

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [submited, setSubmited] = useState(false)

  const handleSubmit = useCallback((event: FormEvent<FormData>) => {
    event.preventDefault()

    setLoading(true)

    const target = event.currentTarget.elements

    const data = {
      email: target.email.value,
      name: target.name.value,
      message: target.message.value,
    }

    fetch('/api/send', {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => {
      setLoading(false)
      setSubmited(true)
    })
  }, [])

  return (
    <section className="flex w-full flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-normal uppercase tracking-wider text-slate-200">
        Contato
      </h2>

      <div className="mt-6 flex w-full items-start justify-center gap-28">
        <form
          className="flex w-full max-w-[420px] flex-col items-start gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            <h3 className="animate-fade-down text-left text-xl font-semibold tracking-wide text-gray-200 animate-delay-300 animate-once">
              Vamos trabalhar em algo juntos?
            </h3>

            <p className="text-gray-201 mt-2 animate-fade-down text-sm animate-delay-[400ms] animate-once">
              Preencha o formulário abaixo para me deixar uma mensagem
            </p>
          </div>

          <div className="h-1 w-[60px] animate-fade-left rounded bg-gradient-to-r from-brand-800 to-brand-950 animate-delay-300 animate-once" />

          <input
            name="email"
            type="email"
            placeholder="E-mail"
            required
            className="w-full animate-fade-left rounded-md border-none bg-opaque p-4 outline-none animate-delay-300 animate-once placeholder:text-gray-400"
          />

          <input
            name="name"
            type="text"
            placeholder="Nome"
            required
            className="w-full animate-fade-left rounded-md border-none bg-opaque p-4 outline-none animate-delay-[400ms] animate-once placeholder:text-gray-400"
          />

          <textarea
            name="message"
            placeholder="Mensagem"
            required
            className="w-full animate-fade-left resize-none appearance-none rounded-md border-none bg-opaque p-4 outline-none animate-delay-[500ms] animate-once placeholder:text-gray-400"
          />

          <button
            type="submit"
            className="w-full animate-fade-left rounded-md bg-gradient-to-r from-brand-800 to-brand-950 p-4 animate-delay-[500ms] animate-once hover:to-brand-800 disabled:bg-opaque"
            disabled={loading || submited}
            aria-disabled={loading || submited}
          >
            {!loading ? (
              submited ? (
                'Mensagem enviada'
              ) : (
                'Enviar'
              )
            ) : (
              <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
            )}
          </button>
        </form>

        <div className="col-span-1 row-span-1 flex flex-col items-end gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="animate-fade-down text-right text-lg font-medium text-gray-200 animate-delay-300 animate-once">
              Me encontre também nas redes socias!
            </h3>

            <p className="animate-fade-down text-right text-sm font-normal text-gray-200 animate-delay-[400ms] animate-once">
              Confira os links abaixo
            </p>
          </div>

          <div className="h-1 w-[60px] animate-fade-right rounded bg-gradient-to-r from-brand-800 to-brand-950 animate-delay-300 animate-once" />

          <SocialCard
            title="linkedin.com/in/viniengelage"
            icon={LinkedinLogo}
            url="https://www.linkedin.com/in/viniengelage"
            className="animate-fade-down animate-delay-300 animate-once"
          />

          <SocialCard
            title="github.com/viniengelage"
            icon={GithubLogo}
            url="https://www.github.com/viniengelage"
            className="animate-fade-down animate-delay-[400ms] animate-once"
          />

          <SocialCard
            title="dribbble.com/viniengelage"
            icon={DribbbleLogo}
            url="https://dribbble.com/viniengelage"
            className="animate-fade-down animate-delay-500 animate-once"
          />

          <SocialCard
            title="viniciosvalensuela@gmail.com"
            icon={At}
            url="mailto:viniciosvalensuela@gmail.com"
            className="animate-fade-down animate-delay-[600ms] animate-once"
          />
        </div>
      </div>
    </section>
  )
}
