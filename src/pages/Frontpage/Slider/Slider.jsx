import Carousel from "react-material-ui-carousel";
import { ImageSlider } from "./ImageSlider";
import Styles from "./Slider.module.scss"

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
          <Carousel {...sliderSettings}>
            {ImageSlider.map((data) => (
              <Item key={data.id} item={data} />
            ))}
          </Carousel>
        </div>
      );
}

export { HeroSlider, Item };