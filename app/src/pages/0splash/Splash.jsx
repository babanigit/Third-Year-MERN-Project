/* eslint-disable react/prop-types */
import { useState } from "react";
import { Navigate as Redirect } from "react-router-dom";


function Splash(props) {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 2000);

  return redirect ? (
    <Redirect to="/home" />
  ) : (
    <div
    style={{ background: props.theme.body, color: props.theme.text }}
    className=" h-screen grid place-content-center">
loading
    </div>
  );
}

export default Splash;
