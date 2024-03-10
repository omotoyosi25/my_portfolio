import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../style.module.css'

export default function page() {
  return (
    <main>
       <h2 className='uppercase text-slate-700 text-4xl font-bold flex justify-center items-center mt-10 tracking-[25px]'>my projects</h2>
       <div className='flex space-x-10 mt-10 ml-20'>
        <span className='text-slate-300 capitalize mt-20 text-2xl font-bold '>
          blogging-platform
        </span>
          <Link href='http://myproject-spnz-4zmiyqtob-omotoyosi25.vercel.app'>
            <Image src='/projectscreen.jpg' alt='project' width={400} height={375} className=' rounded'/>
          </Link>
      </div>
      <div className='mt-10 ml-10 flex space-x-10 items-center justify-start'>
        <Link href='https://omotoyosi25.github.io/frontendweek8/rom%20converter/index..html'>
          <Image src='/roman.jpg' alt='roman' width={400} height={300} className='rounded'/>
        </Link>
        <span className='text-slate-300 capitalize mt-20 text-2xl font-bold'>
          Roman Numeral Converter 
        </span>
      </div>  
      <div className='mt-10 ml-10 flex space-x-10 mb-10'>
        <span className='text-slate-300 capitalize mt-20 text-2xl font-bold'>
          slug page
        </span>
        <Link href='https://stars-omotoyosi25.vercel.app/'>
          <Image src='/slug.jpg ' alt='slug' width={300} height={200} className='rounded'/>
        </Link>
      </div>       
    </main>
  )
}
