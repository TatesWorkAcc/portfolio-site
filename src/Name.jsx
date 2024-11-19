import { motion } from "motion/react";
function Name() {
  return (
    <>
      <motion.div className="name-container">
        <section id="top"></section>
        <h1 className="intro name-text font-text">Brandon Tate</h1>
        <h2 className="intro profession-text font-text">Front End Developer</h2>
      </motion.div>
    </>
  );
}

export default Name;
