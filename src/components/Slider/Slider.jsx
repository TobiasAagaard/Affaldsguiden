import Carousel from "react-material-ui-carousel";
import { ImageSlider } from "./ImageSlider";
import Styles from "./Slider.module.scss"
import { Button, } from "@mui/material";
import Next from "../../assets/Images/Icons/icon-arrow-right.svg"
import Previous from "../../assets/Images/Icons/icon-arrow-left.svg"
const Item = (props) => {
    return(
        <img src={props.item.images} alt={props.item.title}/>
    )
}

const HeroSlider = () => {
    const sliderSettings = {
      animation: "slide",
      duration: 800,
      interval: 6000,
      indicators: false,
      
    }
    return (
        <div className={Styles.sliderContainer}>
          <Carousel 
           NavButton={({onClick, className, style, next, prev}) => {
            return (
                <Button onClick={onClick} className={className} style={style}>
                    {next && <img className={Styles.nextBtn} src={Next} alt="Knap til at gå til næste" />}
                    {prev && <img className={Styles.prevBtn} src={Previous} alt="knap til at gå tilbage" />}
                </Button>
            )
        }}
          

        navButtonsProps={{
          style: {
              backgroundColor: 'inherit',
              top: "50%",
              transform: 'translate(-50%, -50%)',
              
          }
      }} 

          {...sliderSettings}>
            {ImageSlider.map((data) => (
              <Item key={data.id} item={data} />
            ))}
          </Carousel>
        </div>
      );
}

export { HeroSlider, Item };