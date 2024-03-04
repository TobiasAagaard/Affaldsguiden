import { Link } from "react-router-dom";
import { HeroSlider } from "../Slider/Slider.jsx";
import Styles from "./Header.module.scss"

export const Header = () => {
    return (
        <header>
            <div className={Styles.hero}>
             <HeroSlider />
            
            <div className={Styles.container}>
                <h2>Find og anmeld genbrugsstationer</h2>
                <div className={Styles.buttonContainer}>
                    <Link>Find station</Link>
                    <Link>Log ind</Link>
                </div>
            </div>
            </div>
        </header>

    )
}