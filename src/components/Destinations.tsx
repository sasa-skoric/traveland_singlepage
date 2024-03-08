import { useState } from "react";

import img1 from "../assets/img22.jpg";
import img2 from "../assets/img23.jpg";
import img3 from "../assets/img24.jpg";
import img4 from "../assets/img25.jpg";
import img5 from "../assets/img26.jpg";
import img6 from "../assets/img27.jpg";

import "./CSS/Destinations.css";

const images = [img1, img2, img3, img4, img5, img6];

const Destinations = () => {
  const [imgSrc, setImgSrc] = useState(img1);

  return (
    <div className="destinations" id="destinations">
      <h1>All-Inclusive Resorts</h1>
      <p>On the Caribbean's Best Beaches</p>

      <div className="img_container">
        <img src={imgSrc} alt="img" className="big_image image_grid_row_2" />

        {images.map((item: any, index: number) => (
          <img
            className="img_click"
            onClick={() => setImgSrc(item)}
            src={item}
            key={index}
            alt="img"
          />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
