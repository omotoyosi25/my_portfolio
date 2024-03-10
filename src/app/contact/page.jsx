import Link from 'next/link'
import React from 'react'
import { FaSquareFacebook, FaSquareXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function page() {
  return (
  <main>
    <h2 className='tracking-[25px] text-violet-400 text-2xl font-bold text-center mt-10'>Get in touch with me</h2>
    <div className='flex mt-10 items-center space-y-10 flex-col h-screen'>
      <div className=' space-y-10'>
        <h2 className='uppercase text-4xl font-bold text-violet-400 '>let's work together</h2>
          <ul>
            <li className="space-x-2 flex justify-center items-center text-xl text-purple-400 ">
            <Link href='https://www.instagram.com/mo_bonike_?igsh=MWt2ZXRmazBpYWl4cA=='>
              <FaInstagram/>
            </Link>
            <Link href='https://www.facebook.com/c/abibatomotoyosiabdulraheem'>
              <FaSquareFacebook/>
            </Link>
            <Link href='https://www.linkedin.com/in/omotoyosi-adeola-0b6994208'> 
              <FaLinkedin/>  
            </Link> 
            <Link href='https://www.twitter.com/omotoyosiade25'>
              <FaSquareXTwitter/>
            </Link>
            <Link href='https://github.com/omotoyosi25'>
            <FaGithub />
            </Link>
            <Link href="mailto:omotoyosiade25@gmail.com"> 
            <MdAlternateEmail />
            </Link>
            </li>
          </ul>
        </div>
        <div>
          <input type="text" placeholder="Name" className='rounded-full' required/><br/><br />
          <input type="text" placeholder="Email" required className='rounded-full'/><br/><br />
          <textarea name="message" id="" cols={30} rows={5} placeholder="Message" className='rounded'></textarea><br/>
          <button className="bg-purple-700 hover:bg-purple-900 rounded-full py-1 px-8 shadow-lg text-white">Submit</button>
        </div>
    </div>
  </main>
  )
}
