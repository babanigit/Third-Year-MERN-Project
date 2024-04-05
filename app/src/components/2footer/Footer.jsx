/* eslint-disable react/prop-types */
import "./Footer.css";
// import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  return (
    <div className=" grid place-items-center ">
      {/* <Fade> */}
        <p className="footer-text " style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">💖</span> by {greeting.title2}
        </p>
      {/* </Fade> */}
    </div>
  );
}
