import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Master Headphones All Rights Reserved</p>

      <p className="icons">
        <AiFillInstagram />
        <AiFillFacebook />
      </p>
    </div>
  );
};

export default Footer;
