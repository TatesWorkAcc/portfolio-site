import { motion } from "motion/react";
function Body() {
  const animationVariants = {
    hidden: { opacity: 0, x: -100 }, // Starts off screen to the left
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Slides in
  };

  const animationVariantsRight = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Slide in
  };
  return (
    
    <motion.div
      className="put-under"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50%", threshold: 0.4 }}
      transition={{ duration: 1 }}
      style={{ position: "absolute" }}
    >
      <section id="projects"></section>  
      <div className="projects-title-container">
        <h1 className="projects-title font-text">Projects</h1>
      </div>
    
      <div className="body-container">
        <motion.div
          className="grid project-pic-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={animationVariants}
        >
          <img src="/project-1.png" alt="Project 1"></img>
        </motion.div>
        <motion.div
          className="grid font-text project-text-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={animationVariantsRight}
        >
          <div className="grid-header">
            <h1 className="project-text-header">
              News Article Finder - November 2024
            </h1>
            <a
              className="project-text"
              href="https://github.com/TatesWorkAcc/search-latest-news"
              target="_blank" rel="noopener noreferrer"
            >
              github.com/TatesWorkAcc/search-latest-news 🔗
            </a>
          </div>
          <p className="project-text">
            A news search app that allows users to input a topic and displays
            relevant articles in an organized format, including title, image,
            author, date, description, content, and URL. <br></br>
            <br></br>● Built the app using React and NewsAPI, fetching articles
            based on user-defined queries.
            <br></br>
            <br></br>● Integrated React Hooks (useState, useEffect) for API
            calls and dynamic state management.<br></br>
            <br></br>● Displayed detailed article data, including clickable
            links to full articles.<br></br>
            <br></br>● Implemented responsive CSS for mobile-friendly design
            across devices.
            <br></br>
            <br></br>● Enhanced user experience by filtering out incomplete
            articles and invalid author data.
            <br></br>
          </p>
        </motion.div>
        <motion.div
          className="grid project-pic-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={animationVariants}
        >
          <img src="/project-2.png" alt="Project 2"></img>
        </motion.div>
        <motion.div
          className="grid font-text project-text-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={animationVariantsRight}
        >
          <div className="grid-header">
            <h1 className="project-text-header">Weather App - November 2024</h1>
            <a
              className="project-text"
              href="https://github.com/TatesWorkAcc/search-weather-app"
              target="_blank" rel="noopener noreferrer"
            >
              github.com/TatesWorkAcc/search-weather-app 🔗
            </a>
          </div>
          <p className="project-text">
            A weather app that provides current and 5-day forecasts based on the
            user's input for their city, displaying key metrics like
            temperature, conditions, and humidity. <br></br>
            <br></br>● Developed using React and OpenWeatherMap API to fetch
            real-time weather data. <br></br>
            <br></br>● Enabled users to search weather by city and view a 5-day
            forecast. <br></br>
            <br></br>● Displayed temperature, weather conditions, humidity, and
            descriptions in a clear, user-friendly interface. <br></br>
            <br></br>● Ensured functionality with default weather data for New
            York City. <br></br>
            <br></br>● Applied responsive design principles to ensure
            compatibility across mobile and desktop views.
            <br></br>
            <br></br>
          </p>
        </motion.div>
        <motion.div
          className="grid project-pic-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={animationVariants}
        >
          <img src="/project-3.png" alt="Project 3"></img>
        </motion.div>
        <motion.div
          className="grid font-text project-text-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={animationVariantsRight}
        >
          <div className="grid-header">
            <h1 className="project-text-header">
              Personal Budget App - November 2024
            </h1>
            <a
              className="project-text"
              href="https://github.com/TatesWorkAcc/personal-budget-tracker"
              target="_blank" rel="noopener noreferrer"
            >
              github.com/TatesWorkAcc/personal-budget-tracker 🔗
            </a>
          </div>
          <p className="project-text">
            A financial tracker app where users can input their income and
            expenses to see their total income after expenses are deducted.{" "}
            <br></br>
            <br></br>● Developed a financial tracking tool using React to manage
            income and expenses.<br></br>
            <br></br>● Incorporated state management to dynamically update
            financial categories (e.g., housing, transportation, food).<br></br>
            <br></br>● Created reusable functions such as handleTotalIncome and
            handleAfterExpenses for dynamic calculations.<br></br>
            <br></br>● Used Prettier and ESLint to maintain clean and error-free
            code formatting.
          </p>
        </motion.div>
      </div>
      <div className="back-to-top-container">
        <motion.button
          className="back-to-top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          >
            <a href="#top" className="no-underline">
            Back to top
            </a>
        </motion.button>
      </div>
    </motion.div>
    
  );
}

export default Body;
