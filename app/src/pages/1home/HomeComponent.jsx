/* eslint-disable react/prop-types */

import Header from "../../components/1header/Header";
import Footer from "../../components/2footer/Footer";
import Page1 from "../../container/home/Page1";

function Home(props) {
  return (
    <div
        // className=" mx-5 "
        >
      <Header theme={props.theme} />
      <Page1 theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
