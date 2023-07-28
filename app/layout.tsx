import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@components/ui/theme-provider'
import { Nav } from './Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-screen flex flex-col gap-4">
            <header>
              <Nav />
            </header>
            <article>{children}</article>
            <footer></footer>
          </main>
        </ThemeProvider>
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
