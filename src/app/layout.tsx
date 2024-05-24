import Nav from '@/containers/Navigation/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Footer from '@/containers/Navigation/Footer'
import { Toaster } from 'react-hot-toast'

const raleway = Raleway({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Visual Edit Studios',
  description: 'Agencia de Edición de Videos'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body
        className={`${raleway.className} overflow-x-hidden relative`}>
        <Toaster></Toaster>
        <Nav></Nav>
        <main className='py-12 max-w-7xl m-auto w-full text-white'>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  )
}
