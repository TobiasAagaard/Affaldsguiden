import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper.jsx";
import Styles from "./Stationer.module.scss";
import Wave from "../../assets/Images/Imgs/bg-wave-1.svg"



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
            <section className={Styles.mainContainer}>
                {stations?.slice(0,5)?.map((item) => {
                    return (
                        <article key={item.id} className={Styles.stationsContainer}>
                            <iframe title="Location" className={Styles.googleMap}  src={`https://maps.google.com/maps?q=${item.longtitude},${item.latitude}&hl=es;&output=embed`} />
                            <Link to={`${item.id}`}>
                            <div className={Styles.infoContainer}>
                                <h3>{item.name}</h3>
                                <p>{item.address}</p>
                                <p>{item.zipcode} {item.city}</p>
                            </div>
                            </Link>
                        </article>
                    )
                })}
            </section>
            <img className={Styles.wave} src={Wave} alt="Wave billede til bunden" />
        </ContentWrapper>
    )
}