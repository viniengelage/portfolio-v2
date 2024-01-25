import { ComponentType, SVGProps, useMemo } from 'react'

import SkillCard from '../SkillCard'
import IconCard from '../IconCard'
import InfiteHorizontalScroller from '../InfiteHorizontalScroller'
import Html5Icon from '@/assets/icons/html5'
import Css3Icon from '@/assets/icons/css3'
import JavascriptIcon from '@/assets/icons/javascript'
import TypescriptIcon from '@/assets/icons/typescript'
import ReactIcon from '@/assets/icons/react'
import NextjsIcon from '@/assets/icons/nextjs'
import TailwindcssIcon from '@/assets/icons/tailwindcss'
import NodejsIcon from '@/assets/icons/node'
import ExpoIcon from '@/assets/icons/expo'
import JestIcon from '@/assets/icons/jest'
import NestJsIcon from '@/assets/icons/nest'
import PostgresIcon from '@/assets/icons/postgres'
import MongodbIcon from '@/assets/icons/mongodb'
import ExpressJsIcon from '@/assets/icons/expressjs'
import FigmaIcon from '@/assets/icons/figma'
import GitIcon from '@/assets/icons/git'
import AdonisJsIcon from '@/assets/icons/adonisjs'

interface SkillProps {
  name: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  yearsOfXp: number
  percentageOfXp: number
  animationDelay: number
}

const skillIcons = [
  Html5Icon,
  Css3Icon,
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  NextjsIcon,
  TailwindcssIcon,
  NodejsIcon,
  ExpoIcon,
  JestIcon,
  NestJsIcon,
  PostgresIcon,
  MongodbIcon,
  ExpressJsIcon,
  FigmaIcon,
  GitIcon,
  AdonisJsIcon,
]

export default function Skills() {
  const basicSkills = useMemo<SkillProps[]>(
    () => [
      {
        name: 'Html5',
        icon: Html5Icon,
        yearsOfXp: 5,
        percentageOfXp: 90,
        animationDelay: 300,
      },
      {
        name: 'Css3',
        icon: Css3Icon,
        yearsOfXp: 5,
        percentageOfXp: 90,
        animationDelay: 400,
      },
      {
        name: 'Javascript',
        icon: JavascriptIcon,
        yearsOfXp: 5,
        percentageOfXp: 90,
        animationDelay: 500,
      },
      {
        name: 'Typescript',
        icon: TypescriptIcon,
        yearsOfXp: 4,
        percentageOfXp: 80,
        animationDelay: 600,
      },
    ],
    [],
  )

  const frontendSkills = useMemo<SkillProps[]>(
    () => [
      {
        name: 'ReactJs',
        icon: ReactIcon,
        yearsOfXp: 4,
        percentageOfXp: 90,
        animationDelay: 300,
      },
      {
        name: 'NextJs',
        icon: NextjsIcon,
        yearsOfXp: 3,
        percentageOfXp: 80,
        animationDelay: 400,
      },
      {
        name: 'React Native',
        icon: ReactIcon,
        yearsOfXp: 3,
        percentageOfXp: 70,
        animationDelay: 500,
      },
      {
        name: 'Tailwindcss',
        icon: TailwindcssIcon,
        yearsOfXp: 1,
        percentageOfXp: 60,
        animationDelay: 600,
      },
    ],
    [],
  )

  const backendSkills = useMemo<SkillProps[]>(
    () => [
      {
        name: 'NodeJs',
        icon: NodejsIcon,
        yearsOfXp: 3,
        percentageOfXp: 70,
        animationDelay: 300,
      },
      {
        name: 'Expo',
        icon: ExpoIcon,
        yearsOfXp: 3,
        percentageOfXp: 70,
        animationDelay: 400,
      },
      {
        name: 'Jest',
        icon: JestIcon,
        yearsOfXp: 3,
        percentageOfXp: 70,
        animationDelay: 500,
      },
      {
        name: 'Nestjs',
        icon: NestJsIcon,
        yearsOfXp: 2,
        percentageOfXp: 60,
        animationDelay: 600,
      },
    ],
    [],
  )

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h2 className="text-3xl font-normal uppercase tracking-wider text-slate-200">
        Skills
      </h2>

      <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="col-span-1 flex flex-col gap-6">
          {basicSkills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.name}
              percentage={skill.percentageOfXp}
              yearsOfXp={skill.yearsOfXp}
              icon={skill.icon}
              className="animate-fade-right animate-once"
              style={{
                animationDelay: `${skill.animationDelay}ms`,
              }}
            />
          ))}
        </div>

        <div className="col-span-1 flex flex-col gap-6">
          {frontendSkills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.name}
              percentage={skill.percentageOfXp}
              yearsOfXp={skill.yearsOfXp}
              icon={skill.icon}
              className="animate-fade-right animate-once"
              style={{
                animationDelay: `${skill.animationDelay}ms`,
              }}
            />
          ))}
        </div>

        <div className="col-span-1 flex flex-col gap-6">
          {backendSkills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.name}
              percentage={skill.percentageOfXp}
              yearsOfXp={skill.yearsOfXp}
              icon={skill.icon}
              className="animate-fade-right animate-once"
              style={{
                animationDelay: `${skill.animationDelay}ms`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4">
        <InfiteHorizontalScroller duration={400}>
          {skillIcons.map((item, index) => (
            <IconCard key={index} icon={item} />
          ))}
        </InfiteHorizontalScroller>

        <InfiteHorizontalScroller direction="left" duration={400}>
          {skillIcons.map((item, index) => (
            <IconCard key={index} icon={item} />
          ))}
        </InfiteHorizontalScroller>
      </div>
    </section>
  )
}
