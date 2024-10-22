import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons'

function ProjectsList({ projects }) {
  return (
    <div className='mx-auto my-8 grid w-[90%] max-w-screen-xl grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-center justify-center gap-5 px-5'>
      {projects?.map((project) => (
        <div class='card h-[400px] cursor-pointer' key={project.title}>
          <div class='card__content relative h-full p-20 text-center font-bold text-white transition-transform duration-1000'>
            <div class='card__front absolute bottom-0 left-0 right-0 top-0 flex h-full flex-col items-center justify-center overflow-hidden rounded-md bg-custom-light-blue p-8 pb-8 shadow-custom-black'>
              <Image
                src={project?.image}
                alt='Ejemplo'
                className='drop-shadow-custom-blue'
              />

              <div className='h-[70px]'>
                <h4 className='text-2xl font-black tracking-wider text-white'>
                  {project.title}
                </h4>
              </div>
            </div>
            <div class='card__back absolute bottom-0 left-0 right-0 top-0 flex h-full flex-col items-center justify-between overflow-hidden rounded-md bg-custom-light-blue p-8 pb-8 shadow-custom-black'>
              <h2></h2>
              <article>
                <p></p>
                <footer className='mt-8 flex items-center gap-8'>
                  <a
                    href={project.demo}
                    target='_blank'
                    title='Ver en el navagador'
                  >
                    <FontAwesomeIcon
                      icon={faChrome}
                      size='xl'
                      className='text-white'
                    />
                  </a>
                  <a
                    href={project.github}
                    target='_blank'
                    title='Ver en Github'
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size='xl'
                      className='text-white'
                    />
                  </a>
                </footer>
              </article>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsList
