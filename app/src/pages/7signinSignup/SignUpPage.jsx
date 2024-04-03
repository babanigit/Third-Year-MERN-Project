/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header"
import Footer from "../../components/2footer/Footer"
import SignUp from "../../components/3RegisterLogin/SignUp"



const SignUpPage = (props) => {
  return (
    <>
    <Header  theme={props.theme} />

    <SignUp   theme={props.theme}/>

    <Footer   theme={props.theme}/>
    
    </>
  )
}

export default SignUpPage