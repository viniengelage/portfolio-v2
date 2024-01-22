import SkillCard from '../SkillCard'
import IconCard from '../IconCard'
import InfiteHorizontalScroller from '../InfiteHorizontalScroller'

const skillsImages = [
  '/icons/html5.svg',
  '/icons/css3.svg',
  '/icons/javascript.svg',
  '/icons/typescript.svg',
  '/icons/react.svg',
  '/icons/nextjs.svg',
  '/icons/nodejs.svg',
  '/icons/expo.svg',
  '/icons/jestjs.svg',
  '/icons/nestjs.svg',
  '/icons/postgres.svg',
  '/icons/mongodb.svg',
  '/icons/expressjs.svg',
  '/icons/figma.svg',
  '/icons/git.svg',
  '/icons/adonisjs.svg',
]

export default function Skills() {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h2 className="text-3xl font-normal uppercase tracking-wider text-slate-200">
        Skills
      </h2>

      <div className="mt-8 grid w-full grid-cols-3 gap-6">
        <div className="col-span-1 flex flex-col gap-6">
          <SkillCard
            title="Html5"
            value={100}
            icon="/icons/html5.svg"
            className="animate-fade-right animate-delay-300 animate-once"
            delay={500}
          />
          <SkillCard
            title="CSS3"
            value={100}
            icon="/icons/css3.svg"
            className="animate-fade-right animate-delay-500 animate-once"
            delay={700}
          />
          <SkillCard
            title="Javascript"
            value={85}
            icon="/icons/javascript.svg"
            className="animate-fade-right animate-delay-[700ms] animate-once"
            delay={900}
          />
          <SkillCard
            title="Typescript"
            value={70}
            icon="/icons/typescript.svg"
            className="animate-fade-right animate-delay-[900ms] animate-once"
            delay={1200}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <SkillCard
            title="ReactJs"
            value={90}
            icon="/icons/react.svg"
            className="animate-fade-right animate-delay-300 animate-once"
            delay={500}
          />
          <SkillCard
            title="NextJs"
            value={80}
            icon="/icons/nextjs.svg"
            className="animate-fade-right animate-delay-500 animate-once"
            delay={700}
          />
          <SkillCard
            title="React Native"
            value={65}
            icon="/icons/react.svg"
            className="animate-fade-right animate-delay-[700ms] animate-once"
            delay={900}
          />
          <SkillCard
            title="Tailwindcss"
            value={50}
            icon="/icons/tailwindcss.svg"
            className="animate-fade-right animate-delay-[900ms] animate-once"
            delay={1200}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <SkillCard
            title="NodeJs"
            value={80}
            icon="/icons/nodejs.svg"
            className="animate-fade-right animate-delay-300 animate-once"
            delay={500}
          />
          <SkillCard
            title="Expo"
            value={70}
            icon="/icons/expo.svg"
            className="animate-fade-right animate-delay-500 animate-once"
            delay={700}
          />
          <SkillCard
            title="NestJs"
            value={60}
            icon="/icons/nestjs.svg"
            className="animate-fade-right animate-delay-[700ms] animate-once"
            delay={900}
          />
          <SkillCard
            title="Jest"
            value={60}
            icon="/icons/jestjs.svg"
            className="animate-fade-right animate-delay-[900ms] animate-once"
            delay={1200}
          />
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4">
        <InfiteHorizontalScroller duration={400}>
          {skillsImages.map((item, index) => (
            <IconCard key={index} url={item} />
          ))}
        </InfiteHorizontalScroller>

        <InfiteHorizontalScroller direction="left" duration={400}>
          {skillsImages.map((item, index) => (
            <IconCard key={index} url={item} />
          ))}
        </InfiteHorizontalScroller>
      </div>
    </section>
  )
}
