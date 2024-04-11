/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header";
// import Footer from "../../components/2footer/Footer"
import SignUp from "../../components/3RegisterLogin/SignUp";

const SignUpPage = (props) => {
  return (
    <>
      <div className=" fixed w-screen">
        <Header theme={props.theme} />
      </div>

      <div>
        <SignUp theme={props.theme} />
      </div>

      {/* <Footer   theme={props.theme}/> */}
    </>
  );
};

export default SignUpPage;
