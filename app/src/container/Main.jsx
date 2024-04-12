/* eslint-disable react/prop-types */
// this is main.jsx where each and every components,pages and containers will come
// here we will use react-dom for routing through the pages

// import {AnimationPresence} from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../pages/0splash/Splash";
import Home from "../pages/1home/HomeComponent";
import UpdatesPage from "../pages/2updates,NewsAndAdmissions/UpdatesPage";
import Gallery from "../pages/3galleryMediaCentre/Gallery";
import AboutUs from "../pages/4aboutUs,ContactUsAndServices/AboutUs";
import NotFound from "../components/other/NotFound";

import ScrollToTop from "../components/other/ScrollToTop";
import PrivateRoute from "../components/other/PrivateRoute";
import ProfilePage from "../pages/6profile/ProfilePage";
import SignInPage from "../pages/7signinSignup/SignInPage";
import SignUpPage from "../pages/7signinSignup/SignUpPage";
import ShopePage from "../pages/5shop/ShopePage";
// import Footer from "../components/2footer/Footer";
// import Header from "../components/1header/Header";
// import UseScrollToTop from "../components/UseScrollToTop";

const Main = (props) => {
  return (
    <>
      {/* <AnimationPresence      > */}

      <div
        style={{ background: props.theme.body, color: props.theme.text }}
      >

        <BrowserRouter basename="/">
          <ScrollToTop />
          {/* <AppHeader /> */}

          {/* <Header theme={props.theme} /> */}

          <Routes>
            <Route path="/" element={<Splash theme={props.theme} />} />
            <Route path="/signin" element={<SignInPage theme={props.theme} />} />
            <Route path="/signup" element={<SignUpPage theme={props.theme} />} />
            <Route path="/home" element={<Home theme={props.theme} />} />
            <Route path="/updates" element={<UpdatesPage theme={props.theme} />} />
            <Route path="/gallery" element={<Gallery theme={props.theme} />} />
            <Route path="/shop" element={<ShopePage theme={props.theme} />} />
            <Route path="/aboutUs" element={<AboutUs theme={props.theme} />} />
            <Route path="/splash" element={<Splash theme={props.theme} />} />
            <Route path="/*" element={<NotFound theme={props.theme} />} />

            <Route element={<PrivateRoute/>} >
              <Route path="/profile" element={<ProfilePage theme={props.theme} />} />
            </Route>
          </Routes>
          
          {/* <Footer theme={props.theme} /> */}
        </BrowserRouter>


        {/* <UseScrollToTop /> */}

      </div>
      {/* </AnimationPresence> */}
    </>
  );
};

export default Main;
