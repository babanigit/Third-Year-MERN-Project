/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header";
// import Footer from "../../components/2footer/Footer";
import SignIn from "../../components/3RegisterLogin/SignIn";

const SignInPage = (props) => {
  return (
    <div className=" ">
      <div className=" fixed w-screen">
        <Header theme={props.theme} />
      </div>

      <div className=" ">
        <SignIn theme={props.theme} />
      </div>
    </div>
  );
};

export default SignInPage;
