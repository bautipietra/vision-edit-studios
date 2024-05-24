'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Poppins } from 'next/font/google'
import MobileMenu from './components/MobileMenu'
import OpenMenu from './components/OpenMenu'
import NavLinks from './components/NavLinks'
import ContactButton from './components/ContactButton'
import Banner from './components/Banner'

const poppins = Poppins({ subsets: ['latin'], weight: '700' })

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className='w-full z-50 relative'>
        <Banner></Banner>
        <div className='max-w-7xl pt-8 m-auto px-4'>
          <nav className='flex justify-between items-center'>
            <Link href='/'>
              <h1
                className={`text-4xl font-extrabold text-white ${poppins.className}`}>
                VISION EDIT
              </h1>
            </Link>
            <div className='text-white flex gap-2 font-light text-lg max-lg:hidden'>
              <NavLinks></NavLinks>
            </div>
            <div className='max-lg:hidden'>
              <ContactButton></ContactButton>
            </div>
            <MobileMenu open={open} setOpen={setOpen}></MobileMenu>
          </nav>
        </div>
      </header>
      <OpenMenu open={open} setOpen={setOpen}></OpenMenu>
    </>
  )
}
