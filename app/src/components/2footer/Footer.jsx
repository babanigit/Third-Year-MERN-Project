/* eslint-disable react/prop-types */

// import { Fade } from "react-reveal";
import { greeting } from "../../assets/portfolio";

export default function Footer(props) {
  return (
    <div className=" grid place-items-center p-2 ">
      {/* <Fade> */}
        <p className=" font-bold " style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">💖</span> by {greeting.title2}
        </p>
      {/* </Fade> */}
    </div>
  );
}
