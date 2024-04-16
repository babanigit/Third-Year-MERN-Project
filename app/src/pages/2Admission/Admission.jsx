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
} from "../../redux/user/UserSlice";

import { Form, Label, Input, Button, Col } from "reactstrap";

const Admission = (props) => {
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
      <div className=" grid place-items-center place-content-center h-full w-full gap-2 p-6">
        <div className=" text-3xl m-3"> Admission Form </div>
        <form
          onSubmit={handleSubmit}
          className=" w-[400px]  flex flex-col gap-4"
        >
          <input
            style={{
              background: props.theme.body,
              color: props.theme.text,
              borderColor: props.theme.text,
            }}
            type="fullName"
            placeholder="full name"
            id="fullName"
            className=" text-black w-[400px]  bg-slate-100 p-3 rounded-lg border-2"
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
            className=" text-black w-[400px]  bg-slate-100 p-3 rounded-lg border-2"
            onChange={handleChange}
          />

          <div>
            <label>Choose an instrument : </label>
            <select
              style={{
                background: props.theme.body,
                color: props.theme.text,
                borderColor: props.theme.text,
              }}
              className=" border-2 rounded-md"
              onChange={handleChange}
              id="instrument"
            >
              <option value="tabla">Tabla</option>
              <option value="pakhawaj">Pakhawaj</option>
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
            style={{ background: props.theme.text, color: props.theme.body }}
            // disabled={loading}
            className="  w-[400px]  bg-slate-700  p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {false ? "Loading..." : "submit"}
          </button>
          <p
            style={{ color: props.theme.text }}
            className={
              error && " bg-red-500 bg-opacity-50 mt-5 rounded-md p-3 "
            }
          >
            {error ? errorData.error || ":(" : ""}
          </p>
          <p
            style={{ color: props.theme.text }}
            className={
              updateSuccess && " bg-green-500 bg-opacity-50 mt-5 rounded-md p-3"
            }
          >
            {updateSuccess &&
              "admission added successfully!, will get back to you soon!"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Admission;
