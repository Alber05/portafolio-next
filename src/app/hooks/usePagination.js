import { useState } from 'react'

export const usePagination = (scrollRef) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const firstIndex = (currentPage - 1) * itemsPerPage
  const lastIndex = firstIndex + itemsPerPage

  const handlePrevPage = async () => {
    await setCurrentPage((prevCurrentPage) => prevCurrentPage - 1)
    scrollToSection()
  }

  const handleNextPage = async () => {
    await setCurrentPage((prevCurrentPage) => prevCurrentPage + 1)
    scrollToSection()
  }

  const scrollToSection = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return {
    currentPage,
    itemsPerPage,
    firstIndex,
    lastIndex,
    handlePrevPage,
    handleNextPage
  }
}
