import { motion } from "motion/react"

function SkillsContacts(){

    return(
        <div className="skillscontacts-container">
        <motion.div className="skill-container"
        initial={{ opacity: 0, y: 50}}
        whileInView={{opacity:1, y: 0}}
        transition={{ duration: 1}}
        style={{position: "absolute"}}>

                    <h3 className="intro skills-text font-text">Skills</h3>
                        <div className="grid-spacing">
                            <div className="font-text">
                                <h3>Languages:</h3> <h3>C++, JavaScript, Python</h3>
                            </div>  
                            <div className="font-text">
                                <h3>Web Development:</h3> <h3>HTML, CSS, React, Responsive Design</h3>
                            </div>
                            <div className="font-text">  
                                <h3>Framework & Tools:</h3> <h3>State Management, Prettier, Eslint, Git</h3>
                            </div> 
                        </div>
                    <div className="contact-grid">
                        <h3 className="intro skills-text font-text">Contacts</h3>
                        <div className="grid-spacing">
                            <div className="font-text">
                                <h3 >Email:</h3> <h3>TatesWorkAcc@gmail.com</h3>
                            </div>
                            <div className="font-text">
                                <h3 >Linkedin:</h3> <h3><a href="https://www.linkedin.com/in/brandon-tate-2bb32b2b1/">linkedin.com/in/brandon-tate-2bb32b2b1/</a> </h3>
                            </div>
                            <div className="font-text">
                                <h3 >GitHub:</h3> <h3><a href="https://github.com/TatesWorkAcc">github.com/TatesWorkAcc/</a> </h3>
                            </div>
                            <div className="font-text">
                                <h3 className="font-text">Phone Number:</h3> <h3>702-559-8889</h3>
                            </div>
                        </div>
                    </div>
        </motion.div>
    </div>
    )

}
export default SkillsContacts