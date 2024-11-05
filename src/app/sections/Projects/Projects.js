'use client'
import React, { useState, useRef } from 'react'
import {
  corporateProjectsData,
  personalProjectsData
} from './data/personalProjects'
import ProjectsList from './ProjectsList'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('corporate')
  const scrollRef = useRef(null)
  const personalProjectsRef = useRef(null)

  const handleButtonClick = (category) => {
    setSelectedCategory(category)
  }

  return (
    <section
      className='mx-auto min-h-[calc(min(100vh,1080px))] w-[100%] overflow-hidden py-[50px] text-center'
      id='projects'
      ref={scrollRef}
    >
      <div className='my-[50px] h-full' data-aos='zoom-in' data-aos-delay='100'>
        <h2 className='title-animation text-5xl font-black'>Proyectos</h2>
      </div>
      <div className='mx-auto mb-12 flex w-[90%] flex-col items-center justify-center gap-4 md:flex-row md:items-center md:justify-center'>
        <button
          onClick={() => handleButtonClick('corporate')}
          className={`w-[300px] rounded px-4 py-2 text-white shadow-custom-black ${
            selectedCategory === 'corporate' ? 'bg-customCyan' : 'bg-gray-500'
          }`}
        >
          Páginas Web Corporativas
        </button>
        <button
          onClick={() => handleButtonClick('personal')}
          className={`w-[300px] rounded px-4 py-2 text-white shadow-custom-black ${
            selectedCategory === 'personal' ? 'bg-customCyan' : 'bg-gray-500'
          }`}
        >
          Proyectos Personales
        </button>
      </div>

      {/* Mostrar componente según la categoría seleccionada */}
      {selectedCategory === 'corporate' && (
        <ProjectsList projects={corporateProjectsData} scrollRef={scrollRef} />
      )}

      {selectedCategory === 'personal' && (
        <ProjectsList projects={personalProjectsData} scrollRef={scrollRef} />
      )}
    </section>
  )
}

export default Projects
