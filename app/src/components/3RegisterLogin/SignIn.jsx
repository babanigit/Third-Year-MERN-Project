/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import woman from "../../assets/pngs/woman.png";

import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/UserSlice";
import OAuth from "../5GoogleAuth/OAuth";

const SignIn = (props) => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const [errorData, setErrorData] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setErrorData(data);
      console.log("data is ", data);

      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      // sharing data to current user in redux
      dispatch(signInSuccess(data));
      navigate("/home");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <>
      <div
        style={{ background: props.theme.body, color: props.theme.text }}
        className=" max-w-lg m-auto h-screen grid place-content-center "
      >
        <div className="  max-w-lg mx-auto   w-screen grid gap-3 p-5 ">
          <div className=" flex place-content-center place-items-center">
            <div>
              <img className=" w-12" src={woman} alt="women" />
            </div>

            <h1 className="text-3xl text-center font-semibold ">Sign In</h1>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              style={{
                background: props.theme.body,
                color: props.theme.text,
                borderColor: props.theme.text,
              }}
              type="email"
              placeholder="Email"
              id="email"
              className="bg-slate-100 p-3 rounded-lg border-2"
              onChange={handleChange}
            />
            <input
              style={{
                background: props.theme.body,
                color: props.theme.text,
                borderColor: props.theme.text,
              }}
              type="password"
              placeholder="Password"
              id="password"
              className="bg-slate-100 p-3 rounded-lg border-2"
              onChange={handleChange}
            />
            <button
              style={{ background: props.theme.text, color: props.theme.body }}
              disabled={loading}
              className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
            <OAuth />
          </form>
          <div className="flex gap-2 mt-5">
            <p>Dont Have an account?</p>
            <Link to="/signup">
              <span className="text-blue-500">Sign up</span>
            </Link>
            {/* <Link to="/admin">
              <span className="text-red-500">Admin</span>
            </Link> */}
          </div>
          <p className="text-red-500 mt-5">
            {error ? errorData.error || ":(" : ""}
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
