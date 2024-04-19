

/* eslint-disable no-unused-vars */

import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoute2 = () => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser.isAdmin ? <Outlet /> : <Navigate to="/home" />;
};

export default PrivateRoute2;
