import { NavLink, Outlet } from "react-router-dom";

// icons
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const AdminLayout = () => {
  return (
    <>
    <div className=" p-4 min-h-screen h-auto">


      <header>
        <div>
          <nav>
            <ul className=" grid grid-flow-col place-content-start gap-4 p-3">
              <li>
                <NavLink
                  className="flex gap-1 place-content-center place-items-center"
                  to="/admin/users"
                >
                  {" "}
                  <FaUser /> users{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex gap-1 place-content-center place-items-center"
                  to="/home"
                >
                  <FaHome /> home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

    

      <Outlet /> 
      
         </div>
    </>
  );
};

export default AdminLayout;
