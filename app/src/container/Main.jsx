/* eslint-disable react/prop-types */
// this is main.jsx where each and every components,pages and containers will come
// here we will use react-dom for routing through the pages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../pages/0splash/Splash";
import Home from "../pages/1home/HomeComponent";
import Updates from "../pages/2updates,NewsAndAdmissions/Updates";
import Gallery from "../pages/3galleryMediaCentre/Gallery";
import Faculty from "../pages/4facultyProfiles/Faculty";
import AboutUs from "../pages/5aboutUs,ContactUsAndServices/AboutUs";

const Main = (props) => {
  // const theme = props.theme;
  // const setTheme = props.setTheme;
  return (
    <>
      <div
        // className=" w-screen h-screen"
        style={{ background: props.theme.body, color: props.theme.text }}
      >
        <BrowserRouter basename="/">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Splash
                  {...props}
                  theme={props.theme}
                  setTheme={props.setTheme}
                />
              }
            />
            <Route
              path="/home"
              exact
              element={
                <Home
                  {...props}
                  theme={props.theme}
                  setTheme={props.setTheme}
                  setTabla={props.setTabla}
                  tablaMode={props.tabla}
                />
              }
            />
             <Route
              path="/updates"
              exact
              element={
                <Updates
                  {...props}
                  theme={props.theme}
                  setTheme={props.setTheme}
                  setTabla={props.setTabla}
                  tabla={props.tabla}
                />
              }
            />
            <Route
              path="/gallery"
              exact
              element={
                <Gallery
                  {...props}
                  theme={props.theme}
                  setTheme={props.setTheme}
                />
              }
            />
            <Route
              path="/faculty"
              exact
              element={
                <Faculty
                  {...props}
                  theme={props.theme}
                  setTheme={props.setTheme}
                />
              }
            />
            <Route
              path="/aboutUs"
              exact
              element={
                <AboutUs
                  {...props}
                  theme={props.theme}
                  setTheme={props.setTheme}
                />
              }
            />
            <Route
              path="/splash"
              exact
              element={
                <Splash
                  {...props}
                  theme={props.theme}
                  setTheme={props.setTheme}
                />
              }
            /> 
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Main;
