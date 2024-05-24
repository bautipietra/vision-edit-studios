import React from 'react'

export default function FeaturesItems() {
  return (
    <>
      <div className='rounded-xl  p-4 bg-purple-900/20'>
        <span className='inline-block rounded-lg bg-purple-500 p-3 text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-camera-reels-fill'
            viewBox='0 0 16 16'>
            <path d='M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0' />
            <path d='M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6' />
            <path d='M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z' />
          </svg>
        </span>
        <h2 className='mt-2 font-bold'>Clases Grabadas</h2>
        <p className=' sm:mt-1 block sm:text-sm '>
          Descubre el arte de la edición con nuestras clases
          pregrabadas, impartidas por nuestros expertos editores.
        </p>
      </div>

      <div className='rounded-xl  p-4 bg-purple-900/20'>
        <span className='inline-block rounded-lg bg-purple-500 p-3 text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-images'
            viewBox='0 0 16 16'>
            <path d='M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
            <path d='M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z' />
          </svg>
        </span>
        <h2 className='mt-2 font-bold'>Recursos Exclusivos</h2>
        <p className=' sm:mt-1 block sm:text-sm '>
          Accede a una amplia gama de recursos diseñados para
          enriquecer tus proyectos. Nuestro material incluye fondos,
          overlays, efectos de sonido, emojis, iconos y más.
        </p>
      </div>

      <div className='rounded-xl  p-4 bg-purple-900/20'>
        <span className='inline-block rounded-lg bg-purple-500 p-3 text-white'>
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
            <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'></path>
          </svg>
        </span>
        <h2 className='mt-2 font-bold'>Asesoría Personalizada</h2>
        <p className=' sm:mt-1 block sm:text-sm '>
          Al inscribirte, recibirás el contacto de WhatsApp de uno de
          nuestros editores, quien estará disponible para ayudarte
          durante tu aprendizaje.
        </p>
      </div>

      <div className='rounded-xl  p-4 bg-purple-900/20'>
        <span className='inline-block rounded-lg bg-purple-500 p-3 text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-cart-check-fill'
            viewBox='0 0 16 16'>
            <path d='M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708' />
          </svg>
        </span>
        <h2 className='mt-2 font-bold'>Pago Único</h2>
        <p className=' sm:mt-1 block sm:text-sm '>
          Aprovecha nuestro curso completo con un acceso de por vida
          con un único pago inicial de $9000 ARS.
        </p>
      </div>

      <div className='rounded-xl  p-4 bg-purple-900/20'>
        <span className='inline-block rounded-lg bg-purple-500 p-3 text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-hourglass-split'
            viewBox='0 0 16 16'>
            <path d='M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z' />
          </svg>
        </span>
        <h2 className='mt-2 font-bold'>Duración Flexible</h2>
        <p className=' sm:mt-1 block sm:text-sm '>
          El curso no tiene una duración fija. Disfruta del acceso
          continuo a todas las clases, recursos y asesorías sin límite
          de tiempo.
        </p>
      </div>

      <div className='rounded-xl  p-4 bg-purple-900/20'>
        <span className='inline-block rounded-lg bg-purple-500 p-3 text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-film'
            viewBox='0 0 16 16'>
            <path d='M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z' />
          </svg>
        </span>
        <h2 className='mt-2 font-bold'>Práctica</h2>
        <p className=' sm:mt-1 block sm:text-sm '>
          Pon en práctica tus habilidades con videos en crudo que te
          proporcionamos para experimentar, mejorar y aplicar lo
          aprendido en las clases.
        </p>
      </div>
    </>
  )
}
