import React from "react";
import Header from "../../components/1header/Header";
import Footer from "../../components/2footer/Footer";

const Updates = (props) => {
  return (
    <>
      <div className=" w-screen">
        <Header theme={props.theme} setTheme={props.setTheme} />
        <div>updates</div>
      </div>

      <Footer theme={props.theme} />
    </>
  );
};

export default Updates;
