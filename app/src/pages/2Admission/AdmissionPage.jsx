/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header";
import Page1 from "./Page1";
import Footer from "../../components/2footer/Footer";

const UpdatesPage = (props) => {
  return (
    <>
      <div className="">
        <Header theme={props.theme} />
      </div>
      <div>
        <Page1 theme={props.theme} />
      </div>

      <Footer theme={props.theme} />
    </>
  );
};

export default UpdatesPage;
