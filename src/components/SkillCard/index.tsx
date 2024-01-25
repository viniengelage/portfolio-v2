import classNames from 'classnames'
import {
  ComponentType,
  HTMLAttributes,
  SVGProps,
  useEffect,
  useState,
} from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
  percentage: number
  yearsOfXp: number
  icon: ComponentType<SVGProps<SVGSVGElement>>
  delay?: number
  className?: string
}

export default function SkillCard({
  title,
  icon: Icon,
  percentage,
  yearsOfXp,
  className,
  ...props
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <div
      className={classNames('flex w-full items-center gap-4', className)}
      {...props}
    >
      <div className="rounded-md bg-opaque p-3">
        <figure>
          <Icon width={32} height={32} className="text-brand-500" />
        </figure>
      </div>
      <div className="bg-gradient flex w-full flex-col items-start gap-2">
        <div className="flex w-full items-center gap-2">
          <p className="text-gray-200">{title}</p>
          <span className="text-xs text-gray-400">
            ({yearsOfXp} {yearsOfXp > 1 ? 'anos' : 'ano'} de XP)
          </span>
        </div>
        <div className="h-2 w-full rounded-sm bg-opaque">
          <div
            className="h-full rounded-sm bg-gradient-to-r from-brand-700 to-brand-950 transition-all duration-1000"
            style={{ width: isOpen ? `${percentage}%` : '0%' }}
          />
        </div>
      </div>
    </div>
  )
}
