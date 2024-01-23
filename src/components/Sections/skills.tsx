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
import classNames from 'classnames'

interface SkillProps {
  name: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  yearsOfXp: number
  percentageOfXp: number
  initialDelay: number
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
        initialDelay: 500,
      },
      {
        name: 'Css3',
        icon: Css3Icon,
        yearsOfXp: 5,
        percentageOfXp: 90,
        animationDelay: 500,
        initialDelay: 700,
      },
      {
        name: 'Javascript',
        icon: JavascriptIcon,
        yearsOfXp: 5,
        percentageOfXp: 90,
        animationDelay: 700,
        initialDelay: 900,
      },
      {
        name: 'Typescript',
        icon: JavascriptIcon,
        yearsOfXp: 4,
        percentageOfXp: 80,
        animationDelay: 900,
        initialDelay: 1200,
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
        initialDelay: 500,
      },
      {
        name: 'NextJs',
        icon: NextjsIcon,
        yearsOfXp: 3,
        percentageOfXp: 80,
        animationDelay: 500,
        initialDelay: 700,
      },
      {
        name: 'React Native',
        icon: ReactIcon,
        yearsOfXp: 3,
        percentageOfXp: 70,
        animationDelay: 700,
        initialDelay: 900,
      },
      {
        name: 'Tailwindcss',
        icon: TailwindcssIcon,
        yearsOfXp: 1,
        percentageOfXp: 60,
        animationDelay: 900,
        initialDelay: 1200,
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
        initialDelay: 500,
      },
      {
        name: 'Expo',
        icon: ExpoIcon,
        yearsOfXp: 3,
        percentageOfXp: 70,
        animationDelay: 500,
        initialDelay: 700,
      },
      {
        name: 'Jest',
        icon: JestIcon,
        yearsOfXp: 3,
        percentageOfXp: 70,
        animationDelay: 900,
        initialDelay: 1200,
      },
      {
        name: 'Nestjs',
        icon: NestJsIcon,
        yearsOfXp: 2,
        percentageOfXp: 60,
        animationDelay: 700,
        initialDelay: 900,
      },
    ],
    [],
  )

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h2 className="text-3xl font-normal uppercase tracking-wider text-slate-200">
        Skills
      </h2>

      <div className="mt-8 grid w-full grid-cols-3 gap-6">
        <div className="col-span-1 flex flex-col gap-6">
          {basicSkills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.name}
              percentage={skill.percentageOfXp}
              yearsOfXp={skill.yearsOfXp}
              icon={skill.icon}
              className={classNames(
                'animate-fade-right animate-once',
                `animate-delay-[${skill.animationDelay}ms]`,
              )}
              delay={skill.initialDelay}
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
              className={classNames(
                'animate-fade-right animate-once',
                `animate-delay-[${skill.animationDelay}ms]`,
              )}
              delay={skill.initialDelay}
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
              className={classNames(
                'animate-fade-right animate-once',
                `animate-delay-[${skill.animationDelay}ms]`,
              )}
              delay={skill.initialDelay}
            />
          ))}
          {/* <SkillCard
            title="NodeJs"
            value={80}
            icon={NodejsIcon}
            className="animate-fade-right animate-delay-300 animate-once"
            delay={500}
          />
          <SkillCard
            title="Expo"
            value={70}
            icon={ExpoIcon}
            className="animate-fade-right animate-delay-500 animate-once"
            delay={700}
          />
          <SkillCard
            title="NestJs"
            value={60}
            icon={NestJsIcon}
            className="animate-fade-right animate-delay-[700ms] animate-once"
            delay={900}
          />
          <SkillCard
            title="Jest"
            value={60}
            icon={JestIcon}
            className="animate-fade-right animate-delay-[900ms] animate-once"
            delay={1200}
          /> */}
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
