/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Admission from "./Admission";

import bmi from "../../assets/pngs/bmi.jpg";

const Page1 = (props) => {
  const [trail, setTrail] = useState(true);
  return (
    <>
      <div className=" h-fit grid place-items-center ">
        <div
            style={{
              background: props.theme.body,
              color: props.theme.text,
              borderColor: props.theme.text,
            }}
        className=" h-fit p-3 border-2 rounded-md m-3 ">
          <div className=" grid grid-flow-col place-items-center ">
            <img className=" w-[220px] rounded-3xl " src={bmi} />
          </div>

          {trail ? (
            <Admission theme={props.theme} />
          ) : (
            <>
              <div className=" h-full w-full grid place-content-center place-items-center text-2xl p-3">
                <div> Login for admission process </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* <div className=" h-screen bg-yellow-100">
        news
      </div> */}
    </>
  );
};

export default Page1;
