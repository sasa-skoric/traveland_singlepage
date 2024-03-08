import img1 from "../assets/img5.jpg";
import img2 from "../assets/img8.jpg";
import img3 from "../assets/img11.jpg";
import img4 from "../assets/img16.jpg";
import img5 from "../assets/img19.jpg";
import img6 from "../assets/img21.jpg";
import img7 from "../assets/img4.jpg";
import img8 from "../assets/img14.jpg";
import img9 from "../assets/img13.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./CSS/ReactSlick.css";

const imgList = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const ReactSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <div className="slider_container" id="views">
      <Slider {...settings} className="react_slick">
        {imgList.map((item: any, index: number) => (
          <div className="image_container_slick" key={"a" + index}>
            <img className="image" src={item} key={index} alt="img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReactSlick;
