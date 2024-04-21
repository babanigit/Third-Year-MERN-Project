/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { MdDeleteForever } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";

import { useDispatch } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from "../../redux/user/UserSlice";

const Profile = (props) => {
  const dispatch = useDispatch();
  const fileRef = useRef(null);

  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);

  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);
  console.log("corrUser : ", currentUser);

  const [errorData, setErrorData] = useState("");

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      () => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });



    // const { id, value } = e.target;

    // console.log(id)

    // if (id === "adminC") {
    //   // Only include adminC in formData if value is not empty
    //   if (value.trim() !== "") {
    //     setFormData({ ...formData, [id]: value });
    //   } else {
    //     // Remove adminC from formData if value is empty
    //     const { adminC, ...formDataWithoutAdminC } = formData;
    //     setFormData(formDataWithoutAdminC);
    //   }
    // } else {
    //   // For other inputs, set formData as usual
    //   setFormData({ ...formData, [id]: value });
    // }

    // if(id==! "adminC") {
    //   const { adminC, ...formDataWithoutAdminC } = formData;
    //   setFormData(formDataWithoutAdminC);
    // }


  };

  console.log("formData : ", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(updateUserStart());

      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log("updateProfile : ", data);
      setErrorData(data);

      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  //   delete Account
  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      console.log(data);
      setErrorData(data);

      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  //   signOut
  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  const adminRemove = async () => {
    try {
      const res = await fetch(`/api/user/adminUpdate/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log("erennn ", data);

      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);

    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  console.log("current porfile ", currentUser.profilePicture);

  return (
    <>
      <div
        style={{ background: props.theme.body, color: props.theme.text }}
        className=" max-w-lg m-auto flex place-items-center place-content-center h-screen "
      >
        <div className="  max-w-lg mx-auto   w-screen">
          {/* <h1 className="text-3xl font-semibold text-center my-7">Profile</h1> */}
          <form onSubmit={handleSubmit} className="flex h-auto flex-col gap-4">
            <input
              type="file"
              ref={fileRef}
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {/* 
      firebase storage rules:  
      allow read;
      allow write: if
      request.resource.size < 2 * 1024 * 1024 &&
      request.resource.contentType.matches('image/.*') */}
            <img
              src={formData.profilePicture || currentUser.profilePicture}
              alt="profile"
              className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2"
              onClick={() => fileRef.current.click()}
            />
            <p className="text-sm self-center">
              {imageError ? (
                <span className="text-red-700">
                  Error uploading image (file size must be less than 2 MB)
                </span>
              ) : imagePercent > 0 && imagePercent < 100 ? (
                <span className="text-slate-700">{`Uploading: ${imagePercent} %`}</span>
              ) : imagePercent === 100 ? (
                <span className="text-green-700">
                  Image uploaded successfully
                </span>
              ) : (
                ""
              )}
            </p>
            <input
              style={{
                background: props.theme.body,
                color: props.theme.text,
                borderColor: props.theme.text,
              }}
              defaultValue={currentUser.username}
              type="text"
              id="username"
              placeholder="Username"
              className="bg-slate-100 rounded-lg p-3 border-2 "
              onChange={handleChange}
            />
            <input
              style={{
                background: props.theme.body,
                color: props.theme.text,
                borderColor: props.theme.text,
              }}
              defaultValue={currentUser.email}
              type="email"
              id="email"
              placeholder="Email"
              className="bg-slate-100 rounded-lg p-3 border-2 "
              onChange={handleChange}
            />
            <input
              style={{
                background: props.theme.body,
                color: props.theme.text,
                borderColor: props.theme.text,
              }}
              type="password"
              id="password"
              placeholder="Password"
              className="bg-slate-100 rounded-lg p-3 border-2 "
              onChange={handleChange}
            />
            <input
              style={{
                background: props.theme.body,
                color: props.theme.text,
                borderColor: props.theme.text,
                // display: currentUser.isAdmin ? 'block' : 'none'
              }}
              type="password"
              id="adminC"
              placeholder="become admin (enter the valid pass)"
              
              className={
                currentUser.isAdmin
                ? "hidden bg-slate-100 rounded-lg p-3 border-2 "
                :"bg-slate-100 rounded-lg p-3 border-2 "}
              onChange={handleChange}
            />
            <button
              style={{ background: props.theme.text, color: props.theme.body }}
              className=" p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "Loading..." : "Update"}
            </button>
          </form>
          <div className="flex justify-between place-items-center mt-5">
            <span
              onClick={handleDeleteAccount}
              className=" cursor-pointer border-2 p-2 rounded-md border-red-500 "
              style={{ background: props.theme.body, color: props.theme.text }}
            >
              Delete Account
            </span>

            <div className="flex gap-2">
              {currentUser.isAdmin && (
                <>
                  <Link
                    className="cursor-pointer border-2 p-2 rounded-md border-blue-500 "
                    to="/admin"
                  >
                    <span className="text-blue-500 flex place-items-center ">Admin <RiAdminFill /> </span>
                  </Link>

                  <Link
                    className="cursor-pointer border-2 p-2 rounded-md border-red-500 "
                    // to="/admin"
                  >
                    <span
                      className="text-red-500 flex place-items-center"
                      onClick={() => adminRemove()}
                    >
                      Admin <MdDeleteForever />
                    </span>
                  </Link>
                </>
              )}

              <span
                onClick={handleSignOut}
                className="cursor-pointer border-2 p-2 rounded-md border-red-500 "
                style={{
                  background: props.theme.body,
                  color: props.theme.text,
                }}
              >
                Sign out
              </span>
            </div>
          </div>
          <p className="text-red-700 mt-5">
            {error ? errorData.error || "!" : ""}
          </p>
          <p className="text-green-700 mt-5">
            {updateSuccess && "User is updated successfully!"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
