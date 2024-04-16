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
      <div className=" grid place-items-center min-h-auto grid-flow-col grid-cols-3 p-4  ">
        <div
          className=" h-fit p-3 border-2 rounded-3xl m-3 bg-blue-300 bg-opacity-50 col-span-2 "
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
        <div className="  h-full w-full grid place-items-center rounded-full ">
          image
        </div>
      </div>

      <div className="  min-h-auto w-full grid grid-flow-col grid-cols-3 place-items-center p-3  ">
        <div className="  h-full w-full grid justify-center items-center  bg-opacity-50 rounded-full">
         image
        </div>

        <div
          style={{ borderColor: props.theme.text }}
          className=" bg-purple-300 bg-opacity-50  min-h-[400px] min-w-[600px] col-span-2 grid-rows-4 border-2 rounded-3xl  grid items-center p-[3%] "
        >
          {/* header */}
          <div className=" h-full  text-3xl grid grid-flow-col justify-center gap-3  items-center  row-span-1 ">
            <div>Contact us</div>
            {/* <div>images</div> */}
          </div>

          <div className=" h-full grid row-span-2  ">
            <form
              action=""
              className=" grid gap-2 grid-flow-row place-items-end "
            >
              <input
                type="text"
                style={{
                  background: props.theme.body,
                  borderColor: props.theme.text,
                }}
                placeholder="your email"
                className=" px-[2%] rounded-lg border-2  border-white w-full "
              />
              <input
                type="text"
                style={{
                  background: props.theme.body,
                  borderColor: props.theme.text,
                }}
                placeholder="message"
                className=" h-[100px] px-[2%]  rounded-lg border-2  border-white w-full "
              />
              <button
                style={{ borderColor: props.theme.text }}
                className=" w-[20%]  grid border border-5 rounded-md "
              >
                send
              </button>{" "}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
