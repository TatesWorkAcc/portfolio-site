import { motion } from "motion/react"

function Body() {
    return (
        <motion.div
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ position: "absolute" }}
        >
            <div className="body-container">
            <motion.div className="grid ">
                <img src="src/assets/project-1.png" alt="Project 1"></img>
            </motion.div>
            <motion.div className="grid font-text">
                <div className="grid-header">
                    <h1 className="project-text-header">
                        News Article Finder - November 2024
                    </h1>
                    <a
                        className="project-text"
                        href="https://github.com/TatesWorkAcc/search-latest-news"
                    >
                        github.com/TatesWorkAcc/search-latest-news
                    </a>
                </div>
                <p className="project-text">
                    Get users input for a topic and displays news about the
                    topic in an orderly fashion (title, image, author, date,
                    description, content, and url). <br></br>
                    <br></br>● Built a news search app using React, fetching
                    articles from the NewsAPI based on user-defined queries.
                    <br></br>
                    <br></br>● Integrated React Hooks (useState, useEffect) to
                    manage API calls and dynamic state updates.<br></br>
                    <br></br>● Displayed article data such as title, image,
                    author, publish date, description, content, and provided
                    clickable links to full articles.<br></br>
                    <br></br>● Implemented responsive CSS styling to ensure the
                    web design pages have correct scalability across devices.
                    <br></br>
                    <br></br>● Improved user experience by filtering out
                    incomplete articles and invalid author data.<br></br>
                </p>
            </motion.div>
            <motion.div className="grid">
                <img src="src/assets/project-2.png" alt="Project 2"></img>
            </motion.div>
            <motion.div className="grid font-text">
                <div className="grid-header">
                    <h1 className="project-text-header">
                        Weather App - November 2024
                    </h1>
                    <a
                        className="project-text"
                        href="https://github.com/TatesWorkAcc/search-weather-app"
                    >
                        github.com/TatesWorkAcc/search-weather-app
                    </a>
                </div>
                <p className="project-text">
                    Gets user input for what city they live in, gives today and
                    the next 5 days temp, condition, description, and humidity{" "}
                    <br></br>
                    <br></br>● Designed a weather forecasting app using React
                    and OpenWeatherMap API to provide real-time weather updates.{" "}
                    <br></br>
                    <br></br>● Implemented a search feature to fetch data based
                    on city input, displaying current conditions and a 5-day
                    forecast. <br></br>
                    <br></br>● Displayed key metrics such as temperature,
                    conditions, humidity, and descriptions in a user-friendly
                    format. <br></br>
                    <br></br>● Default data for New York City ensured a
                    functional interface upon load. <br></br>
                    <br></br>● Utilized responsive design principles for mobile
                    and desktop views. <br></br>
                    <br></br>
                </p>
            </motion.div>
            <motion.div className="grid">
                <img src="src/assets/project 3.png" alt="Project 3"></img>
            </motion.div>
            <motion.div className="grid font-text">
                <div className="grid-header">
                    <h1 className="project-text-header">
                        Personal Budget App - November 2024
                    </h1>
                    <a
                        className="project-text"
                        href="https://github.com/TatesWorkAcc/personal-budget-tracker"
                    >
                        github.com/TatesWorkAcc/personal-budget-tracker
                    </a>
                </div>
                <p className="project-text">
                    Enter your income and your expenses, get your total amount
                    of income after expenses have been paid. <br></br>
                    <br></br>● Developed a financial tracking tool using React
                    to manage income and expenses.<br></br>
                    <br></br>● Incorporated state management for real-time
                    updates of financial categories (e.g., housing,
                    transportation, food).<br></br>
                    <br></br>● Created reusable functions such as
                    handleTotalIncome and handleAfterExpenses for dynamic
                    calculations.<br></br>
                    <br></br>● Employed Prettier and ESLint to maintain clean
                    and error-free code formatting.
                </p>
            </motion.div>
            </div>
        </motion.div>
    )
}

export default Body
