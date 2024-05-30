import { HERO_CONTENT } from "../../constants/index";
import profilePic from "../../assets/hero.jfif";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 lg:m-8 mt-10 lg:mt-16">
      <div className=" flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.5,
                textShadow: "0px 0px 20px blue",
              }}
              className="pb-6 text-4xl font-thin tracking-tight md:text-5xl lg:mt-16 lg:text-8xl"
            >
              Mayudi
            </motion.h1>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.3,
              }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-4xl lg:text-6xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 4px blue",
                delay: 0.5,
              }}
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="text-sm md:text-base lg:text-lg my-2 max-w-xl py-2 font-light text-justify tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="flex mx-4 md:mx-auto mt-4 justify-center items-center lg:w-1/2 lg:p-8 mb-8 lg:mb-72 md:mt-4">
          <div className="md:w-[500px] md:h-[500px]">
            <motion.img
              initial={{ x: +100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 4px blue",
                delay: 0.5,
              }}
              src={profilePic}
              alt="profile"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
