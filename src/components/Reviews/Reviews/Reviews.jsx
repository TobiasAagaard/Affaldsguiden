import axios from "axios";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Placeholder from "../../../assets/Images/Icons/placeholder.svg"
import Styles from "./Reviews.module.scss";
import { useParams } from "react-router-dom";

const NumStars = (props) => {
    const [numStars] = useState(new Array(5).fill(""));
  
    return (
      <div className={Styles.starContainer}>
        {numStars &&
          numStars.map((s, index) => {
            return (
              <div className={Styles.starContainer} key={index}>
                {index > props.num_stars - 1 ? (
                    <FaStar className={Styles.star} style={{ color: '#D9D9D9' }} />
                ) : (
                  <FaStar className={Styles.star} style={{ color: '#FFA500' }}  />
                )}
              </div>
            );
          })}
      </div>
    );
  };

export const Reviews = () => {

const [reviewsList, setReviewsList] = useState([]);


const {id} = useParams();

  useEffect(() => {
    const getReviewsList = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/reviews/${id}`
        );
        setReviewsList(res.data);
        console.log(res)
      } catch (err) {
        console.error(err);
      }
    };
    
    getReviewsList();
  }, []);

    return (
        <div className={Styles.reviewsContainer}>
            {reviewsList?.map((item) => {
                return(
                <article key={item.id}>
                    <img src={Placeholder} alt="" />
                    <div className={Styles.containerWrapper}>
                      <div className={Styles.topFlex}>
                        <h3>{item.user.firstname} {item.user.lastname}</h3>
                        <NumStars  num_stars={item.num_stars} />
                      </div>
                      <p>{item.comment}</p>
                    </div>
                    
                </article>
            )})}
        </div>
    )
}



