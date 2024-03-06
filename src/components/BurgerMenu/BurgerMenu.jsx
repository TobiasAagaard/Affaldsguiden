import { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginUnlock from "../../assets/Images/Icons/icon-unlock.svg";
import "./BurgerMenu.scss"

export const BurgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false) 
    
    const handleToggle = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <div className="menuStyles" onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "burgerNav open" : "burgerNav"}>
                    <li><NavLink to={"/"} onClick={handleToggle}>Forside</NavLink></li>
                    <li><NavLink to={"/sortering"} onClick={handleToggle}>Sortering</NavLink></li>
                    <li><NavLink to={"/genbrugsstationer"} onClick={handleToggle}>Genbrugsstationer</NavLink></li>
                    <li><NavLink to={"/bestil"} onClick={handleToggle}>Bestil beholder</NavLink></li>
                    <NavLink to={"/login"} onClick={handleToggle}>
                    <div>
                        <img src={LoginUnlock} alt="icon for login page" />
                    </div>
                </NavLink>
            </ul>
        </>
    )

}