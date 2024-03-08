import { useEffect } from "react"
import { ContentWrapper} from "../../components/ContentWrapper/ContentWrapper.jsx"
import { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import Styles from "./Sortering.module.scss"
import Wave from "../../assets/Images/Imgs/bg-waves-2.svg"
export const Sortering = () => {

    const [sorting, setSorting] = useState([]);

    // til at gemme søgeord
    const [search, setSearch] = useState("")

  

    useEffect(() => {
        const endpoint = "http://localhost:3000/section";

        const getSorting = async () => {
            try {
                const res = await axios(endpoint);
                setSorting(res.data)
                console.log(res)
            } 
            catch (err) {
                console.error(err);
            }
        };
       
        getSorting()
       
    },[])

    return (
        <ContentWrapper title="Sortering | Din guide til en sund affaldssortering">
            <div className={Styles.fullContainer}>
            <section className={Styles.sectionContainer}>
                    <div className={Styles.headerGroup}>
                        <h1>Din guide</h1>
                        <h2>til en sund affaldssortering</h2>
                    </div>
                    <search>
                        <label htmlFor="search"> {/*Opdatere input ved søgeord */}
                            <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Søg på affald" name="search" id="search" />
                        </label>
                        
                    </search>
                    
            </section>

            <section className={Styles.figContainer}>
                {/* Hvis vores søge string er tom forbliver alle elementer uændret mens hvis der er noget i vores string matcher den efter titler*/}
                {sorting?.filter((item) => {
                    {/* Hvis string er tom retun normal element */}
                    return search.toLowerCase() === ''
                    ? item
                : item.title.toLowerCase().includes(search);
                })?.map((item) => {
                    return (
                            <figure key={item.id}  >
                                <Link to={`${item.id}`}>
                                <img src={item.filepath} alt={item.title} />
                                <figcaption  style={{ backgroundColor: `#${item.color}` }}>
                                    <h3>{item.title}</h3>
                                </figcaption>
                                </Link>
                            </figure>
                    )
                })}
            </section>
            </div>
            <img className={Styles.wave} src={Wave} alt="Wave billede til bunden" />
        </ContentWrapper>
    )
}