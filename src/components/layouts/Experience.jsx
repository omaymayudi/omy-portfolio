import { EXPERIENCES } from "../../constants";
import TitleSection from "../elements/TitleSection";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{
          scale: 1.3,
          delay: 0.5,
        }}
      >
        <TitleSection title="Experience & Education" />
      </motion.div>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 md:px-16 flex flex-wrap lg:mb-16 lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{
                scale: 1.2,
              }}
              className="w-full lg:w-1/4"
            >
              <p className="text-sm lg:text-xl text-neutral-400 mb-2">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: +100 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              whileHover={{
                scale: 1.2,
              }}
              className="w-full lg:w-3/4"
            >
              <h6 className="mb-6 lg:text-xl font-semibold">
                {experience.role} -{" "}
                <span className="text-sm lg:text-xl  text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="text-sm mb-4 lg:text-lg text-neutral-400">
                {experience.description}
              </p>
              {experience.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded text-purple-600 px-2 py-1 text-sm lg:text-lg font-medium bg-neutral-900"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
