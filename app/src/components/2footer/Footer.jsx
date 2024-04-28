/* eslint-disable react/prop-types */

// import { Fade } from "react-reveal";

export default function Footer(props) {
  return (
    <div className=" flex place-content-center place-items-center p-2 ">
      {/* <Fade> */}
        <p className=" font-bold text-sm md:text-base" style={{ color: props.theme.secondaryText }}>
        Copyright ©️ 2024 BMI
        </p>
      {/* </Fade> */}
    </div>
  );
}
