/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


// import Header from "../../components/1header/Header";
// import Footer from "../../components/2footer/Footer";
import AdminUser from "../../components/adminuser/AdminUser";
import AdminLayout from "../../components/layout/AdminLayout";
// import AdminUsers from "../Admin/AdminUsers";

const AdminPage = (props) => {
  return (
    <>
      {/* <div className="  w-screen">
        <Header theme={props.theme} />
      </div> */}

      <div className=" ">
        {/* <AdminUsers theme={props.theme} /> */}
        <AdminLayout />

      </div>

      {/* <div className=" bottom-0 w-screen">
        <Footer theme={props.theme} />
      </div> */}
    </>
  );
};

export default AdminPage;
