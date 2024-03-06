import { useEffect } from "react"
import { ContentWrapper} from "../../components/ContentWrapper/ContentWrapper.jsx"
import { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import Styles from "./Sortering.module.scss"
export const Sortering = () => {

    const [sortering, setSortering] = useState([]);
    const [search, setSearch] = useState("")

  

    useEffect(() => {
        const endpoint = "http://localhost:3000/section";

        const getSortering = async () => {
            try {
                const res = await axios(endpoint);
                setSortering(res.data)
                console.log(res)
            } 
            catch (err) {
                console.error(err);
            }
        };
       
        getSortering()
       
    },[])

    return (
        <ContentWrapper title="Sortering | Din guide til en sund affaldssortering">
            <section className={Styles.sectionContainer}>
                    <div className={Styles.headerGroup}>
                        <h1>Din guide</h1>
                        <h2>til en sund affaldssortering</h2>
                    </div>
                    <search>
                        <label htmlFor="search">
                            <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Søg på affald" name="search" id="search" />
                        </label>
                        
                    </search>
                    
            </section>

            <section className={Styles.figContainer}>
                {sortering?.filter((item) => {
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
        </ContentWrapper>
    )
}