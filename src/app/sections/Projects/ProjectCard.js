import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons'
import htmlIcon from '@/app/assets/images/skills-section/html5.webp'
import cssIcon from '@/app/assets/images/skills-section/css3.webp'
import jsIcon from '@/app/assets/images/skills-section/js.webp'
import reactIcon from '@/app/assets/images/skills-section/react.webp'
import nextIcon from '@/app/assets/images/skills-section/nextjs.webp'
import tailwindIcon from '@/app/assets/images/skills-section/tailwind.webp'
import reactBootstrapIcon from '@/app/assets/images/skills-section/react-bootstrap.webp'
import analyticsIcon from '@/app/assets/images/skills-section/analytics.webp'

const selectTechIcon = (tech) => {
  switch (tech) {
    case 'html':
      return (
        <div
          className='relative flex h-10 w-10 items-center justify-center'
          key={tech}
        >
          <Image
            src={htmlIcon}
            alt='Logo de HTML5'
            className='fill h-[40px] w-[40px] object-contain'
            fill
          />
        </div>
      )
    case 'css':
      return (
        <div className='relative h-10 w-10' key={tech}>
          <Image
            src={cssIcon}
            alt='Logo de CSS3'
            className='object-contain'
            fill
          />
        </div>
      )
    case 'js':
      return (
        <div className='relative h-10 w-10' key={tech}>
          <Image
            src={jsIcon}
            alt='Logo de JavaScript'
            className='object-contain'
            fill
          />
        </div>
      )
    case 'react':
      return (
        <div className='relative h-10 w-10' key={tech}>
          <Image
            src={reactIcon}
            alt='Logo de ReactJs'
            className='object-contain'
            fill
          />
        </div>
      )
    case 'nextjs':
      return (
        <div className='relative h-10 w-10' key={tech}>
          <Image
            src={nextIcon}
            alt='Logo de NextJs'
            className='object-contain'
            fill
          />
        </div>
      )
    case 'tailwind':
      return (
        <div className='relative h-10 w-10' key={tech}>
          <Image
            src={tailwindIcon}
            alt='Logo de Tailwind'
            className='object-contain'
            fill
          />
        </div>
      )
      break
    case 'reactBootstrap':
      return (
        <div className='relative h-10 w-10' key={tech}>
          <Image
            src={reactBootstrapIcon}
            alt='Logo de ReactBootstrap'
            className='object-contain'
            fill
          />
        </div>
      )
    case 'analytics':
      return (
        <div className='relative h-10 w-10' key={tech}>
          <Image
            src={analyticsIcon}
            alt='Logo de Google Analytics'
            className='object-contain'
            fill
          />
        </div>
      )
    default:
      break
  }
}

function ProjectCard({ project }) {
  return (
    <div
      className='card flex h-auto cursor-pointer flex-col'
      key={project.title}
    >
      <div className='card__content custom-text-shadow relative min-h-[500px] flex-grow p-20 text-center font-semibold text-gray-100 transition-transform duration-1000'>
        <div className='card__front absolute bottom-0 left-0 right-0 top-0 grid h-full grid-rows-[70px,auto,auto] overflow-hidden rounded-md bg-custom-light-blue p-8 pb-8 shadow-custom-black'>
          <div className='h-[70px]'>
            <h4 className='text-xl font-black tracking-wider text-white'>
              {project.title}
            </h4>
          </div>
          <Image
            src={project?.image}
            alt='Ejemplo'
            className='drop-shadow-custom-blue'
          />
          <div className='mx-auto w-[90%]'>
            <h5>Tecnologías</h5>
            <div className='mx-auto mt-4 flex w-full flex-wrap items-center justify-center gap-4'>
              {project.technologies.map((technology) => {
                return selectTechIcon(technology)
              })}
            </div>
          </div>
        </div>
        <div className='card__back absolute bottom-0 left-0 right-0 top-0 flex h-full min-h-[500px] flex-col items-center justify-between overflow-hidden rounded-md bg-custom-light-blue p-8 pb-8 shadow-custom-black'>
          <article className='h-full'>
            <p className='h-[80%]'>{project?.description}</p>
            <footer className='mx-auto mt-8 flex h-[20%] items-center justify-center gap-8'>
              <a
                href={project.demo}
                target='_blank'
                title='Ver en el navegador'
              >
                <FontAwesomeIcon
                  icon={faChrome}
                  size='2xl'
                  className='text-slate-200 drop-shadow-custom-black duration-300 hover:scale-125'
                />
              </a>
              <a href={project.github} target='_blank' title='Ver en Github'>
                <FontAwesomeIcon
                  icon={faGithub}
                  size='2xl'
                  className='text-white drop-shadow-xl transition-transform duration-300 ease-in hover:scale-125'
                />
              </a>
            </footer>
          </article>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
