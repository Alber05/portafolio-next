'use client'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import bg1 from '../assets/images/section-hero/bg1.webp'
import bg2 from '../assets/images/section-hero/bg2.webp'
import bg3 from '../assets/images/section-hero/bg3.webp'
import bg4 from '../assets/images/section-hero/bg4.webp'
import bg5 from '../assets/images/section-hero/bg5.webp'
import astronauta from '../assets/images/section-hero/astronauta.webp'
import moon from '../assets/images/section-hero/moon.webp'
import Image from 'next/image'

function Hero() {
  const pageRef = useRef()
  const isInView = useInView(pageRef, { once: true })

  return (
    <div
      className='relative grid h-[calc(100vh-80px)] max-h-[1080px] min-h-[700px] w-full grid-rows-[200px,1fr,1fr]'
      ref={pageRef}
    >
      <section className='relative mx-auto flex w-[90%] items-center py-8 lg:translate-y-[25px]'>
        <motion.h1
          className='text-md flex w-full flex-col items-center space-y-2 text-center uppercase leading-8 text-white md:text-lg lg:items-start lg:text-xl xl:text-2xl'
          initial={{ scale: 0.8, opacity: 0, x: -200 }} // Estado inicial
          animate={{
            scale: isInView ? 1 : 0.8,
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -200 // Cambia la posición en X cuando isInView sea true
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'linear' // Igual que cubic-bezier(0.17, 0.55, 0.55, 1)
          }}
        >
          <span>Hola! soy</span>
          <span className='title-animation text-4xl font-bold md:text-5xl lg:text-6xl'>
            Alber sánchez
          </span>
          <span> y soy</span>

          <span className='title-animation text-4xl font-bold md:text-5xl lg:text-6xl'>
            desarrollador web
          </span>
        </motion.h1>
      </section>
      <section className='mx-auto h-full w-max'>
        <motion.div
          className='relative top-[50px] flex h-full w-full items-center justify-center sm:left-[80px] sm:top-[100px] md:left-[120px] md:top-[100px] lg:left-[250px] lg:top-[140px] xl:left-[360px] xl:top-[140px]'
          initial={{ scale: 0.8, opacity: 0, x: 100 }} // Estado inicial
          animate={{
            scale: isInView ? 1 : 0.8,
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 100 // Cambia la posición en X cuando isInView sea true
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.17, 0.55, 0.55, 1] // Igual que cubic-bezier(0.17, 0.55, 0.55, 1)
          }}
        >
          <figure className='qhd:w-[250px] absolute w-[60px] sm:w-[70px] md:w-[120px] lg:w-[140px] xl:w-[150px] 2xl:w-[160px]'>
            <Image src={bg1} alt='image of a wormhole' className='wormHole' />
          </figure>

          <figure className='qhd:w-[330px] absolute w-[70px] sm:w-[110px] md:w-[150px] lg:w-[180px] xl:w-[210px] 2xl:w-[300px]'>
            <Image
              src={bg2}
              alt='image of a wormhole'
              className='wormHole wh2'
            />
          </figure>

          <figure className='qhd:w-[540px] absolute w-[170px] sm:w-[210px] md:w-[250px] lg:w-[280px] xl:w-[310px] 2xl:w-[410px]'>
            <Image
              src={bg3}
              alt='image of a wormhole'
              className='wormHole wh3'
            />
          </figure>

          <figure className='qhd:w-[560px] absolute w-[220px] sm:w-[260px] md:w-[300px] lg:w-[330px] xl:w-[350px] 2xl:w-[440px]'>
            <Image
              src={bg4}
              alt='image of a wormhole'
              className='wormHole wh4'
            />
          </figure>

          <figure className='qhd:w-[630px] absolute w-[270px] sm:w-[310px] md:w-[350px] lg:w-[380px] xl:w-[400px] 2xl:w-[500px]'>
            <Image
              src={bg5}
              alt='image of a wormhole'
              className='wormHole wh5'
            />
          </figure>

          <figure className='qhd:w-[480px] qhd:-translate-x-[150px] qhd:-translate-y-[300px] absolute w-[170px] -translate-x-[60px] -translate-y-[120px] sm:w-[210px] sm:-translate-x-[80px] sm:-translate-y-[140px] md:w-[250px] md:-translate-y-[160px] lg:w-[280px] lg:-translate-x-[100px] lg:-translate-y-[180px] xl:w-[330px] xl:-translate-x-[120px] xl:-translate-y-[200px] 2xl:w-[380px] 2xl:-translate-x-[130px] 2xl:-translate-y-[240px]'>
            <Image
              src={astronauta}
              alt='image of an spaceman coming out of a wormhole'
              className='spaceMan'
            />
          </figure>
        </motion.div>
      </section>
      <motion.div
        className='relative flex items-end'
        initial={{ opacity: 0 }} // Estado inicial
        animate={{
          opacity: isInView ? 1 : 0
        }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: 'linear' // Igual que cubic-bezier(0.17, 0.55, 0.55, 1)
        }}
      >
        <Image
          src={moon}
          className='qhd:w-[1000px] relative w-[390px] sm:w-[455px] md:w-[510px] lg:w-[600px] xl:w-[800px] 2xl:w-[850px]'
          alt='Image of the moon'
        />
        <div className='qhd:w-[1022px] pointer-events-none absolute -bottom-[14px] -left-4 z-20 h-[30px] w-[411px] bg-gradient-to-t from-customNavyBlue via-gray-900 to-customNavyBlue blur sm:w-[475px] md:w-[530px] lg:w-[620px] xl:w-[822px] 2xl:w-[872px]' />
      </motion.div>
    </div>
  )
}

export default Hero
