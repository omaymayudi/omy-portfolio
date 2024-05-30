import { CONTACT } from "../../constants";
import TitleSection from "../elements/TitleSection";
import { motion } from "framer-motion";

const Contect = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: +100 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.3,
          delay: 0.5,
        }}
      >
        <TitleSection title="Get In Touch" />
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: +100 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.3,
          delay: 1.5,
        }}
        className="text-center tracking-tighter"
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#">{CONTACT.email}</a>
      </motion.div>
    </div>
  );
};

export default Contect;
