import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'
import ContactButton from './ContactButton'

export default function OpenMenu({ open, setOpen }: any) {
  return (
    <div
      className={`w-full min-h-52 pt-28 pb-12 absolute z-40 bg-purple-950 left-0 top-0 flex flex-col items-center justify-center gap-4 lg:hidden transition-transform duration-300 ${
        open ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className='text-white grid gap-2 font-light text-lg text-center'>
        <NavLinks setOpen={setOpen}></NavLinks>
      </div>
      <ContactButton setOpen={setOpen}></ContactButton>
    </div>
  )
}
