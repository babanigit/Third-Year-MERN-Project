/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SignUp = (props) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errorData, setErrorData]= useState("");


  const navigate = useNavigate();


  const handleChange = async (e) =>{
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      setErrorData(data);
      console.log(data);

      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/signin");

      
    } catch (error) {
      setLoading(false);
      setError(true);
    }

  }


  return (
    <>
    

 <div
      style={{ background: props.theme.body, color: props.theme.text }}
      className="p-3 h-screen max-w-lg mx-auto"
    >
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          style={{
            background: props.theme.body,
            color: props.theme.text,
            borderColor: props.theme.text,
          }}
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg border-2"
          onChange={handleChange}
        />
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
          {loading ? "Loading..." : "Sign Up"}
        </button>
        {/* <OAuth /> */}
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
       <p className="text-red-500 mt-5">
        {error ? errorData.error || "Something went wrong(from singUp.jsx)!" : ""}
      </p>
    </div>

    </>
  )
}

export default SignUp