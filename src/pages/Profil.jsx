// Motion
import { motion } from "framer-motion";
// Components layout
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
// Components utils
import LeftBtn from "../components/utils/LeftBtn";
import RightBtn from "../components/utils/RightBtn";
// Picture
import { moi } from "../assets/img";
import { NavLink } from "react-router-dom";

const Profil = () => {
    return (
        <div>
            <Header />
            <div className="container-profil">
                <motion.div
                animate={{
                    scale: [1 , 1.1, 1]
                }}
                transition={{
                    duration: "2",
                    ease: "easeInOut",
                    repeatDelay: 6
                }}
                className="container-profil--picture">
                    <img src={moi} alt="photo du créateur du portfolio" />
                </motion.div>
                <div className="container-profil--text">
                  <p>Je m'appelle Frédéric Bétaouaf, je suis sortie de l'école de formation O'clock où j'ai pu faire les deux modules (PHP et JS).</p>
                  <p>Cela va faire bientôt 1.5 an que je code et je me spécialise comme Développeur Frontend.</p>
                  <p>Je pratique principalement React / Scss - Tailwind mais je fais également du JS / TS / Vue / Next - Bootstrap / Material-UI.</p>
                  <p>Concernant le back, j'ai des connaissances en Php / Laravel / Node / Express / PostgreSQL / mySQL / MongoDB.</p>
                  <p>Je maîtrises divers outils comme VScode / Github / CLI / Firebase / Stripe et j'ai des bases sur Postman / Compass.</p>
                  <p>J'apprend également pendant mon temps libre la 3D (Threejs / Blender). En effet, je penses que la 3D sera de plus en plus présente sur les sites dans les années à venir.</p>
                  <p>Je vous laisse en voir plus sur mes projets et/ou compétences.</p>

                  <div className="container-profil--text-stack">
                        <NavLink to="https://frederic-betaouaf-portfolio.netlify.app/projets">
                            <button>Voir mes projets</button>
                        </NavLink>
                        <NavLink to="https://frederic-betaouaf-portfolio.netlify.app/competences">
                            <button>Voir mes compétences</button>
                        </NavLink>
                  </div>
                </div>
            </div>
            <div>
                <LeftBtn left={"/"} />
                <RightBtn right={"/projets"}/>
            </div>
            <Footer />
        </div>
    );
};

export default Profil;