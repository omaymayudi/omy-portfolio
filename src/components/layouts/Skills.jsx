import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import TitleSection from "../elements/TitleSection";
import { SiSequelize } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
// import { DiMongodb } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const iconVarians = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 md:px-16">
      <motion.div
        whileHover={{
          scale: 1.5,
          delay: 0.5,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        title="My Skills"
      >
        <TitleSection title="My Skills" />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex flex-wrap items-center justify-center md:gap-4 gap-2 w-full h-full"
      >
        <motion.div
          variants={iconVarians(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.3,
            delay: 0.5,
          }}
          className="rounded-2xl border-2 md:border-4 border-natural-800 p-4"
        >
          <TiHtml5 className="md:text-3xl lg:text-4xl text-orange-500" />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.3,
            delay: 0.5,
          }}
          variants={iconVarians(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 md:border-4 border-natural-800 p-4"
        >
          <IoLogoJavascript className="md:text-3xl lg:text-4xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVarians(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.3,
            delay: 0.5,
          }}
          className="rounded-2xl border-2 md:border-4 border-natural-800 p-4"
        >
          <FaNodeJs className="md:text-3xl lg:text-4xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVarians(1.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.3,
            delay: 0.5,
          }}
          className="rounded-2xl border-2 md:border-4 border-natural-800 p-4"
        >
          <SiMysql className="md:text-3xl lg:text-4xl text-blue-300" />
        </motion.div>
        <motion.div
          variants={iconVarians(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.3,
            delay: 0.5,
          }}
          className="rounded-2xl border-2 md:border-4 border-natural-800 p-4"
        >
          <FaCss3 className="md:text-3xl lg:text-4xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVarians(1.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.3,
            delay: 0.5,
          }}
          className="rounded-2xl border-2 md:border-4 border-natural-800 p-4"
        >
          <FaPhp className="md:text-3xl lg:text-4xl text-purple-500" />
        </motion.div>
        <motion.div
          variants={iconVarians(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.3,
            delay: 0.5,
          }}
          className="rounded-2xl border-2 md:border-4 border-natural-800 p-4"
        >
          <SiExpress className="md:text-3xl lg:text-4xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVarians(2)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.3,
            delay: 0.5,
          }}
          className="rounded-2xl border-2 md:border-4 border-natural-800 p-4"
        >
          <RiTailwindCssFill className="md:text-3xl lg:text-4xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVarians(3.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.3,
            delay: 0.5,
          }}
          className="rounded-2xl border-2 md:border-4 border-natural-800 p-4"
        >
          <RiReactjsLine className="md:text-3xl lg:text-4xl text-lg text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVarians(2)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.3,
            delay: 0.5,
          }}
          className="rounded-2xl border-2 md:border-4 border-natural-800 p-4"
        >
          <SiSequelize className="md:text-3xl lg:text-4xl text-lg text-blue-400" />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.3,
            delay: 0.5,
          }}
          variants={iconVarians(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 md:border-4 border-natural-800 p-4"
        >
          <SiRedux className="md:text-3xl lg:text-4xl text-purple-400" />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.3,
            delay: 0.5,
          }}
          variants={iconVarians(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 md:border-4 border-natural-800 p-4"
        >
          <SiNextdotjs className="md:text-3xl lg:text-4xl text-white" />
        </motion.div>

        <motion.div
          variants={iconVarians(2)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.3,
            delay: 0.5,
          }}
          className="rounded-2xl border-2 md:border-4 border-natural-800 p-4"
        >
          <FaGithub className="md:text-3xl lg:text-4xl text-lg text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
