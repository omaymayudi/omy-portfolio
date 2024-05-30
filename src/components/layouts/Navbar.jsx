// import { useLocation } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import logo from "../../assets/logo-omy.png";
const Navbar = () => {
  // const pathName = useLocation();

  return (
    <nav className="flex items-center justify-between mt-8 md:mx-[70px] lg:mt-16">
      <div className="mx-2 flex flex-shrink-0 items-center">
        <motion.img
          whileHover={{
            scale: 2,
            textShadow: "0px 0px 20px blue",
          }}
          className="w-14 lg:w-24"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-4 flex items-center justify-center text-2xl lg:text-4xl gap-4 lg:gap-12">
        <motion.span
          whileHover={{
            scale: 2,
            delay: 1,
          }}
        >
          <a href="https://www.linkedin.com/in/mayudi-bin-jakaria-104828236/">
            <FaLinkedin />
          </a>
        </motion.span>
        <motion.span
          whileHover={{
            scale: 2,
            delay: 1,
          }}
        >
          <a href="https://www.instagram.com/omaymayud">
            <FaInstagram />
          </a>
        </motion.span>

        <motion.span
          whileHover={{
            scale: 2,
            delay: 1,
          }}
        >
          <a href="https://github.com/omaymayudi">
            <FaGithub />
          </a>
        </motion.span>

        <motion.span
          whileHover={{
            scale: 2,
            delay: 1,
          }}
        >
          <a href="https://x.com/omaymayud05">
            <FaXTwitter />
          </a>
        </motion.span>
      </div>
    </nav>
  );
};

export default Navbar;
