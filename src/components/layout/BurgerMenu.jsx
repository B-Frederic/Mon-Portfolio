// Data
import dataLinks from "../../data/data_links";
// Icons
import { RxCross2 } from "react-icons/rx";
// Motion
import { motion } from "framer-motion"

const BurgerMenu = ({ setBurgerMenu }) => {

    const handleCloseBurgerMenu = () => {
        setBurgerMenu(false);
    };

    return (
        <motion.div
        initial={{x: -300}}
        animate={{x: 0}}
        transition={{
            duration: "0.5"
        }}
        className="container-responsive-menu">
            <div>
                <nav>
                    <ul>
                        {
                            dataLinks.map((element, index) => (          
                                <a key={index} href={element.link} onClick={handleCloseBurgerMenu}><li>{element.name}</li></a>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div
            className="container-responsive-menu--close">
                <RxCross2 onClick={handleCloseBurgerMenu} />
            </div>
        </motion.div>
    );
};

export default BurgerMenu;