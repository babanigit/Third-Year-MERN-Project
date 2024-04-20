/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Admission from "./Admission";

import bmi from "../../assets/pngs/bmi.jpg";
import { useSelector } from "react-redux";

import kumkuma from "../../assets/pngs/kumkuma.png";

// import Contact from "../../components/7Contact/Contact";

const Page1 = (props) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <div className=" p-4 grid gap-2 h-screen">
        <div className=" grid place-items-center  grid-flow-col grid-cols-3 p-4 bg-green- bg-opacity-50 rounded-3xl  ">
          <div
            className="  w-fit  p-7 border-2 rounded-3xl m-3 bg-blue-300 bg-opacity-50 col-span-2 "
            style={{
              // background: props.theme.body,
              // color: props.theme.text,
              borderColor: props.theme.text,
            }}
          >
            <div className=" grid grid-flow-col place-items-center ">
              <img className=" w-[120px] rounded-3xl " src={bmi} />
            </div>

            {true ? (
              <div className=" w-full">
                <Admission theme={props.theme} />
              </div>
            ) : (
              <>
                <div className=" h-auto w-full grid place-content-center place-items-center text-xl p-3">
                  <div> Login to get Admission form </div>
                </div>
              </>
            )}
          </div>
          <div className="  w-full grid place-items-center  bg-opacity-45 rounded-full ">
            <div className=" w-[150px]">
              <img src={kumkuma} />
            </div>
          </div>
        </div>

        {/* <Contact theme={props.theme} /> */}
      </div>
    </>
  );
};

export default Page1;
