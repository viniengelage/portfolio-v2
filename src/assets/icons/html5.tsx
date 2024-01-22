import { SVGProps } from 'react'

export default function Html5Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="currentColor"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2.258.5 4.76 28.523l11.224 3.1 11.255-3.096L29.742.5H2.258ZM24.54 7.135l-.157 1.793-.07.822H11.149l.314 3.5H24l-.084.868-.808 9.03-.06.567L16 25.652l-.008.005-7.045-1.855L8.47 18.5h3.454l.245 2.73 3.821 1.02H16v-.137l3.839-.968.4-4.395H8.316L7.47 7.22l-.083-.97h17.235l-.082.885Z"
      />
    </svg>
  )
}
