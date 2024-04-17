/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header";
import Footer from "../../components/2footer/Footer";
import Page1 from "./Page1";
import Page2Event from "./Page2Event";
import Page3Map from "./Page3Map";

const Gallery = (props) => {
  return (
    <>
      <div className=" ">
        <div>
          <Header theme={props.theme} setTheme={props.setTheme} />
        </div>
        <div>
          <Page1 />
          <Page2Event />
          <Page3Map />
        </div>

        <div>
          <Footer theme={props.theme} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
