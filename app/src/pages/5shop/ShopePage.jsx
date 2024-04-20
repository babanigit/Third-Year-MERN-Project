/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header";
import Page1 from "./Page1";
import Footer from "../../components/2footer/Footer";
import Page3Map from "../3Events/Page3Map";

const ShopePage = (props) => {
  return (
    <>
      <div>
        <div className=" w-screen">
          <Header theme={props.theme} setTheme={props.setTheme} />
        </div>

        <div>
          <Page1 />
          

          <div className=" bg--300 m-4 rounded-2xl bg-opacity-50">
            <div  className="w-full text-2xl font-bold flex place-content-center"> Manufacture Location</div>
            <Page3Map />
          </div>
        </div>

        <div>
          <Footer theme={props.theme} />
        </div>
      </div>
    </>
  );
};

export default ShopePage;
