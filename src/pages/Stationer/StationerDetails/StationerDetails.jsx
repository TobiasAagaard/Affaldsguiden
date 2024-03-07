import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper";


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
        <>
          <figure className="locationdetailCard" key={details.id}>
          <iframe title="Location"  src={`https://maps.google.com/maps?q=${details.longtitude},${details.latitude}&hl=es;&output=embed`} />
            <figcaption>
              <h2>{details.name}</h2>
              <p>{details.address}</p>
              <p>
                {details.zipcode} {details.city}
              </p>
              <p>{details.country}</p>
            </figcaption>
          </figure>
        </>
      ) : null}
       </>
    )
} 