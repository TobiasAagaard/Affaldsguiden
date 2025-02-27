import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider.jsx"
import LoginUnlock from "../../assets/Images/Icons/icon-unlock.svg";
import Profile from "../../assets/Images/Icons/Profile.svg"
import "./BurgerMenu.scss";


export const BurgerMenu = () => {


    const { loginData } = useAuth() 
    const [menuOpen, setMenuOpen] = useState(false) 
    
    const handleToggle = () => {
        setMenuOpen(!menuOpen)
        
        document.body.style.overflowY = document.body.style.overflowY == 'hidden' ? 'visible'  : 'hidden';
        
    } 
    

    return (
        <>
            <div className={menuOpen ? "menuStyles start" : "menuStyles"} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
      
            <ul className={menuOpen ? "burgerNav open" : "burgerNav"} >
                    <li><NavLink to={"/"} onClick={handleToggle}>Forside</NavLink></li>
                    <li><NavLink to={"/sortering"} onClick={handleToggle}>Sortering</NavLink></li>
                    <li><NavLink to={"/genbrugsstationer"} onClick={handleToggle}>Genbrugsstationer</NavLink></li>
                    <li><NavLink to={"/bestil"} onClick={handleToggle}>Bestil beholder</NavLink></li>
                    <NavLink to={"/login"} onClick={handleToggle}> {!loginData ? 
                (
                    <div className="imageContainer">
                        <img src={LoginUnlock} alt="icon for login page" />
                    </div>
                ) : (
                    <div className="imageContainer">
                        <img src={Profile} className="profileImg" alt="icon for login page" />
                    </div>
                )
                }
                </NavLink>
            </ul>
        </>
    )

}