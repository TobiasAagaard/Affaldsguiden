import { Link } from "react-router-dom";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { Header } from "../../components/Header/Header";
import Guide from "../../assets/Images/Imgs/Frontpage1.webp"
import Affaldsbeholder from "../../assets/Images/Imgs/Frontpage2.webp"
import Styles from "./Frontpage.module.scss"
import Wave from "../../assets/Images/Imgs/bg-wave-1.svg"


export const Frontpage = () => {
    return (
    <>
    <ContentWrapper title="Forside | Find og anmeld genbrugsstationer">
       <Header />
       <section className={Styles.sectionContainer}>
        <article>
                <h2>Din <span> guide til sortering </span></h2>
                <p>Her kan du se hvordan du skal sortere og hvad der skal i hvilke
                beholdere. Du får også tips og tricks til, hvordan du gør det nemt
                 at sortere hjemme hos dig.
                 </p>
                 <div className={Styles.btnContainer}>
                    <Link to={'/sortering'} className={Styles.mainBtn}>
                        <button>Se affaldsguide</button>
                    </Link>
                    <Link to={'/bestil'} className={Styles.defBtn}>
                        <button>Bestil storskrald</button>
                    </Link>
                 </div>
            </article>
            <figure>
                <img src={Guide} alt="Billede tilhøre se affaldsguide section" />
            </figure>
        </section>
        <section className={Styles.sectionContainer}>
            <figure>
                <img src={Affaldsbeholder} alt="Billede tilhøre Bestil din nye affaldsbeholder section" />
            </figure>
            <article>
                <h2>Bestil <span> din nye affaldsbeholder </span></h2>
                <p>when an unknown printer took a galley of type and scramble it to
                make a type specimen book. It has survived not only
                </p>
                <div className={Styles.btnContainer}>
                    <Link to={'/bestil'} className={Styles.mainBtn} style={{width: "30%"}}>
                    <button>Bestil nu</button>
                    </Link>
                </div>
            </article>
            
        </section>
        <img className={Styles.wave} src={Wave} alt="Wave billede til bunden" />
    </ContentWrapper>
    </>
    )
}