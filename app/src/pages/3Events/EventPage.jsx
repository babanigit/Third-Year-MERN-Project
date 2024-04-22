/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header";
import Footer from "../../components/2footer/Footer";
import Contact from "../../components/7Contact/Contact";
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
          <div>
          {/* <p 
            className="w-full text-2xl font-bold flex place-content-center"
            > About Sir</p> */}
          <Page1 />
          </div>
          <Page2Event />
          <div>
            <p 
            className="w-full text-2xl font-bold flex place-content-center"
            > About Location</p>
          <Page3Map />
          </div>
        </div>

        <div className=" p-4">
            <Contact theme={props.theme} />
          </div>

        <div>
          <Footer theme={props.theme} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
