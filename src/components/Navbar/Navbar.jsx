import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Images/Icons/Logo.svg";
import LoginUnlock from "../../assets/Images/Icons/icon-unlock.svg";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import "./Navbar.scss"

export const Navbar = () => {

    return (
        <>
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
                <Link to={"/login"}>
                    <div className="imageContainer">
                        <img src={LoginUnlock} alt="icon for login page" />
                    </div>
                </Link>
                
        </nav>
        <BurgerMenu />
        </>
    )
}