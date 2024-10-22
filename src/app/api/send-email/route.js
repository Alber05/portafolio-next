import nodemailer from 'nodemailer'

export async function POST(req) {
  const { name, email, subject, comments } = await req.json()

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // true para 465, false para otros puertos
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: `Nuevo contacto de "${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: subject || 'Nuevo mensaje de contacto',
      replyTo: `${email}`,
      html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p><p>Mensaje: ${comments}</p>`
    })

    return new Response(
      JSON.stringify({ message: 'Correo enviado exitosamente' }),
      { status: 200 }
    )
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    return new Response(
      JSON.stringify({ message: 'Error al enviar el correo' }),
      { status: 500 }
    )
  }
}
