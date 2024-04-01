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
import NotFound from "../components/NotFound";

import ScrollToTop from "../components/ScrollToTop";
// import AppHeader from "../components/1header/AppHeader";
// import UseScrollToTop from "../components/UseScrollToTop";

const Main = (props) => {

  return (
    <>
      {/* <AnimationPresence      > */}

      <div
        className="bg-secondary-light dark:bg-primary-dark transition duration-300"
        style={{ background: props.theme.body, color: props.theme.text }}
      >
        <BrowserRouter basename="/">
          <ScrollToTop />
          {/* <AppHeader /> */}

          <Routes>
            <Route path="/" element={<Splash theme={props.theme} />} />
            <Route
              path="/home"
              element={
                <Home
                  theme={props.theme}
                />
              }
            />
            <Route
              path="/updates"
              element={
                <Updates
                  theme={props.theme}
                />
              }
            />
            <Route
              path="/gallery"
              element={
                <Gallery
                  theme={props.theme}
                />
              }
            />
            <Route
              path="/faculty"
              element={
                <Faculty
                  theme={props.theme}
                />
              }
            />
            <Route
              path="/aboutUs"
              element={
                <AboutUs
                  theme={props.theme}
                />
              }
            />
            <Route
              path="/splash"
              element={
                <Splash
                  theme={props.theme}
                />
              }
            />
            <Route
              path="/*"
              element={
                <NotFound
                  theme={props.theme}
                />
              }
            />
          </Routes>
        </BrowserRouter>

        {/* <UseScrollToTop /> */}
      </div>
      {/* </AnimationPresence> */}
    </>
  );
};

export default Main;
