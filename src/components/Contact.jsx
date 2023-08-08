// React
import {  Link } from "react-router-dom";
// Icons
import { BsLinkedin } from "react-icons/bs";
import { TbMail } from "react-icons/tb";
// Motion
import { motion } from "framer-motion";

const Contact = () => {

    return (
        <div className="background-dark" id="contact">
            <div className="container-contact">
                <h2>Contact</h2>
                <div className="container-contact--linkedin">
                    <p>
                        Contactez moi sur Linkedin :
                    </p>
                    <motion.div
                    animate={{rotate: [0, 10, 0, -10, 0, 10, 0, -10, 0, 10, 0, -10, 0]}}
                    transition={{
                        repeat: Infinity,
                        repeatDelay: 2,
                        duration: "0.6",
                        ease: "easeInOut",
                    }}
                    whileInView={{x: 0, opacity: 1}}
                    >
                        <Link to="https://www.linkedin.com/in/frederic-betaouaf/" target="_blank" aria-label="Allez sur mon Linkedin">
                            <BsLinkedin className="container-contact--linkedin-icon" />
                        </Link>
                    </motion.div>
                </div>
                <div className="container-contact--email">
                    <p>
                        Ou directement par email :
                    </p>
                    <motion.div
                    animate={{rotate: [0, -10, 0, 10, 0, -10, 0, 10, 0, -10, 0, 10, 0]}}
                    transition={{
                        repeat: Infinity,
                        repeatDelay: 2,
                        duration: "0.6",
                        ease: "easeInOut",
                    }}
                    className="container-contact--email-icon"
                    >
                        <Link to="mailto:frederic.betaouaf33@gmail.com" target="_blank" aria-label="M'envoyez un email">
                            <TbMail />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;