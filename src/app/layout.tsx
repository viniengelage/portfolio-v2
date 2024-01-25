import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import classNames from 'classnames'
import Header from '@/components/Header'

import './globals.css'
import 'swiper/css'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinicios Engelage',
  description: 'Fullstack Developer',
  openGraph: {
    title: 'Vinicios Engelage',
    description:
      'Graduado em Análise e Desenvolvimento de Sistemas e Engenharia de Software, entusiasta de tecnologia, experiência do usuário e design de interfaces, estou há mais de 4 anos ajudando a construir sistemas que geram valor para empresas e melhoram a vida do cliente final.',
    siteName: 'Vinicios Engelage',
    url: 'https://viniengelage.com',
    images: [
      {
        url: 'https://viniengelage.com/og-small-png',
        width: 256,
        height: 256,
      },
      {
        url: 'https://viniengelage.com/og-png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://viniengelage.com/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'Open graph',
      },
    ],
    locale: 'pr_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          sora.className,
          'h-auto w-screen items-center text-white sm:h-screen',
        )}
      >
        <main className="mx-auto flex h-full w-full max-w-[90%] flex-col items-center sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <Header />
          <div className="h-full w-full flex-1">{children}</div>
        </main>
      </body>
    </html>
  )
}
