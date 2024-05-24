import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '700' })

export default function Tittle({ children }: any) {
  return (
    <h2
      className={`text-6xl max-md:text-4xl font-black text-center text-balance  ${poppins.className}`}>
      {children}
    </h2>
  )
}
