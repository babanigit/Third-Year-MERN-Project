/* eslint-disable react/prop-types */

// import { Fade } from "react-reveal";
import { greeting } from "../../assets/portfolio";

export default function Footer(props) {
  return (
    <div className=" flex place-content-center place-items-center p-2 ">
      {/* <Fade> */}
        <p className=" font-bold text-sm md:text-base" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">💖</span> by {greeting.title2}
        </p>
      {/* </Fade> */}
    </div>
  );
}
