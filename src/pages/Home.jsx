// Components
import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Profil from "../components/Profil";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
// Motion
import { motion } from "framer-motion";
// React Icons
import { IoIosArrowUp } from "react-icons/io"
// Video
import video from "../assets/video/mercury.mp4"


const Home = () => {

    // Scroll event
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {

    const onScroll = (event) => {
      setScrollTop(event.target.documentElement.scrollTop);
      setScrolling(event.target.documentElement.scrollTop > 1400);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, [scrollTop]);


    return (
        <div>
            <Header />
            <div className="container-home" id="home">
                <video src={video} autoPlay muted loop></video>
                <motion.div
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: "2"}}
                >
                    <h1>
                        <span>Frédéric</span><span>Bétaouaf</span>
                    </h1>
                    <h2>
                        <span>Développeur Frontend</span><span>Web & Web mobile</span><span>Freelance</span>
                    </h2>
                </motion.div>
            </div>
            <Profil />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
            {
                scrolling &&(
                    <div className="toTop" onClick={() => window.scrollTo(0, 0)}>
                        <IoIosArrowUp />
                    </div>
                )
            }
        </div>
    );
};

export default Home;