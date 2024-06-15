import { PROJECTS } from "../../constants";
import TitleSection from "../elements/TitleSection";
import { motion } from "framer-motion";
const Portfolio = () => {
  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{
          scale: 1.3,
          delay: 0.5,
        }}
        className=""
      >
        <TitleSection title="Portfolio" />
      </motion.div>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="lg:justify-center md:px-16 mb-8 flex flex-wrap"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{
                scale: 2,
                delay: 0.5,
              }}
              className="flex w-full lg:w-1/4 justify-center items-center"
            >
              <a href={project.linkFigma} target="_blank">
                <img
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="mb-6 rounded cursor-pointer"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: +100 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              whileHover={{
                scale: 1.1,
                delay: 0.5,
              }}
              className="w-full lg:w-3/4"
            >
              <a href={project.linkGithub} target="_blank">
                <h6 className="mb-2 lg:text-xl font-semibold cursor-pointer ">
                  {project.title}
                </h6>
              </a>
              <p className="mb-4 text-neutral-400 lg:text-lg">
                {project.description}
              </p>
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 rounded text-purple-600 px-2 py-1 text-sm lg:text-lg font-medium bg-neutral-900"
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

export default Portfolio;
