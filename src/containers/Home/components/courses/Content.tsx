import React from 'react'

export default function Content() {
  const content = [
    {
      title: 'Módulo 1: Introducción a Premiere Pro',
      description: `
            <ul>
                <li>• Introducción al entorno de trabajo</li>
                <li>• Configuración de un proyecto</li>
                <li>• Interfaz de usuario y personalización del espacio de trabajo</li>
            </ul>`
    },
    {
      title: 'Módulo 2: Importación y organización de medios',
      description: `
            <ul>
                <li>• Importar medios</li>
                <li>• Organizar clips en el panel de proyectos</li>
                <li>• Uso de bins para una mejor organización</li>
            </ul>`
    },
    {
      title: 'Módulo 3: Edición Básica',
      description: `
            <ul>
                <li>• Herramientas de edición básicas</li>
                <li>• Montaje en la línea de tiempo</li>
                <li>• Ajustes de clips (duración, velocidad, transiciones)</li>
            </ul>`
    },
    {
      title: 'Módulo 4: Edición Avanzada',
      description: `
            <ul>
                <li>• Edición multicámara</li>
                <li>• Efectos de vídeo y transiciones avanzadas</li>
                <li>• Edición de audio básica y efectos de sonido</li>
            </ul>`
    },
    {
      title: 'Módulo 5: Color y Exportación',
      description: `
            <ul>
                <li>• Corrección básica de color</li>
                <li>• Uso de LUTs y ajustes preestablecidos</li>
                <li>• Exportación de proyectos para diferentes medios y plataformas</li>
            </ul>`
    },
    {
      title: 'Módulo 6: Introducción a After Effects',
      description: `
            <ul>
                <li>• Introducción al entorno de trabajo</li>
                <li>• Comprender composiciones y capas</li>
                <li>• Animación básica usando keyframes</li>
            </ul>`
    },
    {
      title: 'Módulo 7: Efectos y Animación de Texto',
      description: `
            <ul>
                <li>• Creación y animación de texto</li>
                <li>• Uso de máscaras y capas de ajuste</li>
                <li>• Animaciones preestablecidas y uso de expresiones básicas</li>
            </ul>`
    },
    {
      title: 'Módulo 8: Trabajo con Capas 3D',
      description: `
            <ul>
                <li>• Introducción al espacio 3D</li>
                <li>• Cámaras y luces</li>
                <li>• Animación en 3D</li>
            </ul>`
    },
    {
      title: 'Módulo 9: Efectos Visuales y Composición',
      description: `
            <ul>
                <li>• Técnicas de chroma keying (pantalla verde)</li>
                <li>• Efectos especiales como humo, fuego y explosiones</li>
                <li>• Composición avanzada y técnicas de rotoscopia</li>
            </ul>`
    },
    {
      title: 'Módulo 10: Renderizado y Salida',
      description: `
            <ul>
                <li>• Mejores prácticas de renderizado</li>
                <li>• Formatos de salida y compresión de vídeo</li>
                <li>• Integración con otros softwares de Adobe</li>
            </ul>`
    }
  ]
  return (
    <div className='space-y-4 mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8'>
      {content.map((item, index) => (
        <details className='group rounded-lg bg-purple-900/20 p-6 [&_summary::-webkit-details-marker]:hidden'>
          <summary className='flex cursor-pointer items-center justify-between gap-1.5'>
            <h2 className='font-bold text-lg'>{item.title}</h2>

            <span className='relative size-5 shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 size-5 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>

          <div
            className='mt-4 leading-relaxed'
            dangerouslySetInnerHTML={{
              __html: item.description
            }}></div>
        </details>
      ))}
    </div>
  )
}
