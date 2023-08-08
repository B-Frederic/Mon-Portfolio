// Motion
import { motion } from "framer-motion";
// Picture
import { moi } from "../assets/img";


const Profil = () => {

    return (
        <div className="background-dark" id="profil">
            <div className="container-profil">
                <motion.div
                animate={ screen.width > 900 ? {scale: [1 , 1.05, 1]} : ""}
                transition={{
                    duration: "6",
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
                className="container-profil--picture">
                    <img src={moi} alt="photo du créateur du portfolio" />
                </motion.div>
                <div className="container-profil--text">

                    <motion.p
                    initial={ screen.width > 900 ? {x: -100, opacity: "0"} : ""}
                    whileInView={ screen.width > 900 ? {x: 0, opacity: 1} : ""}
                    viewport={{ once: true }}
                    transition={{duration: "1.5", delay: "0"}}
                    >
                        Développeur Frontend spécialisé en React / Next / Typescript, je suis un grand passionné depuis mes premières lignes de code en 2021.
                    </motion.p>

                    <motion.p
                    initial={ screen.width > 900 ? {x: -100, opacity: "0"} : ""}
                    whileInView={ screen.width > 900 ? {x: 0, opacity: 1} : ""}
                    viewport={{ once: true }}
                    transition={{duration: "1.5", delay: "0.2"}}
                    >
                    Réactif, attentif, déterminé et à l'écoute, je sais répondre aux besoins de mes clients et suis en mesure de surmonter les difficultés pour mener le projet à son terme et pour atteindre les objectifs.
                    Très pointu sur la rigueur du code pour des questions de performance et de maintenabilité et ayant le souci du détail et de la bonne expérience utilisateur, je suis force de proposition pour aider à la réalisation et à la résolution de problème.
                    Ma facilité d'adaptation me permet de rapidement m'intégrer et de m'entendre avec les membres de l'équipe, afin de travailler dans les meilleures conditions possibles pour une parfaite collaboration et productivité.
                    </motion.p>

                    <motion.div
                    initial={ screen.width > 900 ? {x: -100, opacity: "0"} : ""}
                    whileInView={ screen.width > 900 ? {x: 0, opacity: 1} : ""}
                    viewport={{ once: true }}
                    transition={{duration: "1.5", delay: "0.4"}}
                    >
                        <p>Mes champs de compétences :</p>
                        <ul>
                            <li>React / Next</li>
                            <li>Redux / Redux Toolkit</li>
                            <li>Typescript</li>
                            <li>Css / Scss / Tailwind</li>
                        </ul>
                    </motion.div>

                    <motion.div
                    initial={ screen.width > 900 ? {x: -100, opacity: "0"} : ""}
                    whileInView={ screen.width > 900 ? {x: 0, opacity: 1} : ""}
                    viewport={{ once: true }}
                    transition={{duration: "1.5", delay: "0.6"}}
                    >
                        <p>En constante veille, je continue de me perfectionner dans ces langages et d'en apprendre de nouveaux tels que Vue.js, Svelte, Three.js. Par ailleurs, je reste en alerte sur les changements de versions, syntaxes et bonnes pratiques, ainsi qu'à l'arrivée de nouvelles technos qui pourraient être utilisés pour des projets futurs.</p>

                        <p>Je suis disponible, très motivé, prêt à m'adapter et à apprendre de nouveaux langages afin de répondre aux besoins actuels et futurs du client.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Profil;