import Nav from '@/containers/Navigation/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Footer from '@/containers/Navigation/Footer'
import { Toaster } from 'react-hot-toast'
import { GoogleAnalytics } from '@next/third-parties/google'
import Head from 'next/head'
import Script from 'next/script'

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
      <Script
        id='fb-pixel'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1464641741092487');
fbq('track', 'PageView');
`
        }}
      />
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
