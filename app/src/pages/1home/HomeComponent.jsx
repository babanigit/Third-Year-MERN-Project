/* eslint-disable react/prop-types */

import Header from "../../components/1header/Header";
import Footer from "../../components/2footer/Footer";
import Contact from "../../components/7Contact/Contact";
import Page1 from "./Page1";

function Home(props) {
  return (
    <div
        // className=" mx-5 "
        >
      <Header theme={props.theme} />
      <Page1 theme={props.theme} />
      <div className=" p-4">
            <Contact theme={props.theme} />
          </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
