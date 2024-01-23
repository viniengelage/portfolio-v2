import ProjectCard from '../ProjectCard'

export default function Projects() {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h2 className="animate-fade-down text-3xl font-normal uppercase tracking-wider text-slate-200 animate-delay-100 animate-duration-500 animate-once">
        Projetos
      </h2>

      <div className="mt-8 grid grid-cols-3 grid-rows-2 gap-4">
        <ProjectCard className="animate-fade-down animate-delay-[400ms] animate-duration-500 animate-once" />
        <ProjectCard className="animate-fade-down animate-delay-[600ms] animate-duration-500 animate-once" />
        <ProjectCard className="animate-fade-down animate-delay-[800ms] animate-duration-500 animate-once" />
        <ProjectCard className="animate-fade-down animate-delay-[400ms] animate-duration-500 animate-once" />
        <ProjectCard className="animate-fade-down animate-delay-[600ms] animate-duration-500 animate-once" />
        <ProjectCard className="animate-fade-down animate-delay-[800ms] animate-duration-500 animate-once" />
      </div>
    </section>
  )
}
