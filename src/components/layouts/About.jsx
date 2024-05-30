import imageAbout from "../../assets/about.jfif";
import { ABOUT_TEXT } from "../../constants/index";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{
          scale: 1.3,
          delay: 0.5,
        }}
        className="mt-14 mb-8 text-center text-xl md:text-2xl lg:text-3xl"
      >
        About{" "}
        <span className="text-neutral-500 text-xl md:text-2xl lg:text-3xl">
          Me
        </span>
      </motion.h1>

      <div className="flex flex-wrap md:mx-4">
        <div className="w-full lg:w-1/2 lg:p-8 mb-8 ">
          <div className="md:w-[500px] md:h-[500px] md:mx-auto">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 4px blue",
                delay: 0.5,
              }}
              className="rounded-2xl"
              src={imageAbout}
              alt="About"
            />
          </div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: +100 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 4px blue",
            delay: 0.5,
          }}
          className="w-full lg:w-1/2"
        >
          <div className="w-full md:text-lg md:px-14 lg:py-14 lg:px-8 justify-center tracking-tighter lg:justify-start text-justify text-sm">
            <p>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
