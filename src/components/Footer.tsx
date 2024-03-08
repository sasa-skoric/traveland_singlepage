import "./CSS/Footer.css";

import {
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <h3>TravelLand</h3>
          <div className="social">
            <FaFacebook />
            <FaInstagram />
            <FaPinterest />
            <FaYoutube />
            <FaTwitter />
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <ul>
              <li>About</li>
              <li>Partnership</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Advertising</li>
            </ul>
          </div>

          <div className="right">
            <ul>
              <li>Contact</li>
              <li>Terms</li>
              <li>Policy</li>
              <li>Privacy</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
