'use client'
import Hamburger from 'hamburger-react'
import React from 'react'

export default function MobileMenu({ open, setOpen }: any) {
  return (
    <div className='lg:hidden'>
      <Hamburger
        color='white'
        toggled={open}
        toggle={setOpen}></Hamburger>
    </div>
  )
}
