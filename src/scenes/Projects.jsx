import React from "react";
import LineGradient from "../components/LineGradient";
import {  motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const ProjectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center text-center p-16 text-deep-blue`
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={ProjectVariant} className="relative">
      <div className={overlayStyles}>
    <p className="text-2xl font-playfair-display">{title}</p>
    <p className="mt-7">{subtitle}</p>
      </div>
      <img src={`./assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair-display font-semibold text-4xl">
            MY <span className="text-red">Projects</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-7">Below I have a few examples of my projects.</p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair-display font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1"  />
          <Project title="Project 2" />
          {/* Row 2 */}
          <Project title="project 3" />
          <Project title="project 4" />
          <Project title="project 5" />
          {/* row 3 */}
          <Project title="project 6" />
          <Project title="project 7" />
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
