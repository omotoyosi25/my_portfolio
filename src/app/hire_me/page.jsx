import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <main>
        {/* <div > */}
        <ul className='text-slate-400 text-center mt-10 font-semibold space-y-5'>
        <h2 className='text-2xl uppercase underline'>Services offered</h2>
            <li>Front-end development</li>
            <li>Back-end development</li>
            <li>Full-stack development</li>
            <li>Web design</li>
            <li>App design</li>
        </ul>
        <ul>
        <div class=" mx-auto text-center mt-10 space-y-10 text-slate-400">
            <h2 class="text-3xl font-bold">Ready to Start a Project?</h2>
            <p class="text-lg">I specialize in creating responsive and user-friendly web applications.</p>
        </div>
            <li className='flex justify-center'>
                <Link href='/contact' class="bg-violet-950 hover:bg-violet-800 items-center mt-10 transition-colors ease-in text-white font-bold py-2 px-4 rounded">Hire Me</Link>
            </li>
        </ul>
    </main>
  )
}
