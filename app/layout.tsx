import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dristi Shakya - Web Developer Portfolio',
  description: 'Explore the portfolio of Dristi Shakya, a passionate web developer creating amazing digital experiences with modern technologies.',
  keywords: ['Dristi Shakya', 'Web Developer', 'Frontend Developer', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Dristi Shakya' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dristishakya.com',
    title: 'Dristi Shakya - Web Developer Portfolio',
    description: 'Explore the portfolio of Dristi Shakya, a passionate web developer creating amazing digital experiences with modern technologies.',
    images: [
      {
        url: 'https://dristishakya.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dristi Shakya - Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dristi Shakya - Web Developer Portfolio',
    description: 'Explore the portfolio of Dristi Shakya, a passionate web developer creating amazing digital experiences with modern technologies.',
    images: ['https://dristishakya.com/og-image.jpg'],
    creator: '@dristishakya',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}