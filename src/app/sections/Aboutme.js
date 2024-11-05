import Image from 'next/image'
import aboutMe from '../assets/images/section-aboutme/aboutme-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

function Aboutme() {
  const handleDownload = () => {
    window.open('/documento.pdf', '_blank')
  }

  return (
    <section
      className='mx-auto flex min-h-[calc(min(100vh,1080px))] w-[90%] max-w-screen-xl items-center gap-4 overflow-hidden py-[50px] text-center'
      id='about-me'
    >
      <div className='xl:grid xl:grid-cols-3 xl:grid-rows-1 xl:flex-row'>
        <h2
          className='title-animation mx-auto mb-8 w-max text-5xl font-black text-white xl:col-span-3 xl:col-start-2'
          data-aos='fade-in'
        >
          Sobre mí
        </h2>
        <div
          className='w-full xl:col-span-1 xl:col-start-1 xl:row-start-2'
          data-aos='zoom-in'
          data-aos-delay='100'
        >
          <Image
            src={aboutMe}
            alt='Image of me'
            width={200}
            height={200}
            className='mx-auto drop-shadow-custom-blue xl:w-[300px]'
          />
        </div>
        <div
          className='custom-text-shadow place-content-center rounded-md p-4 text-gray-100 xl:col-span-2 xl:row-start-2'
          data-aos='fade-in'
        >
          <p className='text-xl'>
            ¡Hola! Soy Alberto Sánchez, Desarrollador Frontend apasionado por
            crear interfaces interactivas y funcionales.
          </p>
          <p className='mt-2'>
            Mi viaje en el mundo del desarrollo web comenzó durante mi formación
            en el ciclo de ASIR (Administración de Sistemas Informáticos en
            Red), donde tuve mi primer contacto con el desarrollo web. Fue en
            ese momento cuando descubrí mi verdadera pasión por crear interfaces
            interactivas y funcionales.
          </p>
          <p className='mt-2'>
            Después de varios años trabajando como administrador de sistemas,
            decidí dar un giro a mi carrera profesional y enfocarme en el
            desarrollo frontend, donde pude aplicar mis habilidades técnicas en
            un entorno completamente nuevo.
          </p>
          <p className='mt-2'>
            Actualmente, me especializo en tecnologías como HTML, CSS,
            JavaScript, y uso librerías como React y frameworks como Next.js
            para crear aplicaciones web rápidas y eficientes. Además, tengo
            experiencia trabajando con bases de datos como MongoDB y en el
            desarrollo del backend utilizando Express.
          </p>
          <p className='mt-2'>
            Estoy constantemente explorando nuevas tecnologías y tendencias para
            mejorar mis habilidades y ofrecer soluciones innovadoras. Si buscas
            un desarrollador con un ojo detallado para el diseño y la
            funcionalidad, ¡no dudes en contactarme!
          </p>
          <div className='mt-4 flex flex-col items-center justify-center gap-8 py-4 sm:flex-row'>
            <a
              href='https://github.com/Alber05'
              target='_blank'
              rel='noopener noreferrer'
              className='custom-text-shadow w-[200px] rounded-md bg-[#45b7f566] p-2 shadow-custom-black'
            >
              <FontAwesomeIcon
                icon={faGithub}
                size='xl'
                className='text-white drop-shadow-xl transition-transform duration-300 ease-in hover:scale-125'
              />
              <span className='ml-2'>Acceder a Github</span>
            </a>
            <a
              href='/CV-Alberto-Sanchez.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='custom-text-shadow w-[200px] rounded-md bg-[#45b7f566] p-2 shadow-custom-black'
            >
              {' '}
              <FontAwesomeIcon
                icon={faFile}
                size='xl'
                className='text-white drop-shadow-xl transition-transform duration-300 ease-in hover:scale-125'
              />
              <span className='ml-2'>Descargar CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme
