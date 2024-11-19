import { motion } from "motion/react";
function Header() {
  return (
    <div className="header-container">
      <div className="header-grid">
        <motion.button
          className="link header-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a className="no-underline" href="https://github.com/TatesWorkAcc">
            My Github
          </a>
        </motion.button>
        <motion.button
          className="link header-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            className="no-underline"
            href="https://www.linkedin.com/in/brandon-tate-2bb32b2b1/"
          >
            My Linkedin
          </a>
        </motion.button>
      </div>
      <div className="header-grid projects-button">
        <motion.button
          className="header-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#projects" className="no-underline">
          Projects
          </a> 
        </motion.button>
      </div>
    </div>
  );
}

export default Header;
