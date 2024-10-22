import Image from 'next/image'

import spaceman from '../assets/images/contactImages/mail.webp'
import post from '../assets/images/contactImages/sobre.webp'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <section
      className='flex min-h-[calc(min(100vh,1080px))] w-full flex-col items-center justify-center overflow-hidden text-center'
      id='contactPage'
    >
      <div className='my-[50px] h-full' data-aos='zoom-in' data-aos-delay='100'>
        <h2 className='title-animation text-5xl font-bold'>CONTACTO</h2>
      </div>
      <div className='mx-auto flex w-[90%] flex-col items-center justify-center'>
        <div className='relative w-full max-w-[500px]'>
          <Image
            src={spaceman}
            alt='Image of an spaceman sending an email'
            className='z-[800] mx-auto w-[50%]'
          />
          <Image
            src={post}
            className='absolute right-[150px] top-[60px] z-[-1] w-[13%] animate-post'
            alt='Image of an email'
          />
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
