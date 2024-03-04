import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Images/Logo.svg";
import LoginUnlock from "../../assets/Images/icon-unlock.svg"
import "./Navbar.scss"

export const Navbar = () => {

    return (
        <nav className="navContainer">
                <Link to={"/"}>
                    <img src={Logo} alt="Logo" />
                </Link>
                <ul>
                    <li><NavLink to={"/"}>Forside</NavLink></li>
                    <li><NavLink to={"/sortering"}>Sortering</NavLink></li>
                    <li><NavLink to={"/genbrugsstationer"}>Genbrugsstationer</NavLink></li>
                    <li><NavLink to={"/bestil"}>Bestil beholde</NavLink></li>
                </ul>
                <Link to={"/login"}>
                    <img src={LoginUnlock} alt="icon for login page" />
                </Link>
        </nav>
    )
}