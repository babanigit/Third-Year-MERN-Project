import React from "react";
import Header from "../../components/1header/Header";
// import Greeting from "../../container/greeting/Greeting";
// import Skills from "../../container/skills/Skills";
import Footer from "../../components/2footer/Footer";

function Home(props) {
  return (
    <div className=" w-screen">
      <Header
        theme={props.theme}
        setTheme={props.setTheme}
        setTabla={props.setTabla}
        tabla={props.tabla}
      />

      <div>home</div>
      {/* <Greeting theme={props.theme} />
      <Skills theme={props.theme} /> */}
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
