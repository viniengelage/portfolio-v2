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
  description: 'Generated by create next app',
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
          'h-screen w-screen items-center text-white',
        )}
      >
        <main className="mx-auto flex h-full w-full max-w-screen-lg flex-col items-center">
          <Header />
          <div className="h-full w-full flex-1">{children}</div>
        </main>
      </body>
    </html>
  )
}
