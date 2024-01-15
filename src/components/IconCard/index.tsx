import { ComponentType } from 'react'

interface IconProps extends React.SVGProps<SVGElement> {
  size?: number | string
  color?: string
}

interface Props {
  title: string
  icon: ComponentType<IconProps>
  color?: string
}

export default function IconCard({ title, icon: Icon, color }: Props) {
  return (
    <button className="bg-opaque flex items-center gap-2 rounded-md p-4 ">
      <Icon size={24} color={color} />
      <p className="text-slate-300">{title}</p>
    </button>
  )
}
