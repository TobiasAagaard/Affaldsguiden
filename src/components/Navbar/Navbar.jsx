import { Link, NavLink } from "react-router-dom";

import Logo from "../../assets/Images/Icons/Logo.svg";
import LoginUnlock from "../../assets/Images/Icons/icon-unlock.svg";
import Profile from "../../assets/Images/Icons/Profile.svg"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useAuth } from "../../Providers/AuthProvider.jsx";
import "./Navbar.scss"

export const Navbar = () => {
    const { loginData } = useAuth() 

    return (
        <>
        <div className="topNav">
        </div>
        <nav className="navContainer">
                <Link to={"/"}>
                    <img src={Logo} alt="Logo" />
                </Link>
                <ul className="mainNav">
                    <li><NavLink to={"/"}>Forside</NavLink></li>
                    <li><NavLink to={"/sortering"}>Sortering</NavLink></li>
                    <li><NavLink to={"/genbrugsstationer"}>Genbrugsstationer</NavLink></li>
                    <li><NavLink to={"/bestil"}>Bestil beholder</NavLink></li>
                </ul>
                <Link to={"/login"}> {!loginData ? 
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
                </Link>
                
        </nav>
        <BurgerMenu />
        </>
        
    )
}