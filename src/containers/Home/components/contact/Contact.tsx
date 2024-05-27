'use client'
import Tittle from '@/components/Tittle'
import db from '@/utils/fb'
import { addDoc, collection } from '@firebase/firestore'
import { log } from 'console'
import Link from 'next/link'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'

export default function Contact() {
  const handleChange = (event: any) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    // Validar el formulario antes de enviarlo
    if (!validateForm()) {
      return
    }
    try {
      const date = new Date() // Obtenemos la fecha actual
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}` // Formateamos la fecha como "día/mes/año hora:minutos"
      const data = {
        ...form,
        date: formattedDate,
        id: uuidv4()
      }
      const added = fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
      })

      console.log(added)

      toast.promise(added, {
        loading: 'Enviando mensaje...',
        success: <b>Mensaje enviado</b>,
        error: <b>Error al enviar el mensaje</b>
      })
      setForm({
        name: '',
        email: '',
        message: '',
        phone: '',
        subject: '',
        date: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    subject: '',
    date: ''
  })

  const validateEmail = (email: string) => {
    // Expresión regular para validar el correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validateForm = () => {
    // Validar el nombre
    if (form.name.trim() === '') {
      toast.error('Por favor, ingrese su nombre')
      return false
    }

    // Validar el correo electrónico
    const emailValido = validateEmail(form.email)
    if (!emailValido) {
      toast.error('Por favor, ingrese un correo electrónico válido')
      return false
    }

    // Validar el telefono
    if (form.phone.trim() === '') {
      toast.error('Por favor, ingrese su telefono')
      return false
    }

    // Validar el asunto
    if (form.subject.trim() === '') {
      toast.error('Por favor, ingrese el asunto')
      return false
    }

    // Validar el mensaje
    if (form.message.trim() === '') {
      toast.error('Por favor, ingrese su mensaje')
      return false
    }

    return true
  }
  return (
    <div id='contact'>
      <Tittle>CONTACTO</Tittle>

      <section>
        <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-3'>
            <div className='grid gap-4'>
              <Link
                className='bg-purple-900/20 p-8 rounded-3xl flex flex-col justify-center items-center hover:scale-95 transition-transform'
                href={
                  'https://www.tiktok.com/@vision.editstudios?_t=8mZmdzVkK0M&_r=1'
                }
                target='_blank'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='48'
                  height='48'
                  fill='currentColor'
                  className='bi bi-tiktok'
                  viewBox='0 0 16 16'>
                  <path d='M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z' />
                </svg>
                <Tittle>
                  <span className='text-xl'>@Vision.EditStudios</span>
                </Tittle>
              </Link>
              <Link
                className='bg-purple-900/20 p-8 rounded-3xl flex flex-col justify-center items-center hover:scale-95 transition-transform'
                href={'https://www.instagram.com/vision.editstudios/'}
                target='_blank'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='48'
                  height='48'
                  fill='currentColor'
                  className='bi bi-instagram'
                  viewBox='0 0 16 16'>
                  <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334' />
                </svg>
                <Tittle>
                  <span className='text-xl'>@vision.editstudios</span>
                </Tittle>
              </Link>
              <Link
                className='bg-purple-900/20 p-8 rounded-3xl flex flex-col justify-center items-center hover:scale-95 transition-transform'
                href={'https://wa.me/5492213186368'}
                target='_blank'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='48'
                  height='48'
                  fill='currentColor'
                  className='bi bi-whatsapp'
                  viewBox='0 0 16 16'>
                  <path d='M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232' />
                </svg>
                <Tittle>
                  <span className='text-xl'>+54 9 221 318 6368</span>
                </Tittle>
              </Link>
            </div>

            <div className='rounded-3xl bg-purple-900/20 p-8 shadow-lg md:col-span-2 lg:p-12 relative'>
              <div className='absolute top-1/2 left-0 shadow-[0_0_300px_90px_rgba(168,85,247)]'></div>
              <form
                className='space-y-4 text-black'
                onSubmit={(event) => handleSubmit(event)}>
                <div>
                  <label className='sr-only' htmlFor='name'>
                    Name
                  </label>
                  <input
                    className='w-full rounded-lg border-gray-200 p-3 text-sm'
                    placeholder='Name'
                    type='text'
                    id='name'
                    name='name'
                    value={form.name}
                    onChange={(event) => handleChange(event)}
                  />
                </div>

                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  <div>
                    <label className='sr-only' htmlFor='email'>
                      Email
                    </label>
                    <input
                      className='w-full rounded-lg border-gray-200 p-3 text-sm'
                      placeholder='Email address'
                      type='email'
                      id='email'
                      name='email'
                      value={form.email}
                      onChange={(event) => handleChange(event)}
                    />
                  </div>

                  <div>
                    <label className='sr-only' htmlFor='phone'>
                      Phone
                    </label>
                    <input
                      className='w-full rounded-lg border-gray-200 p-3 text-sm'
                      placeholder='Phone Number'
                      type='tel'
                      id='phone'
                      name='phone'
                      value={form.phone}
                      onChange={(event) => handleChange(event)}
                    />
                  </div>
                </div>
                <p className='text-white'>Seleccione un asunto:</p>
                <div className='grid grid-cols-1 gap-4 text-center sm:grid-cols-3'>
                  <div>
                    <label
                      htmlFor='Option1'
                      className='block w-full cursor-pointer rounded-lg border border-gray-200 p-3  hover:bg-gray-50/10 has-[:checked]:border-black has-[:checked]:bg-black text-white'
                      tabIndex={0}>
                      <input
                        className='sr-only'
                        id='Option1'
                        type='radio'
                        tabIndex={-1}
                        name='subject'
                        value={form.subject}
                        onChange={(event) =>
                          setForm({ ...form, subject: 'Curso' })
                        }
                      />

                      <span className='text-sm'> Curso </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor='Option2'
                      className='block w-full cursor-pointer rounded-lg border border-gray-200 p-3  hover:bg-gray-50/10 has-[:checked]:border-black has-[:checked]:bg-black text-white'
                      tabIndex={0}>
                      <input
                        className='sr-only'
                        id='Option2'
                        type='radio'
                        tabIndex={-1}
                        name='subject'
                        value={form.subject}
                        onChange={(event) =>
                          setForm({ ...form, subject: 'Servicio' })
                        }
                      />

                      <span className='text-sm'> Servicio </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor='Option3'
                      className='block w-full cursor-pointer rounded-lg border border-gray-200 p-3  hover:bg-gray-50/10 has-[:checked]:border-black has-[:checked]:bg-black text-white'
                      tabIndex={0}>
                      <input
                        className='sr-only'
                        id='Option3'
                        type='radio'
                        tabIndex={-1}
                        name='subject'
                        value={form.subject}
                        onChange={(event) =>
                          setForm({ ...form, subject: 'Otro' })
                        }
                      />

                      <span className='text-sm'> Otro </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className='sr-only' htmlFor='message'>
                    Message
                  </label>

                  <textarea
                    className='w-full rounded-lg border-gray-200 p-3 text-sm'
                    placeholder='Message'
                    rows={8}
                    id='message'
                    name='message'
                    value={form.message}
                    onChange={(event) =>
                      handleChange(event)
                    }></textarea>
                </div>

                <div className='mt-4'>
                  <button
                    type='submit'
                    className='inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto'>
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
