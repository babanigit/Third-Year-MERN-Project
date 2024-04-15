/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Admission from "./Admission";

import bmi from "../../assets/pngs/bmi.jpg";
import { useSelector } from "react-redux";

const Page1 = (props) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <div className=" grid place-items-center min-h-screen  ">
        <div
          className=" h-fit p-3 border-2 rounded-3xl m-3 bg-blue-300 bg-opacity-50 "
          style={{
            // background: props.theme.body,
            // color: props.theme.text,
            borderColor: props.theme.text,
          }}
        >
          <div className=" grid grid-flow-col place-items-center ">
            <img className=" w-[220px] rounded-3xl " src={bmi} />
          </div>

          {currentUser ? (
            <Admission theme={props.theme} />
          ) : (
            <>
              <div className=" h-full w-full grid place-content-center place-items-center text-xl p-3">
                <div> Login to get Admission form </div>
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
