'use client'

import { usePagination } from '@/app/hooks/usePagination'
import ProjectCard from './ProjectCard'

/* Función para renderizar los logos de tecnologías de cada producto */
function ProjectsList({ projects, scrollRef }) {
  const {
    currentPage,
    itemsPerPage,
    firstIndex,
    lastIndex,
    handlePrevPage,
    handleNextPage
  } = usePagination(scrollRef)

  console.log(currentPage)

  return (
    <>
      <div className='mx-auto my-8 grid w-[90%] max-w-screen-xl grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-center justify-center gap-5 px-5'>
        {projects?.slice(firstIndex, lastIndex).map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
      <div className='flex justify-center gap-2'>
        <button
          className={`${currentPage <= 1 ? 'bg-gray-500' : 'bg-customCyan'} flex h-10 w-10 items-center justify-center rounded-md p-2 text-4xl text-white`}
          disabled={currentPage <= 1}
          onClick={handlePrevPage}
        >
          {'<'}
        </button>
        <button
          className={`flex h-10 w-10 items-center justify-center rounded-md p-2 text-4xl text-white ${currentPage >= Math.ceil(projects.length / itemsPerPage) ? 'bg-gray-500' : 'bg-customCyan'}`}
          disabled={currentPage >= Math.ceil(projects.length / itemsPerPage)}
          onClick={() => handleNextPage()}
        >
          {'>'}
        </button>
      </div>
    </>
  )
}

export default ProjectsList
