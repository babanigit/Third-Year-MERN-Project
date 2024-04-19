/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header"
// import Footer from "../../components/2footer/Footer"
import Profile from "../../components/4Profile/Profile"



const ProfilePage = (props) => {
  return (
    <>
    <div className=" h-screen">

    <div className=" fixed  ">

    <Header theme={props.theme}  />
    </div>

    <Profile theme={props.theme}  />

    {/* <Footer theme={props.theme}  /> */}
    
    </div>
    </>
  )
}

export default ProfilePage