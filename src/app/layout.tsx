import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import classNames from 'classnames'
import Header from '@/components/Header'

import './globals.css'
import 'swiper/css'

// const epilogue = Epilogue({ subsets: ['latin'] })
const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinicios Engelage',
  description: 'Fullstack Developer',
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
