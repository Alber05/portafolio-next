'use client'

import { useState } from 'react'
import { Toaster, toast } from 'sonner'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  comments: ''
}

const validationsForm = (form) => {
  let errors = {}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  let regexComments = /^.{1,255}$/

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido"
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco"
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido"
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto"
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto a tratar' es requerido"
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido"
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no debe exceder los 255 caracteres"
  }

  return errors
}

const ContactForm = () => {
  const [form, setForm] = useState(initialForm)
  const [formErrors, setformErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // Prevenir el comportamiento por defecto
    const errors = validationsForm(form)

    if (Object.keys(errors).length > 0) {
      setformErrors(errors)
      console.log('ERROR')
      return
    }

    toast.info('Recibiendo su consulta')

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    console.log(res)

    if (res.ok) {
      toast.success('Hemos recibido tu correo correctamente')
      setForm(initialForm)
      setformErrors({})
    } else {
      toast.error('Error al enviar el correo')
    }
  }

  return (
    <div className='w-full'>
      <form
        onSubmit={handleSubmit} // Directamente aquí
        className='mx-auto my-1 flex w-full max-w-screen-md flex-col gap-4'
      >
        <input
          type='text'
          name='name'
          placeholder='Escribe tu nombre'
          onChange={handleChange}
          value={form.name}
          required
          className='shadow-form-input placeholder: rounded-2xl bg-custom-light-blue p-4 text-white placeholder:text-white'
        />
        <input
          type='email'
          name='email'
          placeholder='Escribe tu email'
          onChange={handleChange}
          value={form.email}
          required
          className='shadow-form-input placeholder: rounded-2xl bg-custom-light-blue p-4 text-white placeholder:text-white'
        />
        <input
          type='text'
          name='subject'
          placeholder='Asunto a tratar'
          onChange={handleChange}
          value={form.subject}
          required
          className='shadow-form-input rounded-2xl bg-custom-light-blue p-4 text-white placeholder:text-white'
        />
        <textarea
          name='comments'
          cols='50'
          rows='5'
          placeholder='Escribe tus comentarios'
          onChange={handleChange}
          value={form.comments}
          required
          className='shadow-form-input placeholder: rounded-2xl bg-custom-light-blue p-4 text-white placeholder:text-white'
        ></textarea>
        <div className='group relative'>
          <button
            className='relative w-full cursor-pointer rounded-xl bg-gray-800 p-px text-center font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out active:scale-95'
            type='submit'
          >
            <span className='absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></span>

            <div className='relative z-10 flex items-center justify-center rounded-xl bg-[#191C32] px-6 py-3'>
              <span className='transition-all duration-500 group-hover:translate-x-1'>
                Enviar
              </span>
            </div>
          </button>
        </div>
        <Toaster richColors />
      </form>
    </div>
  )
}

export default ContactForm
