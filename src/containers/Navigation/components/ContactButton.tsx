import Link from 'next/link'
import React from 'react'

export default function ContactButton({ setOpen }: any) {
  if (typeof setOpen === 'function') {
    return (
      <Link
        href='#contact'
        className='text-white bg-white/10 text-lg  hover:text-black hover:bg-white py-2 px-8 rounded-3xl transition-colors'
        onClick={() => setOpen(false)}>
        Contacto
      </Link>
    )
  }

  return (
    <Link
      href='#contact'
      className='text-white bg-white/10 text-lg  hover:text-black hover:bg-white py-2 px-8 rounded-3xl transition-colors'>
      Contacto
    </Link>
  )
}
