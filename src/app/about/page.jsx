import { Inter } from 'next/font/google'
import Image from 'next/image'
const inter =Inter({ subsets: ['latin'] })

export default function page() {
  return (
    <main className='bg-slate-400 text-purple-950'>
      <h2 className=' tracking-[25px] font-bold text-4xl uppercase text-center py-10'>about me</h2>
         <div className=''>
            <Image src='/abibat.png' alt="Abibat" width={250} height={150} className='m-auto'/>
        </div>
        <h2 className={`${inter.className} h-full text-xl w-[50%] m-auto mt-10`}>
        I craft responsive, user-friendly web applications with a keen eye for detail. Proficient in front-end technologies like HTML, CSS, and JavaScript, coupled with back-end skills in Node.js and databases. Experience in building RESTful APIs and deploying applications using technologies such as React and Express. Let&apos;s innovate together
        </h2>
    </main>
  )
}
