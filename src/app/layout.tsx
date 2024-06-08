import Nav from '@/containers/Navigation/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Footer from '@/containers/Navigation/Footer'
import { Toaster } from 'react-hot-toast'
import { GoogleAnalytics } from '@next/third-parties/google'

const raleway = Raleway({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Vision Edit Studios',
  description:
    'En Vision Edit Studios, con más de 2 años de experiencia, transformamos tus ideas en arte visual. Nuestro equipo de profesionales en edición de video y foto se dedica a crear estilos únicos y ayudarte a destacar en el mundo digital. Ofrecemos servicios personalizados y un curso exclusivo para dominar el diseño gráfico. ¡Mejora tu perfil con nosotros!'
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
      <GoogleAnalytics gaId='G-JVEQ71PWZ5' />
    </html>
  )
}
