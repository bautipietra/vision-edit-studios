import Tittle from '@/components/Tittle'
import Link from 'next/link'
import React from 'react'

export default function Services() {
  return (
    <section id='services'>
      <Tittle>SERVICIOS DE EDICIÓN</Tittle>
      <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='bg-purple-900/20 p-8 md:p-12 lg:px-16 lg:py-24 rounded-3xl'>
            <div className='mx-auto max-w-xl text-center'>
              <Tittle>
                <span className='text-4xl text-purple-500'>
                  GENERA MÁS{' '}
                  <span className='text-purple-500'>IMPACTO</span> CON
                  TU CONTENIDO
                </span>
              </Tittle>

              <p className=' text-white/90 sm:mt-4 block'>
                Crea contenido mas profesional y dinámico con nuestros
                servicios, generando atraer a mas publico interesado
                en su contenido, para eso utilizamos distintas
                estrategias, entre ellas, edición de video, creación
                de portadas, guiones, etc. Como ya mas de 50 personas
                escalaron su perfil gracias a nosotros <br></br>
                CONTACTANOS PARA MAS INFORMACIÓN!
              </p>

              <div className='mt-4 md:mt-8'>
                <Link
                  href={'#contact'}
                  className=' text-black m-auto text-lg bg-white rounded-lg px-8 py-2 w-fit drop-shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:bg-purple-500 hover:text-white transition-colors'>
                  Solicitar
                </Link>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <video
              src='/video1.mp4'
              controls
              className='max-md:max-h-96 w-full object-cover h-full rounded-3xl drop-shadow-[0_-35px_100px_rgba(168,85,247,0.25)]'
            />

            <video
              src='/video2.mp4'
              controls
              className='max-md:max-h-96 w-full object-cover h-full rounded-3xl drop-shadow-[0_-35px_100px_rgba(168,85,247,0.25)]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
