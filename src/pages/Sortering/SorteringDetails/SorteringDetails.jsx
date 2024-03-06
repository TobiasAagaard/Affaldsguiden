import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper";
import Styles from "./SorteringDetails.module.scss"

export const SorteringDetails = () => {
    const [details, setDetails] = useState([])

    const {id} = useParams();

    useEffect(() => {
        const endpoint = `http://localhost:3000/section/${id}`;

        const getDetails = async () => {
            try {
                const res = await axios.get(endpoint);
                setDetails(res.data);
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
            <ContentWrapper title={details.title}>
             <figure className={Styles.container} key={details.id}>
                <div className={Styles.heading} style={{ backgroundColor: `#${details.color}` }}>
                    <h1>{details.title}</h1>
                    <img src={details.filepath} alt="" />
                </div>
                    {details?.categories?.map((item) => {
                        return (
                                <figure key={item.id}>
                                    <img src={item.icon_filepath} alt="" />
                                    <h2>{item.title}</h2>
                                </figure>
                        )
                    })}
             </figure>
            </ContentWrapper>
          ) : null}
        </>

    )
}