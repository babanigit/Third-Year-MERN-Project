/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header";
import Footer from "../../components/2footer/Footer";
// import Footer from "../../components/2footer/Footer"
import SignUp from "../../components/3RegisterLogin/SignUp";

const SignUpPage = (props) => {
  return (
    <>
      <div className=" fixed w-screen">
        <Header theme={props.theme} />
      </div>

      <div className=" h-auto ">
      <div className=" h-[60px]"></div>
        <SignUp theme={props.theme} />
      </div>

      <div className=" bottom-0 fixed w-screen">
        <Footer theme={props.theme} />
      </div>
    </>
  );
};

export default SignUpPage;
