/* eslint-disable react/prop-types */

import SocialMedia from "../SocialMedia";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = (props) => {
  const form = useRef();

  const [state, setState]= useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_j8ppvv1", "template_bx06r1h", form.current, {
        publicKey: "9CRp_ClqpKmH_J6Pg",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setState(true)
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

      // const res= await emailjs
      // .sendForm("service_j8ppvv1", "template_bx06r1h", form.current, {
      //   publicKey: "9CRp_ClqpKmH_J6Pg",
      // })
  };

  return (
    <>
      <div className=" w-full  grid grid-flow-col grid-cols-2 place-items-center p-3 bg-purple- bg-opacity-50 rounded-3xl   ">
        <div className="  w-full h-auto grid place-items-center bg--200  bg-opacity-45 rounded-full  ">
          {/* <div className=" w-[120px] ">
            <img src={kalasha} />
          </div> */}
          <SocialMedia />
        </div>

        <div
          style={{ borderColor: props.theme.text }}
          className=" bg-pink-300 bg-opacity-50  w-full max-w-[600px]  grid-rows-4 border-2 rounded-3xl  grid items-center p-4 "
        >
          {/* header */}
          <div className="  text-3xl grid grid-flow-col justify-center gap-3  items-center  row-span-1 ">
            <div className=" ">Contact us</div>
            {/* <div>images</div> */}
          </div>

          <div className=" grid row-span-2  ">
            <form
              // action=""
              className=" grid gap-2 grid-flow-row place-items-end m-3"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="name"
                name="user_name"
                style={{
                  background: props.theme.body,
                  borderColor: props.theme.text,
                }}
                placeholder="NAME"
                className="  p-3 rounded-lg border-2  border-white w-full "
              />
              <input
                type="email"
                name="user_email"
                style={{
                  background: props.theme.body,
                  borderColor: props.theme.text,
                }}
                placeholder="EMAIL"
                className=" p-3 rounded-lg border-2  border-white w-full "
              />
              <input
                type="message"
                name="user_message"
                style={{
                  background: props.theme.body,
                  borderColor: props.theme.text,
                }}
                placeholder="MESSAGE"
                className=" h-[100px]  p-3 rounded-lg border-2  border-white  w-full "
              />
              <button
                style={{ borderColor: props.theme.text }}
                className=" w-[20%] grid border border-5 rounded-md "
              >
                send
              </button>{" "}
            </form>

            
          <p
                style={{ color: props.theme.text }}
                className={
                  state &&
                  " bg-green-500 bg-opacity-50 mt-5 rounded-md p-3"
                }
              >
                {state &&
                  "Email send successfully "}
              </p>
            <div className=" flex w-full place-items-center place-content-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
