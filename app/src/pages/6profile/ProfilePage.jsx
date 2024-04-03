/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header"
import Footer from "../../components/2footer/Footer"
import Profile from "../../components/4Profile/Profile"



const ProfilePage = (props) => {
  return (
    <>
    <Header theme={props.theme}  />

    <Profile theme={props.theme}  />

    <Footer theme={props.theme}  />
    
    </>
  )
}

export default ProfilePage