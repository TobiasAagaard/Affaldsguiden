import axios from "axios";
import { useEffect, useState } from "react"
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper.jsx";
import Styles from "./Stationer.module.scss"



export const Stationer = () => {
    const [stations, setStations] = useState([]);

  useEffect(() => {
    const endpoint = `http://localhost:3000/orgs?attributes=id,name,address,zipcode,city,longtitude,%20latitude`;

    const getStations = async () => {
      try {
        const res = await axios.get(endpoint);
        console.log(res);
        setStations(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    getStations();
  }, []);

    return (
        <ContentWrapper title="Genbrugsstationer">
            <section className={Styles.wrapper}>
                {stations?.map((item) => {
                    return (
                        <article key={item.id} className={Styles.stationsContainer}>
                            <iframe title="Location" className={Styles.googleMap}  src={`https://maps.google.com/maps?q=${item.longtitude},${item.latitude}&hl=es;&output=embed`}></iframe>
                            <div className={Styles.infoContainer}>
                                <h3>{item.name}</h3>
                                <p>{item.address}</p>
                                <p>{item.zipcode} {item.city}</p>
                            </div>
                        </article>
                    )
                })}
            </section>
        </ContentWrapper>
    )
}