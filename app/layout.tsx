import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@components/ui/theme-provider'
import { Nav } from './Nav'
import { Toaster } from '@components/ui/toaster'

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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

export let metadata: Metadata = {
  title: {
    default: 'Feijoa UI',
    template: `%s - Feijoa UI`,
  },
  description: 'A barebones UI component recipe-kit!',
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'React Server Components',
    'Radix UI',
    'Lucide Icons',
    'shadcn/ui',
  ],
  authors: [
    {
      name: 'Matt Hamlin',
      url: 'https://matthamlin.me',
    },
  ],
  creator: 'Matt Hamlin',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://feijoa-ui.vercel.app',
    title: 'Feijoa UI',
    description: 'A barebones UI component recipe-kit!',
    siteName: 'Feijoa UI',
    images: [
      {
        url: 'https://feijoa-ui.vercel.app/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Feijoa UI: A barebones UI component recipe-kit!',
      },
    ],
    // images: [
    //   {
    //     url: siteConfig.ogImage,
    //     width: 1200,
    //     height: 630,
    //     alt: siteConfig.name,
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feijoa UI',
    description: 'A barebones UI component recipe-kit!',
    images: ['https://feijoa-ui.vercel.app/icon-512.png'],
    // images: [siteConfig.ogImage],
    creator: '@immatthamlin',
  },
  icons: {
    icon: '/favicon.ico',
    // shortcut: '/favicon-16x16.png',
    // apple: '/apple-touch-icon.png',
  },
  manifest: `https://feijoa-ui.vercel.app/site.webmanifest`,
}
