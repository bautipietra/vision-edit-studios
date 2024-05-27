import Tittle from '@/components/Tittle'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section id='about'>
      <Tittle>SOBRE NOSOTROS</Tittle>
      <div>
        <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 items-stretch'>
            <div className='bg-purple-900/20 p-8 md:p-12 lg:px-16 rounded-3xl'>
              <div className='mx-auto max-w-xl text-center'>
                <Tittle>
                  <span className='text-4xl text-purple-500'>
                    AGENCIA DE EDICIÓN
                  </span>
                </Tittle>

                <p className=' text-white/90 sm:mt-4 block'>
                  En Vision Edit Studios, con más de 2 años de
                  experiencia, transformamos tus ideas en arte visual.
                  Nuestro equipo de profesionales en edición de video
                  y foto se dedica a crear estilos únicos y ayudarte a
                  destacar en el mundo digital. Ofrecemos servicios
                  personalizados y un curso exclusivo para dominar el
                  diseño gráfico. ¡Mejora tu perfil con nosotros
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1  gap-4'>
              <Image
                src='/about.jpg'
                alt='about'
                width={500}
                height={500}
                className='max-md:max-h-96 w-full object-cover h-full rounded-3xl drop-shadow-[0_-35px_100px_rgba(168,85,247,0.25)]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
