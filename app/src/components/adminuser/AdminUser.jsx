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
      <div className=" p-4">
        <div className=" flex place-content-center text-xl">
          Admin user data
        </div>

        <div className="overflow-x-auto">
  <table className="rounded-xl p-2 md:p-4 w-full">
    <thead>
      <tr className="bg-red-200">
        <th className="bg-purple-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
          username
        </th>
        <th className="bg-purple-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
          email
        </th>
        <th className="bg-purple-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
          contact
        </th>
        <th className="bg-purple-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
          instrument
        </th>
        {/* <th className="bg-purple-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
          Delete
        </th> */}
      </tr>
    </thead>

    <tbody>
      {user.map((curr) => {
        return (
          <tr key={curr.id}>
            <td className="bg-purple-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
              {curr.username}
            </td>
            <td className="bg-purple-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
              {curr.email}
            </td>
            <td className="bg-purple-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
              {curr.contact}
            </td>
            <td className="bg-purple-400 bg-opacity-50 border-2 p-1 md:p-2 px-3 md:px-5 rounded-xl">
              {curr.instrument}
            </td>
            <td className="bg-purple-400 bg-opacity-50 border-2 border-gray-800 p-1 md:p-2 px-3 md:px-5 rounded-full flex place-content-center">
              <button onClick={() => deleteUser(curr._id)}>delete</button>
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
