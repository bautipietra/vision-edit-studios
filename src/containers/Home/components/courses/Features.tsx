import Tittle from '@/components/Tittle'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FeaturesItems from './FeaturesItems'

export default function Features() {
  return (
    <section>
      <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 relative'>
        <div className='absolute top-0 left-0 shadow-[0_0_500px_80px_rgba(168,85,247)]'></div>
        <div className='absolute bottom-0 right-0 shadow-[0_0_500px_80px_rgba(168,85,247)]'></div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='bg-purple-900/20 p-8 md:p-12 lg:px-16 lg:py-24 rounded-3xl'>
            <div className='mx-auto max-w-xl text-center'>
              <Tittle>
                <span className='text-4xl text-purple-500'>
                  APRENDE A EDITAR COMO UN{' '}
                  <span className='text-purple-500'>PROFESIONAL</span>
                </span>
              </Tittle>

              <p className=' text-white/90 sm:mt-4 block'>
                Aprenderás a dominar herramientas líderes en la
                industria como Adobe Premiere Pro, After Effects, y
                Adobe Podcast, entre otras. Además, te ofrecemos
                videos detallados que muestran cómo editamos proyectos
                reales para nuestros clientes, permitiéndote ver cada
                paso del proceso.
              </p>

              <Tittle>
                <p className='flex items-center gap-2 justify-center my-4'>
                  <span className='text-xl text-gray-400 line-through'>
                    20 USD
                  </span>
                  <span className='text-3xl'>8.99 USD</span>
                </p>
              </Tittle>

              <div className='mt-4 md:mt-8 flex items-center justify-center'>
                <Link
                  href={'https://www.paypal.me/RaDiicK04'}
                  target='_blank'
                  className='text-gray-900 h-14 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2'>
                  <Image
                    src={'/paypal.png'}
                    alt='paypal'
                    width={150}
                    height={40}></Image>
                </Link>
                <Link
                  href={'https://mpago.la/1VGCnT7'}
                  target='_blank'
                  className='text-gray-900 h-14 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2'>
                  <Image
                    src={'/mercadp-pago.webp'}
                    alt='mercado-pago'
                    width={150}
                    height={40}></Image>
                </Link>
              </div>
              <span className='text-gray-500'>
                *Una vez abonado puedes contactarte con nosotros para
                brindarte el acceso
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <FeaturesItems></FeaturesItems>
          </div>
        </div>
      </div>
    </section>
  )
}
