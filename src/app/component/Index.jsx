import Image from 'next/image'
import React from 'react'
import { FaSquareFacebook, FaSquareXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import { ImYoutube } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";



export default function Index() {
  return (
    <main className='flex bg-violet-950 h-96'>
        <div className='capitalize space-y-2 mt-16 m-auto'>
            <h2 className=' text-center text-xs text-slate-500'>hello, i'm abibat</h2>
            <h2 className=' text-4xl text-purple-400 font-extrabold'>a fullstack web developer</h2>
            <h2 className='text-center text-sm text-slate-500'>i craft responsive web apps</h2>
        <ul>
          <li className="flex justify-center items-center space-x-2  text-purple-400 mt-5">
          <Link href='https://www.instagram.com/mo_bonike_?igsh=MWt2ZXRmazBpYWl4cA=='>
            <FaInstagram className=' rounded-full'/>
          </Link>
          <Link href='https://www.facebook.com/c/abibatomotoyosiabdulraheem'>
            <FaSquareFacebook className=' rounded-full'/>
          </Link>
          <Link href='https://github.com/omotoyosi25'>
            <FaGithub />
            </Link>
          <Link href='https://www.linkedin.com/in/omotoyosi-adeola-0b6994208'> 
            <FaLinkedin className=' rounded-full'/>  
          </Link> 
          <Link href='https://www.twitter.com/omotoyosiade25'>
            <FaSquareXTwitter className=' rounded-full'/>
          </Link>
          </li>
        </ul>
        </div>
       
    </main>
  )
}
