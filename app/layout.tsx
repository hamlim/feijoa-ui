import { Metadata } from 'next'
import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="min-h-screen">
          <header></header>
          <section>{children}</section>
          <footer></footer>
        </main>
      </body>
    </html>
  )
}

export let metadata: Metadata = {
  title: 'Feijoa UI',
  icons: [
    {
      url: '/favicon.ico',
      rel: 'shortcut icon',
    },
  ],
}
