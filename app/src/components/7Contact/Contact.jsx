/* eslint-disable react/prop-types */

import SocialMedia from "../SocialMedia";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = (props) => {
  const form = useRef();
  const [formData, setFormData] = useState({});

  const [state, setState] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log("input data : ", formData);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorState(true);
      setState(false);
      throw console.error("null input...");
    }

    emailjs
      .sendForm("service_j8ppvv1", "template_bx06r1h", form.current, {
        publicKey: "9CRp_ClqpKmH_J6Pg",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setState(true);
          setErrorState(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

  };

  return (
    <>
      <div className=" w-full h-auto grid grid-flow-col grid-cols-2 place-items-center p-3 bg-purple- bg-opacity-50 rounded-3xl   ">
        <div className="  w-full  grid place-items-center bg--200  bg-opacity-45 rounded-full  ">
          {/* <div className=" w-[120px] ">
            <img src={kalasha} />
          </div> */}
          
          <SocialMedia />
        </div>

        <div
          style={{ borderColor: props.theme.text }}
          className=" bg-pink-300 bg-opacity-50  w-full max-w-[600px] h-auto border-2 rounded-3xl  grid items-center p-4 "
        >
          <div className="  text-3xl grid grid-flow-col justify-center gap-3  items-center  row-span-1 ">
            Contact us
          </div>

          <form
            // action=""
            className=" grid gap-2 grid-flow-row place-items-end "
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              onChange={handleChange}
              id="name"
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
              onChange={handleChange}
              id="email"
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
              onChange={handleChange}
              id="message"
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
              className=" p-3 rounded-lg border-2  border-white w-full "
            >
              send
            </button>{" "}
            <p
              style={{ color: props.theme.text }}
              className={
                state &&
                " bg-green-500 bg-opacity-50 mt-5 rounded-md p-3 w-full"
              }
            >
              {state && "Email send successfully "}
            </p>
            <p
              style={{ color: props.theme.text }}
              className={
                errorState &&
                " bg-red-500 bg-opacity-50 mt-5 rounded-md p-3 w-full"
              }
            >
              {errorState && " null data "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
