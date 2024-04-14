/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-constant-condition */

import { useState } from "react";

const Admission = (props) => {
  const [formData, setFormData] = useState({});

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {};

  console.log("formData : ", formData);
  // console.log("select ", select);

  const generateYearOptions = () => {
    const arr = [];

    const startYear = 1900;
    const endYear = new Date().getFullYear();

    for (let i = endYear; i >= startYear; i--) {
      arr.push(<option value={i}>{i}</option>);
    }

    return arr;
  };

  const generateYearOptions2 = () => {
    const arr = [];

    const startMonth = 1;
    const endMonth = 12;

    for (let i = endMonth; i >= startMonth; i--) {
      arr.push(<option value={i}>{i}</option>);
    }

    return arr;
  };

  const generateYearOptions3 = () => {
    const arr = [];

    const startDate = 1;
    const endDate = 31;

    for (let i = endDate; i >= startDate; i--) {
      arr.push(<option value={i}>{i}</option>);
    }

    return arr;
  };

  return (
    <>
      <div className=" grid place-items-center place-content-center h-full w-full gap-2 p-6">
        <div className=" text-4xl"> Admission Form </div>
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
            type="name"
            placeholder="full name"
            id="name"
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
              <option value="pakwaj">Pakwaj</option>
            </select>
          </div>

          <div>
            <label>birthday : </label>
            <select
 style={{
  background: props.theme.body,
  color: props.theme.text,
  borderColor: props.theme.text,
}}              className=" border-2 rounded-md"
              onChange={handleChange}
              id="dob1"
            >
              {generateYearOptions()}
            </select>

            <select
 style={{
  background: props.theme.body,
  color: props.theme.text,
  borderColor: props.theme.text,
}}              className=" border-2 rounded-md"
              onChange={handleChange}
              id="dob2"
            >
              {generateYearOptions2()}
            </select>
            <select
 style={{
  background: props.theme.body,
  color: props.theme.text,
  borderColor: props.theme.text,
}}              className=" border-2 rounded-md"
              onChange={handleChange}
              id="dob3"
            >
              {generateYearOptions3()}
            </select>
          </div>

          <button
            style={{ background: props.theme.text, color: props.theme.body }}
            // disabled={loading}
            className=" text-black w-[400px]  bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {false ? "Loading..." : "submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Admission;
