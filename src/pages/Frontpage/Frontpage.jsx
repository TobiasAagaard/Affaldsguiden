import { Link } from "react-router-dom";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { Header } from "../../components/Header/Header";
import Metal from "../../assets/Images/Imgs/trashcan_metal.webp"
import Trash from "../../assets/Images/Imgs/recycling_trashcans.webp"
import Styles from "./Frontpage.module.scss"


export const Frontpage = () => {
    return (
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
                    <button className={Styles.mainBtn}>
                        <Link >Se affaldsguide</Link>
                    </button>
                    <button className={Styles.defBtn}>
                        <Link >Bestil storskrald</Link>
                    </button>
                 </div>
            </article>
            <figure>
                <img src={Metal} alt="" />
            </figure>
        </section>
        <section className={Styles.sectionContainer}>
            <figure>
                <img src={Trash} alt="" />
            </figure>
            <article>
                <h2>Bestil <span> din nye affaldsbeholder </span></h2>
                <p>when an unknown printer took a galley of type and scramble it to
                make a type specimen book. It has survived not only
                </p>
                <div className={Styles.btnContainer}>
                    <button className={Styles.mainBtn} style={{width: "30%"}}>
                        <Link>Bestil nu</Link>
                    </button>
                </div>
            </article>
        </section>
    </ContentWrapper>
    )
}