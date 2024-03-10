import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from './component/Navbar'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Fullstack WebDeveloper',
  description: 'frontend developer, backend developer, ui/ux designer, fullstack developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' bg-black'>
      <body className={inter.className}>
        <section><Navbar/></section>
        <main>{children}</main>
      </body>
    </html>
  )
}
