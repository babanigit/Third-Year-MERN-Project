/* eslint-disable react/prop-types */
// this is main.jsx where each and every components,pages and containers will come
// here we will use react-dom for routing through the pages

// import {AnimationPresence} from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../pages/0splash/Splash";
import Home from "../pages/1home/HomeComponent";
import AdmissionPage from "../pages/2Admission/AdmissionPage";
import EventPage from "../pages/3Events/EventPage";
import NotFound from "../components/other/NotFound";

import ScrollToTop from "../components/other/ScrollToTop";
import PrivateRoute from "../components/other/PrivateRoute";
import ProfilePage from "../pages/6profile/ProfilePage";
import SignInPage from "../pages/7signinSignup/SignInPage";
import SignUpPage from "../pages/7signinSignup/SignUpPage";
import ShopePage from "../pages/5shop/ShopePage";

import AdminPage from "../pages/8admin/AdminPage";
import AdminUser from "../components/adminuser/AdminUser";

// import UseScrollToTop from "../components/UseScrollToTop";

const Main = (props) => {
  return (
    <>
      {/* <AnimationPresence      > */}

      <div style={{ background: props.theme.body, color: props.theme.text }}>
        <BrowserRouter basename="/">
          <ScrollToTop />
          {/* <AppHeader /> */}

          {/* <Header theme={props.theme} /> */}

          <Routes>
            <Route path="/" element={<Splash theme={props.theme} />} />
            <Route
              path="/signin"
              element={<SignInPage theme={props.theme} />}
            />
            <Route
              path="/signup"
              element={<SignUpPage theme={props.theme} />}
            />
            <Route path="/home" element={<Home theme={props.theme} />} />
            <Route
              path="/admission"
              element={<AdmissionPage theme={props.theme} />}
            />
            <Route path="/events" element={<EventPage theme={props.theme} />} />
            <Route path="/shop" element={<ShopePage theme={props.theme} />} />

            <Route path="/splash" element={<Splash theme={props.theme} />} />
            <Route path="/*" element={<NotFound theme={props.theme} />} />

            {/* admin */}
            <Route path="/admin" element={<AdminPage theme={props.theme} />} >
              <Route path="users" element={<AdminUser />}  />
            </Route>

            {/* private */}
            <Route element={<PrivateRoute />}>
              <Route
                path="/profile"
                element={<ProfilePage theme={props.theme} />}
              />
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
