// React
import { useState } from "react";
// Component layout
import BurgerMenu from "./BurgerMenu";
// Data
import data from "../../data/data_links";
// Icons
import { RxHamburgerMenu } from "react-icons/rx";
// Motion
import { motion } from "framer-motion"

const Header = () => {

    const [burgerMenu, setBurgerMenu] = useState(false);

    const handleBurgerMenu = () => {
        setBurgerMenu(!burgerMenu);
    }

    return (
        <div className="container-header">
            <div
            className="container-header--navbar">
                <nav>
                    <ul>
                        {
                            data.map((element, index) => (
                                
                                <li key={index}><a href={element.link}>{element.name}</a></li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div 
            className="container-header--menu-burger">
                <RxHamburgerMenu onClick={handleBurgerMenu} />
            </div>
            {burgerMenu && <BurgerMenu setBurgerMenu={setBurgerMenu} />}
        </div>
    );
};

export default Header;