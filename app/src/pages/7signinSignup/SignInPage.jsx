/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header"
import Footer from "../../components/2footer/Footer"
import SignIn from "../../components/3RegisterLogin/SignIn"



const SignInPage = (props) => {
  return (
    <>
    <Header theme={props.theme} />

    <SignIn theme={props.theme}  />
    <Footer theme={props.theme}  />

    </>
  )
}

export default SignInPage