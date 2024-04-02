/* eslint-disable react/prop-types */
// this is main.jsx where each and every components,pages and containers will come
// here we will use react-dom for routing through the pages

// import {AnimationPresence} from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../pages/0splash/Splash";
import Home from "../pages/1home/HomeComponent";
import Updates from "../pages/2updates,NewsAndAdmissions/Updates";
import Gallery from "../pages/3galleryMediaCentre/Gallery";
import Faculty from "../pages/4facultyProfiles/Faculty";
import AboutUs from "../pages/5aboutUs,ContactUsAndServices/AboutUs";
import NotFound from "../components/other/NotFound";

import ScrollToTop from "../components/other/ScrollToTop";
import SignIn from "../components/3RegisterLogin/SignIn";
import SignUp from "../components/3RegisterLogin/SignUp";
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

          <Routes>
            <Route path="/" element={<Splash theme={props.theme} />} />
            <Route path="/signin" element={<SignIn theme={props.theme} />} />
            <Route path="/signup" element={<SignUp theme={props.theme} />} />
            <Route path="/home" element={<Home theme={props.theme} />} />
            <Route path="/updates" element={<Updates theme={props.theme} />} />
            <Route path="/gallery" element={<Gallery theme={props.theme} />} />
            <Route path="/faculty" element={<Faculty theme={props.theme} />} />
            <Route path="/aboutUs" element={<AboutUs theme={props.theme} />} />
            <Route path="/splash" element={<Splash theme={props.theme} />} />
            <Route path="/*" element={<NotFound theme={props.theme} />} />
          </Routes>
        </BrowserRouter>

        {/* <UseScrollToTop /> */}
      </div>
      {/* </AnimationPresence> */}
    </>
  );
};

export default Main;
