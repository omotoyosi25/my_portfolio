import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <main className='m-auto'>
      <nav>
        <ul className=' rounded-t flex justify-center font-medium text-white  space-x-5 bg-violet-900 h-10 text-xs capitalize bg'>
            <Link href='/'>
            <li className='mt-3 hover:text-violet-500 transition-colors ease-in hover:underline-offset-2'>home</li>
            </Link>
            
            <Link href='/about'>
            <li className='mt-3 hover:text-violet-500 transition-colors ease-in'>about</li>
            </Link>
            
            <Link href='/project'>
            <li className='mt-3 hover:text-violet-500 transition-colors ease-in'>projects</li>
            </Link>
            
            <Link href='/skills'>
            <li className='mt-3 hover:text-violet-500 transition-colors ease-in'>skills</li>
            </Link>
            
            <Link href='/contact'>
            <li className='mt-3 hover:text-violet-500 transition-colors ease-in'>contact</li>
            </Link>
            <Link href='/hire_me'>
            <button type="button" className=' bg-white text-violet-950 h-5 capitalize mt-2 rounded-md w-16'>hire me</button>
            </Link>
        </ul>
      </nav>
    </main>
  )
}
