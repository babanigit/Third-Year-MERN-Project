/* eslint-disable react/prop-types */
import Header from "../../components/1header/Header";
// import Footer from "../../components/2footer/Footer"
import Profile from "../../components/4Profile/Profile";

const ProfilePage = (props) => {
  return (
    <>
      <div className=" ">
        <div className=" fixed w-screen ">
          <Header theme={props.theme} />
        </div>

        <div className=" h-auto">
          <div className=" h-[60px]"></div>
          <Profile theme={props.theme} />
        </div>

        {/* <Footer theme={props.theme}  /> */}
      </div>
    </>
  );
};

export default ProfilePage;
