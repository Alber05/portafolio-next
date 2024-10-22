'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import { skills } from '../data/skills'

export default function SkillsPage() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()

    // Limpieza de AOS al desmontar el componente
    return () => {
      AOS.refreshHard()
    }
  }, [])
  return (
    <section
      className='mx-auto min-h-[calc(min(100vh,1080px))] w-full justify-center overflow-hidden py-[50px] text-center md:flex md:flex-col md:items-center md:justify-center'
      id='skillsPage'
    >
      <div className='' data-aos='zoom-in' data-aos-delay='100'>
        <h2 className='mb-8 text-5xl font-black text-white'>Habilidades</h2>
      </div>
      <div className='mx-auto my-8 grid w-[90%] max-w-screen-xl grid-cols-[repeat(auto-fit,minmax(200px,1fr))] items-center justify-center gap-5 px-5 xl:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]'>
        {skills.map((skill) => (
          <div
            className='rounded-[12px] bg-[#45b7f566] p-5 shadow-custom-black'
            key={skill.title}
            data-aos={skill.animation}
          >
            <Image
              src={skill.image}
              alt={skill.title}
              className='h-[100px] w-full object-contain'
            />
          </div>
        ))}
      </div>
    </section>
  )
}
