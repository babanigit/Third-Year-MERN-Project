import { useEffect, useState } from "react";

const AdminUser = () => {
  const [user, setUser] = useState([]);

  const getAllUserData = async () => {
    try {
      const res = await fetch("/api/admin/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUser(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <>
      <div>
        <div>Admin user data</div>

        <div>
          <table className=" bg-purple-200 rounded-xl p-4">
            <thead>
              <tr className=" bg-red-200">
                <th className=" bg-purple-400 border-2  px-3 ">username</th>
                <th className=" bg-purple-400 border-2  px-3 ">email</th>
                <th className=" bg-purple-400 border-2  px-3 ">contact</th>
                <th className=" bg-purple-400 border-2  px-3 ">instrument</th>
                <th className=" bg-purple-400 border-2  px-3 ">Update</th>
                <th className=" bg-purple-400 border-2  px-3 ">Delete</th>
              </tr>
            </thead>

            <tbody>
              {user.map((curr) => {
                return (
                  <tr
                  className=" bg-green-300 "
                  key={curr.id}>
                    <td className="  bg-purple-400 border-2  px-3  "> {curr.username} </td>
                    <td className="  bg-purple-400 border-2  px-3  "> {curr.email} </td>
                    <td className="  bg-purple-400 border-2  px-3  "> {curr.contact} </td>
                    <td className="  bg-purple-400 border-2  px-3  "> {curr.instrument} </td>
                    <td className="  bg-purple-400 border-2  px-3  "> edit </td>
                    <td className="  bg-purple-400 border-2  px-3  "> delete </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminUser;
