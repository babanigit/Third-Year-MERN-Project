/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header";
import Page1 from "./Page1";
import Footer from "../../components/2footer/Footer";

const UpdatesPage = (props) => {
  return (
    <>
    <div className=" min-h-screen" >

      <div className="  w-full ">
        <Header theme={props.theme} />
      </div>

      <div>
        <Page1 theme={props.theme} />
      </div>

      <div className=" bottom-0  w-screen">
        <Footer theme={props.theme} />
      </div>

      </div>

    </>
  );
};

export default UpdatesPage;
