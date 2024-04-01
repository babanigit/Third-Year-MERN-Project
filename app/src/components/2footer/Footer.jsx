/* eslint-disable react/prop-types */
import "./Footer.css";
// import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  return (
    <div className="footer-div my-2">
      {/* <Fade> */}
        <p className="footer-text bg-purple-400" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">💖</span> by {greeting.title2}
        </p>
      {/* </Fade> */}
    </div>
  );
}
