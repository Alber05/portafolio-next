import './globals.css'
import { Kanit } from 'next/font/google'
import Header from './UI/Header'

const kanit = Kanit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Alber Sánchez | Desarrollador FrontEnd',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body
        className={`${kanit.className} bg-bodyBackground relative grid min-h-screen grid-rows-[80px,auto] bg-cover bg-fixed`}
      >
        <Header />
        <main className='overflow-hidden'>{children}</main>
      </body>
    </html>
  )
}