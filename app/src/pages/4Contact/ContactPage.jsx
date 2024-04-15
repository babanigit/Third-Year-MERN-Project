/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header";
import Footer from "../../components/2footer/Footer";
import Page from "./Page";

const ContactPage = (props) => {
  return (
    <>
      <div className=" ">
        
        <div>

        <Header theme={props.theme} setTheme={props.setTheme} />
        </div>
        
        <div>

          <Page />
        </div>

        <div>

      <Footer theme={props.theme} />
        </div>
      </div>

    </>
  );
};

export default ContactPage;
