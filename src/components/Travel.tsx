import "./CSS/Travel.css";

import img1 from "../assets/img3.jpg";
import img2 from "../assets/img20.jpg";
import img3 from "../assets/img12.jpg";
import img4 from "../assets/img13.jpg";
import img5 from "../assets/img17.jpg";
import img6 from "../assets/img15.jpg";

const imgList = [
  { url: img1, text: "Bora Bora" },
  { url: img2, text: "Emerald Bay" },
  { url: img3, text: "Maldives" },
  { url: img4, text: "Grenada" },
  { url: img5, text: "Barbados" },
  { url: img6, text: "Key West" },
];

const Travel = () => {
  return (
    <div id="travel" className="selects">
      <h1 className="travel_heading">Beautiful Destinations</h1>
      <div className="container">
        {imgList.map((item: any, index: number) => (
          <div key={"a" + index} className="selects_location">
            <img src={item.url} key={index} alt="img" />

            <div className="overlay" key={"b" + index}>
              <p className="location_name">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Travel;
