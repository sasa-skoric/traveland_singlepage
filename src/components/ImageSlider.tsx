import img1 from "../assets/img5.jpg";
import img2 from "../assets/img8.jpg";
import img3 from "../assets/img11.jpg";
import img4 from "../assets/img16.jpg";
import img5 from "../assets/img19.jpg";
import img6 from "../assets/img21.jpg";
import img7 from "../assets/img4.jpg";
import img8 from "../assets/img14.jpg";
import img9 from "../assets/img13.jpg";

import "./CSS/ImageSlider.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imgList = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const ImageSlider = () => {
  const carouselSettings = {
    showArrows: true,
    autoPlay: false,
    infiniteLoop: true,
    swipeable: true,
    emulateTouch: true,
  };

  return (
    <div id="views" className="carousel_container">
      <Carousel {...carouselSettings} className="carousel">
        {imgList.map((item: any, index: number) => (
          <div className="image_container" key={"a" + index}>
            <img
              className="image"
              src={item}
              key={index}
              alt="img"
              loading="lazy"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
