import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper";
import { Reviews } from "../../../components/Reviews/Reviews/Reviews";
import Wave from "../../../assets/Images/Imgs/bg-wave-1.svg"
import Styles from "./StationerDetails.module.scss";


export const StationerDetails = () => {

    const [details, setDetails] = useState([])
    const { id } = useParams();

    useEffect (() => {
        const endpoint = (`http://localhost:3000/orgs/${id}`)

        const getDetails = async () => {
            try {
                const res = await axios.get(endpoint);
                setDetails(res.data)
                console.log(res)
            } 
            catch (err) {
                console.error(err)
            }
        }
        getDetails()
    }, [id])

   
    return (
      <>
        {details ? (
        <ContentWrapper title={`Genbrugsstationer | ${details.name}`}>
          <section className={Styles.locationContainer}>
        
            <figure key={details.id}>
            <iframe title="Location"  src={`https://maps.google.com/maps?q=${details.longtitude},${details.latitude}&hl=es;&output=embed`} />
              <figcaption>
                <h2>{details.name}</h2>
                
                  <p>{details.address}</p>
                  <p>
                    {details.zipcode}  {details.city}
                  </p>
                  <p>{details.country}</p>
              </figcaption>
            </figure>
       
          <div className={Styles.reviewsContainer}>
            <Reviews />
          </div>
        </section>
        <img className={Styles.wave} src={Wave} alt="Wave billede til bunden" />
        </ContentWrapper>
         ) : null}
       </>
    )
} 