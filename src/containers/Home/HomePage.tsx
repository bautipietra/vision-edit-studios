import React from 'react'
import Hero from './components/hero/Hero'
import Courses from './components/courses/Courses'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import About from './components/about/About'

export default function HomePage() {
  return (
    <div className='grid gap-20'>
      <Hero></Hero>
      <About></About>
      <Courses></Courses>
      <Services></Services>
      <Contact></Contact>
    </div>
  )
}
