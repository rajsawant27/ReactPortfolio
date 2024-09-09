import { RiReactjsLine } from "react-icons/ri"
import { SiTailwindcss } from "react-icons/si"
import { SiSpringboot } from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { GrOracle } from "react-icons/gr"
import { FaBootstrap } from "react-icons/fa"
import { FaDocker } from "react-icons/fa"
import { motion } from 'framer-motion';

const iconVariant =(duration) => ({
    initial :{y :-10},
    animate :{
        y :[10 ,-10],
        transition :{
            duration :duration,
            ease :"linear",
            repeat :Infinity,
            repeatType :"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border=b border-neutral-800 pb-24">
      <motion.h1 whileInView={{opacity :1 , y :0}}
      initial ={{opacity :0, y :-100}}
      transition={{duration :1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView ={{opacity :1 , x :0}}
      initial ={{opacity :0, x :-100}}
      transition={{duration :1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <h1 className="text-lg text-center">ReactJS</h1>
        </motion.div>

        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
          <h1 className="text-lg text-center">Tailwind</h1>
        </motion.div>

        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSpringboot className="text-7xl text-green-400" />
          <h1 className="text-lg text-center">SpringBoot</h1>
        </motion.div>

        <motion.div variants={iconVariant(3)}
            initial="initial"
            animate ="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAws className="text-7xl text-orange-400" />
           <h1 className="text-lg text-center">AWS</h1> 
         
        </motion.div>

        <motion.div 
        variants={iconVariant(2)}
        initial="initial"
        animate ="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <GrOracle className="text-7xl text-red-400" />
          <h1 className="text-lg text-center">Oracle</h1>
        </motion.div>

        <motion.div 
        variants={iconVariant(3)}
        initial="initial"
        animate ="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaBootstrap className="text-7xl text-violet-400" />
          <h1 className="text-lg text-center">Bootstrap</h1>
        </motion.div>

        <motion.div variants={iconVariant(2)}
            initial="initial"
            animate ="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDocker className="text-7xl text-sky-700" />
          <h1 className="text-lg text-center">Docker</h1>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies