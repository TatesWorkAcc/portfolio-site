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
            <motion.div className='grid'>
                
            </motion.div>
            <motion.div className='grid'>
                <img src='src/assets/project-2.png' alt='Project 2'></img>
            </motion.div>
            <motion.div className='grid'>

            </motion.div>
            <motion.div className='grid'>
            <img src='src/assets/project 3.png' alt='Project 3'></img>
            </motion.div>
            <motion.div className='grid'>

            </motion.div>
        </motion.div>
    )

}

export default Body