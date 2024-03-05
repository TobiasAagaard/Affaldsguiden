import { Link } from "react-router-dom"
import Styles from "./Footer.module.scss"
import Logo from "../../assets/Images/Icons/Logo-white.svg"
import ArrowUp from "../../assets/Images/Icons/icon-arrow-up.svg"

export const Footer = () => {
    return (
        <footer>
            <section className={Styles.logoSection}>
                <div>
                    <img src={Logo} alt="Hvidt logo" />
                    <p>Vi arbejder for at informere om korrekt affaldssortering. Ved at sortere hjælper du os, men også klimaet.</p>
                </div>
                <p>©2023 Affaldsguiden.</p>
            </section>
            <section className={Styles.backToTop}>
            <Link 
                onClick={() => {
                    window.scroll(0,0)
                }}
            >
            <p>Back to top</p>
            <img src={ArrowUp} alt="pill up" />
        </Link>
            </section>
        </footer>
    )
}