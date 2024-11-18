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

        </motion.div>
    )

}

export default Body