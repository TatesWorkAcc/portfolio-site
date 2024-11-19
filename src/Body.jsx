import { motion } from 'motion/react'

function Body(){

    return(
        <motion.div 
        className="body-container"
        initial={{ opacity: 0, y: 50}}
        whileInView={{opacity:1, y: 0}}
        viewport={{once: false}}
        transition={{ duration: 1}}
        style={{ position: 'absolute'}}
        >
            <motion.div className='grid '>
                <img src='src/assets/project-1.png' alt='Project 1'></img>
            </motion.div>
            <motion.div className='grid font-text'>
                <h1>News Article Finder - November 2024</h1>
                <a className='project-text' href='https://github.com/TatesWorkAcc/search-latest-news'>https://github.com/TatesWorkAcc/search-latest-news</a>
                <p className='project-text'>  
                Get users input for a topic and displays news about the topic in an orderly fashion (title, image, author, date, description, content, and url). <br></br><br></br>
                    ●	Built a news search app using React, fetching articles from the NewsAPI based on user-defined queries.<br></br><br></br>
                    ●	Integrated React Hooks (useState, useEffect) to manage API calls and dynamic state updates.<br></br><br></br>
                    ●	Displayed article data such as title, image, author, publish date, description, content, and provided clickable links to full articles.<br></br><br></br>
                    ●	Implemented responsive CSS styling to ensure the web design pages have correct scalability across devices.<br></br><br></br>
                    ●	Improved user experience by filtering out incomplete articles and invalid author data.<br></br>
</p>
            </motion.div>
            <motion.div className='grid'>
                <img src='src/assets/project-2.png' alt='Project 2'></img>
            </motion.div>
            <motion.div className='grid font-text'>

            </motion.div>
            <motion.div className='grid'>
            <img src='src/assets/project 3.png' alt='Project 3'></img>
            </motion.div>
            <motion.div className='grid font-text'>

            </motion.div>
        </motion.div>
    )

}

export default Body