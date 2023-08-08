// React
import { Link } from "react-router-dom";
// Data
import {
  dataBack,
  dataFront,
  dataHobbies,
  dataOther,
  dataSoftSkills,
} from "../data/data_skills";
// Picture
import { cv } from "../assets/img";
import { cvDesktop, cvImp } from "../assets/CV";
// Motion
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="background-dark" id="skills">
      <div className="container-skills">
        <div className="container-skills--box">
          <div className="container-skills--box-hard-skills">
            <h2>Hard Skills</h2>
            <div>
              <h3>Front : </h3>
              <motion.ul
              initial={{y: -20, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              viewport={{ once: true }}
              transition={{duration: "2"}}
              >
                {dataFront.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </motion.ul>
            </div>
            <div>
              <h3>Back : </h3>
              <motion.ul
              initial={{y: -20, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}              
              viewport={{ once: true }}
              transition={{duration: "1.5"}}
              >
                {dataBack.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </motion.ul>
            </div>
            <div>
              <h3>Outils : </h3>
              <motion.ul
              initial={{y: -20, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}              
              viewport={{ once: true }}
              transition={{duration: "1.5"}}
              >
                {dataOther.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </motion.ul>
            </div>
            <div>
              <h3>3D : </h3>
              <motion.ul
              initial={{y: -20, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}              
              viewport={{ once: true }}
              transition={{duration: "1.5"}}
              >
                {dataHobbies.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </motion.ul>
            </div>
          </div>
          <div className="container-skills--box-soft-skills">
            <h2>Soft Skills</h2>
            <motion.ul
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}            
            viewport={{ once: true }}
            transition={{duration: "1.5"}}
            >
              {dataSoftSkills.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </motion.ul>
          </div>
        </div>
        <div className="container-skills--box-cv">
          <h2>Curriculum Vitae</h2>
          <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}            
          viewport={{ once: true }}
          transition={{duration: "2"}}
          >
            <img src={cv} alt="curriculum vitae"/>
          </motion.div>
          <div className="container-skills--box-cv-button">
            <div>
              <p>CV format ordi (couleur identique)</p>
              <Link to={cvDesktop} target="_blank">
                <motion.button
                animate={{scale: [1, 1.1, 1]}}
                transition={{
                    repeat: Infinity,
                    repeatDelay: 2,
                    duration: "2",
                    ease: "easeInOut",
                }}
                >
                  Télécharger le CV
                </motion.button>
              </Link>
            </div>
            <div>
              <p>CV format imprimable (économie couleur)</p>
              <Link to={cvImp} target="_blank">
                <motion.button
                animate={{scale: [1, 1.1, 1]}}
                transition={{
                repeat: Infinity,
                repeatDelay: 2,
                duration: "2",
                ease: "easeInOut",
                }}
            >
              Télécharger le CV
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
