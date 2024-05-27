import Link from 'next/link'
import React from 'react'

export default function NavLinks({ setOpen }: any) {
  const links = [
    {
      name: 'Inicio',
      link: '/'
    },
    {
      name: 'Nosotros',
      link: '#about'
    },
    {
      name: 'Cursos',
      link: '#courses'
    },
    {
      name: 'Servicios',
      link: '#services'
    }
  ]

  if (typeof setOpen === 'function') {
    return (
      <>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className='hover:bg-white/10 py-2 px-6 rounded-3xl transition-colors'
            onClick={() => setOpen(false)}>
            {link.name}
          </Link>
        ))}
      </>
    )
  }

  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className='hover:bg-white/10 py-2 px-6 rounded-3xl transition-colors'>
          {link.name}
        </Link>
      ))}
    </>
  )
}
