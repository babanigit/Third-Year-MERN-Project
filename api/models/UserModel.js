import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    },
  
    contact: {
      type: String,
      default: "default"
    },
    fullName: {
      type: String,
      default: "default",
      // unique: true, // Define unique index for fullName
    },
    date: {
      type: String,
      default: "default"
    },
    instrument: {
      type: String,
      default: "none"
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true }
);

const User = Mongoose.model("User", userSchema);
export default User;
