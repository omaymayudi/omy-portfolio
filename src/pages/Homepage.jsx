import About from "@/components/layouts/About";
import Experience from "@/components/layouts/Experience";
import Hero from "@/components/layouts/Hero";
import Portfolio from "@/components/layouts/Portfolio";
import Skills from "@/components/layouts/Skills";
import Contact from "@/components/layouts/Contact";
import ScrollUp from "@/components/fragments/ScrollUp";

const Homepage = () => {
  return (
    <>
      <div className="">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <ScrollUp />
      </div>
    </>
  );
};

export default Homepage;
