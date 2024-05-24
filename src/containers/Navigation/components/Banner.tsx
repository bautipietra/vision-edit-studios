import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
    <div className='bg-purple-500 text-white font-medium text-lg text-center py-1 max-md:hidden'>
      Aprovecha el <b>55% OFF</b> descuento en nuestros{' '}
      <Link href={'#cursos'} className='underline'>
        cursos de edición
      </Link>
      .
    </div>
  )
}
