/* eslint-disable react/prop-types */

import kalasha from "../../assets/pngs/kalasha.png"
import SocialMedia from "../SocialMedia";

const Contact = (props) => {
  return (
    <>
      <div className=" h-full w-full grid grid-flow-col grid-cols-3 place-items-center p-3 bg-purple- bg-opacity-50 rounded-3xl   ">
        <div className="  w-full grid place-items-end bg-opacity-45 rounded-full ">
          <div className=" w-[30%]">
            <img src={kalasha} />
          </div>
        </div>

        <div
          style={{ borderColor: props.theme.text }}
          className=" bg-green-300 bg-opacity-50  min-w-[600px] col-span-2 grid-rows-4 border-2 rounded-3xl  grid items-center p-[4] "
        >
          {/* header */}
          <div className="  text-3xl grid grid-flow-col justify-center gap-3  items-center  row-span-1 ">
            <div className=" ">Contact us</div>
            {/* <div>images</div> */}
          </div>

          <div className=" grid row-span-2  ">
            <form
              action=""
              className=" grid gap-2 grid-flow-row place-items-end m-3"
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
                type="message"
                style={{
                  background: props.theme.body,
                  borderColor: props.theme.text,
                }}
                placeholder="message"
                className=" h-[100px]  px-[2%]  rounded-lg border-2  border-white w-full "
              />
              <button
                style={{ borderColor: props.theme.text }}
                className=" w-[20%]  grid border border-5 rounded-md "
              >
                send
              </button>{" "}
            </form>
            <div className=" flex w-full place-items-center place-content-center">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
