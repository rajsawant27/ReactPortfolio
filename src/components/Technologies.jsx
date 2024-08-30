import { RiReactjsLine } from "react-icons/ri"
import { SiTailwindcss } from "react-icons/si"
import { SiSpringboot } from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { GrOracle } from "react-icons/gr"
import { FaBootstrap } from "react-icons/fa"
import { FaDocker } from "react-icons/fa"

const Technologies = () => {
  return (
    <div className="border=b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-7xl text-blue-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSpringboot className="text-7xl text-green-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl text-orange-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrOracle className="text-7xl text-red-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-7xl text-violet-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className="text-7xl text-sky-700"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies