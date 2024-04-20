/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header";
import Page1 from "./Page1";
import Footer from "../../components/2footer/Footer";
// import Fees from "./Fees";
// // import Page3Map from "../3Events/Page3Map";

const UpdatesPage = (props) => {
  return (
    <>
    <div className=" min-h-screen" >

      <div className="  w-full  ">
        <Header theme={props.theme} />
      </div>

      <div>
        {/* <Fees /> */}
        <Page1 theme={props.theme} />

        {/* <Page3Map /> */}
      </div>

      <div className=" bottom-0  w-screen fixed">
        <Footer theme={props.theme} />
      </div>

      </div>

    </>
  );
};

export default UpdatesPage;
