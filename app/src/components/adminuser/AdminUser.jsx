import { useEffect, useState } from "react";

import { MdDelete } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";

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

      if (Array.isArray(data)) {
        setUser(data);
      } else {
        setUser([]); // Set user to an empty array if data is not an array
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  //   delete user using _id
  const deleteUser = async (id) => {
    console.log(id);

    const res = await fetch(`/api/admin/users/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    console.log(`users after deleted: ${data}`);

    if (res.ok) {
      getAllUserData();
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <>
      <div className=" p-4 min-h-screen h-auto">
        <div className=" flex place-content-center text-xl font-bold">
          USER DATA
        </div>

        <div className="overflow-x-auto">
          <table className="rounded-xl p-2 md:p-4 w-full">
            <thead>
              <tr className="">
                <th className="bg-blue-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
                  username
                </th>
                <th className="bg-blue-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
                  email
                </th>
                <th className="bg-blue-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
                  full name
                </th>
                <th className="bg-blue-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
                  contact
                </th>
                <th className="bg-blue-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
                  instrument
                </th>
                <th className="bg-blue-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
                  Birth date
                </th>
                <th className="bg-blue-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
                  created at
                </th>
              </tr>
            </thead>

            <tbody>
              {user.map((curr) => {

                // converting date into readable date
                const date = new Date(curr.createdAt); // Create a new Date object from the MongoDB date string
                const options = {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  timeZoneName: "short",
                }; // Format the date to a readable format
                const formattedDate = date.toLocaleDateString("en-US", options);

                return (
                  <tr key={curr.id}>
                    <td
                      className={
                        curr.isAdmin == true
                          ? " bg-green-300  bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl flex  place-items-center"
                          : " bg-purple-300  bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl flex  place-items-center"
                      }
                    >
                      {curr.username}{" "}
                      <p>{curr.isAdmin == true && <GrUserAdmin />}</p>
                    </td>
                    <td className="bg-purple-300 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
                      {curr.email}
                    </td>
                    <td className="bg-purple-300 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
                      {curr.fullName == "default" ? "-" : curr.fullName}
                    </td>
                    <td className="bg-purple-300 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
                      {curr.fullName == "default" ? "-" : curr.contact}
                    </td>
                    <td className="bg-purple-300 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
                      {curr.instrument}
                    </td>
                    <td className="bg-purple-300 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
                      {curr.date == "default" ? "-" : curr.date}
                    </td>
                    <td className="bg-purple-300 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
                      {formattedDate}
                    </td>

                    <td className="bg-pink-400 bg-opacity-50 border-2 border-gray-800 p-1 md:p-2 rounded-full flex place-content-center">
                      <button
                        className=" flex place-items-center"
                        onClick={() => deleteUser(curr._id)}
                      >
                        <MdDelete />
                      </button>
                    </td>
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
