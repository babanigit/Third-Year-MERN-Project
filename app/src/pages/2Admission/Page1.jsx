/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-constant-condition */

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../../redux/user/UserSlice.js";

import { Form, Label, Input, Button, Col } from "reactstrap";
import bmi from "../../assets/pngs/bmi.jpg";
import Fees from "./Fees";

// import Contact from "../../components/7Contact/Contact";

const Page1 = (props) => {
  const dispatch = useDispatch();

  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [errorData, setErrorData] = useState("");
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(updateUserStart());

      console.log("current User ", currentUser);

      const res = await fetch(`/api/user/admission/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log(data);
      setErrorData(data);

      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  console.log("formData : ", formData);
  return (
    <>
      <div className=" grid gap-2 h-auto place-items-center grid-flow-row md:grid-flow-col md:grid-cols-2 p-4  bg-opacity-50 rounded-3xl  ">
        <div
          className=" max-w-[500px] w-full  p-7 border-2 rounded-3xl m-3 bg-blue-300 bg-opacity-50  "
          style={{
            // background: props.theme.body,
            // color: props.theme.text,
            borderColor: props.theme.text,
          }}
        >
          <div className=" grid grid-flow-col place-items-center ">
            <img className=" w-[120px] rounded-3xl " src={bmi} />
          </div>

          <br />
          <form onSubmit={handleSubmit} className=" w-full flex flex-col gap-4">
            <input
              style={{
                background: props.theme.body,
                color: props.theme.text,
                borderColor: props.theme.text,
              }}
              type="fullName"
              placeholder="Full Name"
              id="fullName"
              className=" text-black w-full  bg-slate-100 p-3 rounded-lg border-2"
              onChange={handleChange}
            />
            <input
              style={{
                background: props.theme.body,
                color: props.theme.text,
                borderColor: props.theme.text,
              }}
              type="contact"
              placeholder="Contact Number"
              id="contact"
              className=" text-black w-full bg-slate-100 p-3 rounded-lg border-2"
              onChange={handleChange}
            />

            <div>
              <label>Choose an Instrument : </label>
              <select
                style={{
                  background: props.theme.body,
                  color: props.theme.text,
                  borderColor: props.theme.text,
                }}
                className=" border-2 rounded-md w-full max-w-[150px]"
                onChange={handleChange}
                id="instrument"
              >
                <option value="tabla">Tabla</option>
                <option value="pakhawaj">Pakhwaj</option>
              </select>
            </div>

            <div>
              <label>Date of Birth : </label>

              <Input
                type="date"
                placeholder="Enter BirthDate"
                id="date"
                value="date"
                onChange={handleChange}
                name="birthdate"
                className=" w-12 border-2 rounded-md"
                style={{
                  background: props.theme.body,
                  color: props.theme.text,
                  borderColor: props.theme.text,
                }}
              />
            </div>

            <button
              style={{
                background: props.theme.text,
                color: props.theme.body,
              }}
              // disabled={loading}
              className=" w-full bg-slate-700  p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {false ? "Loading..." : "submit"}
            </button>
            <p
              style={{ color: props.theme.text }}
              className={
                error && " bg-red-500 bg-opacity-50 mt-5 rounded-md p-3 "
              }
            >
              {error ? errorData.error || "you have'nt logged in :(" : ""}
            </p>
            <p
              style={{ color: props.theme.text }}
              className={
                updateSuccess &&
                " bg-green-500 bg-opacity-50 mt-5 rounded-md p-3"
              }
            >
              {updateSuccess &&
                "Admission Done Successfully!, will get back to you soon!"}
            </p>
          </form>
        </div>
        <div className="  w-full grid place-items-center  bg-opacity-45 rounded-full ">
          <div className=" ">
            {/* <img src={kumkuma} /> */}

            <div className="">
              <Fees />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
