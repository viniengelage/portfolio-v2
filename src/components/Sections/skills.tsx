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

const skills = [
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
            icon={Html5Icon}
            className="animate-fade-right animate-delay-300 animate-once"
            delay={500}
          />
          <SkillCard
            title="CSS3"
            value={100}
            icon={Css3Icon}
            className="animate-fade-right animate-delay-500 animate-once"
            delay={700}
          />
          <SkillCard
            title="Javascript"
            value={85}
            icon={JavascriptIcon}
            className="animate-fade-right animate-delay-[700ms] animate-once"
            delay={900}
          />
          <SkillCard
            title="Typescript"
            value={70}
            icon={TypescriptIcon}
            className="animate-fade-right animate-delay-[900ms] animate-once"
            delay={1200}
          />
        </div>

        <div className="col-span-1 flex flex-col gap-6">
          <SkillCard
            title="ReactJs"
            value={90}
            icon={ReactIcon}
            className="animate-fade-right animate-delay-300 animate-once"
            delay={500}
          />
          <SkillCard
            title="NextJs"
            value={80}
            icon={NextjsIcon}
            className="animate-fade-right animate-delay-500 animate-once"
            delay={700}
          />
          <SkillCard
            title="React Native"
            value={65}
            icon={ReactIcon}
            className="animate-fade-right animate-delay-[700ms] animate-once"
            delay={900}
          />
          <SkillCard
            title="Tailwindcss"
            value={50}
            icon={TailwindcssIcon}
            className="animate-fade-right animate-delay-[900ms] animate-once"
            delay={1200}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <SkillCard
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
          />
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4">
        <InfiteHorizontalScroller duration={400}>
          {skills.map((item, index) => (
            <IconCard key={index} icon={item} />
          ))}
        </InfiteHorizontalScroller>

        <InfiteHorizontalScroller direction="left" duration={400}>
          {skills.map((item, index) => (
            <IconCard key={index} icon={item} />
          ))}
        </InfiteHorizontalScroller>
      </div>
    </section>
  )
}
