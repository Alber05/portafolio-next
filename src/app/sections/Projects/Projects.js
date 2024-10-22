'use client'
import React, { useState } from 'react'
import {
  corporateProjectsData,
  personalProjectsData
} from './data/personalProjects'
import ProjectsList from './ProjectsList'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('corporate') // Estado para manejar la categoría seleccionada

  const handleButtonClick = (category) => {
    setSelectedCategory(category)
  }

  return (
    <section className='mx-auto min-h-[calc(min(100vh,1080px))] w-full overflow-hidden py-[50px] text-center'>
      <div className='my-[50px] h-full' data-aos='zoom-in' data-aos-delay='100'>
        <h2 className='title-animation text-5xl font-bold'>Proyectos</h2>
      </div>
      <div className='mx-auto mb-4 flex w-[90%] max-w-md space-x-4'>
        <button
          onClick={() => handleButtonClick('corporate')}
          className={`rounded px-4 py-2 text-white shadow-custom-black ${
            selectedCategory === 'corporate' ? 'bg-customCyan' : 'bg-gray-500'
          }`}
        >
          Páginas Web Corporativas
        </button>
        <button
          onClick={() => handleButtonClick('personal')}
          className={`rounded px-4 py-2 text-white shadow-custom-black ${
            selectedCategory === 'personal' ? 'bg-customCyan' : 'bg-gray-500'
          }`}
        >
          Proyectos Personales
        </button>
      </div>

      {/* Mostrar componente según la categoría seleccionada */}
      {selectedCategory === 'corporate' ? (
        <ProjectsList projects={corporateProjectsData} />
      ) : (
        <ProjectsList projects={personalProjectsData} />
      )}
    </section>
  )
}

export default Projects
