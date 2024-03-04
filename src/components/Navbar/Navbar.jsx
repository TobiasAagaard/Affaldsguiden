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
                <li><NavLink>Forside</NavLink></li>
                <li><NavLink>Sortering</NavLink></li>
                <li><NavLink>Genbrugsstationer</NavLink></li>
                <li><NavLink>Bestil beholde</NavLink></li>
            </ul>
            <Link>
                <img src={LoginUnlock} alt="icon for login page" />
            </Link>
        </nav>
    )
}