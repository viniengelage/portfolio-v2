import { useMemo } from 'react'
import ProjectCard, { SmallProjectCard } from '../ProjectCard'
import classNames from 'classnames'
import Image from 'next/image'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

interface ProjectProps {
  title: string
  description: string
  logo: string
  url: string
  animationDelay: number
}

export default function Projects() {
  const projects = useMemo<ProjectProps[]>(
    () => [
      {
        title: 'Path',
        url: 'https://path.viniengelage.com/',
        logo: '/project-icons/logo-path.svg',
        description:
          'PATH é um projeto acadêmico, desenvolvido por alunos de engenharia de software e psicologia, cujo objetivo é ensinar o que é empatia, e como pode ser desenvolvida nas pessoas.',
        animationDelay: 500,
      },

      {
        title: 'Servicefy',
        url: 'https://servicefy.framer.website/',
        logo: '/project-icons/logo-servicefy.svg',
        description:
          'O Servicefy é uma plataforma de agendamento e prestação de serviços, focado em oferecer a prestadores uma vitrine para seus produtos e serviços e ao cliente um lugar seguro para encontrar o que precisa.',
        animationDelay: 600,
      },
      {
        title: 'Cashtracking',
        url: 'https://app.cashtracking.viniengelage.com/',
        logo: '/project-icons/logo-cashtracking.svg',
        description:
          'Cashtracking é uma plataforma de gestão financeira pessoal. É um ecossistema projetado para simplificar o registro de receitas e despesas, oferecendo suporte abrangente para gastos com cartão de crédito.',
        animationDelay: 700,
      },
    ],
    [],
  )

  const smallProjects = useMemo<ProjectProps[]>(
    () => [
      {
        title: 'MyMoneyIn',
        url: 'https://github.com/viniengelage/mymoneyin',
        logo: '/project-icons/logo-mymoneyin.svg',
        description:
          'Este projeto é uma aplicação em React Native para conversão de moedas, criado para aprofundar estudos em aplicações nativas hibridas com React Native e Expo.',
        animationDelay: 900,
      },
      // {
      //   title: 'MyMoneyIn',
      //   url: 'https://github.com/viniengelage/mymoneyin',
      //   logo: '/project-icons/logo-mymoneyin.svg',
      //   description:
      //     'MyMoneyIn é uma aplicação mobile para conversão de moedas criada em ReactNative, desenvolvido para fins de estudos e coisas aprendidas durante o tempo, então é um projeto quem sempre estará sendo atualizado.',
      //   animationDelay: 1000,
      // },
    ],
    [],
  )

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h2 className="animate-fade-down text-3xl font-normal uppercase tracking-wider text-slate-200 animate-delay-100 animate-duration-500 animate-once">
        Projetos
      </h2>

      <div className="mt-8 grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            description={project.description}
            logo={project.logo}
            url={project.url}
            className={classNames(
              'animate-fade-down animate-duration-500 animate-once',
              `animate-delay-[${project.animationDelay}ms]`,
            )}
          />
        ))}
      </div>

      <div className="mt-8 grid w-[60%] grid-cols-1 gap-4">
        {smallProjects.map((project, index) => (
          <SmallProjectCard
            key={index}
            title={project.title}
            description={project.description}
            logo={project.logo}
            url={project.url}
            className={classNames(
              'animate-fade-down animate-duration-500 animate-once',
              `animate-delay-[${project.animationDelay}ms]`,
            )}
          />
        ))}
      </div>
    </section>
  )
}
