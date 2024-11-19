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
          <a className="no-underline" href="https://github.com/TatesWorkAcc"
          target="_blank" rel="noopener noreferrer">
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
            target="_blank" rel="noopener noreferrer"
          >
            My Linkedin
          </a>
        </motion.button>
      </div>
      <div className="header-grid-2 projects-button">
          <motion.button
          className="header-button res-pro"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="./Resume.pdf"
          target="_blank" rel="noopener noreferrer">
          Resume
          </a>
        </motion.button>
        <motion.button
          className="header-button res-pro"
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
