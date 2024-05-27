'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'
import { useCountUp } from 'react-countup'
import AnimatedCard from '@sl-codeblaster/react-3d-animated-card'
import Tittle from '@/components/Tittle'

const poppins = Poppins({ subsets: ['latin'], weight: '700' })

export default function Hero() {
  useCountUp({
    ref: 'counter1',
    end: 50,
    start: 0,
    delay: 0.5
  })
  useCountUp({
    ref: 'counter2',
    end: 60,
    start: 0,
    delay: 0.5
  })
  return (
    <div className='grid w-full justify-center gap-8 md:gap-24 px-4'>
      <div className='grid gap-6 max-w-xl text-center justify-center items-center m-auto mt-12'>
        <h1
          className={`text-6xl max-md:text-4xl font-black text-center text-balance  ${poppins.className}`}>
          <span className='text-purple-500'>EDICIÓN</span> DE VÍDEOS{' '}
          <span className='border-b-4 border-purple-500'>
            PROFESIONAL
          </span>
        </h1>
        <p className='text-lg'>
          +<span id='counter1'>0</span> clientes que escalaron su
          perfil gracias a nuestra edición y +
          <span id='counter2'>0</span> personas ya adquirieron su
          curso de edición
        </p>
        <Link
          href={'#courses'}
          className={`${poppins.className} text-black m-auto text-lg font-normal bg-white rounded-3xl px-8 py-2 w-fit drop-shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:bg-purple-500 hover:text-white transition-colors`}>
          Comienza a editar
        </Link>
      </div>
      <AnimatedCard
        config={{
          rotation: 30,
          transition: {
            duration: 0.5,
            timingMode: 'ease'
          },
          transform: {
            figureIcon: {
              rotation: 40,
              translateZ: 160
            },
            titleTranslateZ: 140,
            bodyTextTranslateZ: 100,
            buttonTranslateZ: 80
          }
        }}>
        <Image
          src={'/hero.jpeg'}
          alt='Hero image'
          width={1100}
          height={700}
          className='w-full drop-shadow-[0_-35px_100px_rgba(168,85,247,0.25)] overflow-hidden rounded-3xl'></Image>
      </AnimatedCard>
    </div>
  )
}
