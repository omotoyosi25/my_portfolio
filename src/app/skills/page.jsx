import { FaHtml5, FaPython, FaCss3Alt, FaFigma  } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiDjango,SiNextdotjs } from "react-icons/si";


export default function page() {
  return (
    <main className=" bg-black h-52 text-center">
      <h2 className="uppercase tracking-[25px] text-4xl mt-10 ml-5 font-bold text-violet-900">my skills</h2>
      <h2 className=" ml-5 mt-5 font-medium text-slate-400">These are the technologies i currently work with</h2>
      <div className="flex space-x-3 mt-10 ml-10 justify-center items-center">
          <FaHtml5 className="text-6xl text-orange-600"/>
          <RiReactjsLine className="text-6xl text-blue-700" />
          <SiDjango className="text-6xl text-red-800" />
          <FaPython className="text-6xl text-blue-600"/>
          <FaCss3Alt className="text-6xl text-teal-600"/>
          <SiNextdotjs className="text-6xl text-purple-700"/>
          <FaFigma className="text-6xl text-rose-500"/>
      </div>
    </main>
  )
}
