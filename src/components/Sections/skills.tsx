import {
  Html5Original,
  NestjsPlain,
  NextjsLine,
  NodejsOriginal,
  ReactOriginal,
  TypescriptOriginal,
} from 'devicons-react'
import IconCard from '../IconCard'
import ProjectCard from '../ProjectCard'

export default function Skills() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-normal uppercase tracking-wider text-slate-200">
        Projetos
      </h2>

      <div className="grid grid-cols-3 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <h2 className="text-3xl font-normal uppercase tracking-wider text-slate-200">
        Skills
      </h2>

      <div className="grid grid-cols-3 gap-4">
        <IconCard icon={Html5Original} title="HTML5" />
        <IconCard icon={ReactOriginal} title="ReactJS" />
        <IconCard icon={NextjsLine} title="NextJS" color="white" />
        <IconCard icon={NodejsOriginal} title="NodeJS" />
        <IconCard icon={TypescriptOriginal} title="Typescript" />
        <IconCard icon={NestjsPlain} title="NestJS" />
      </div>
    </section>
  )
}
