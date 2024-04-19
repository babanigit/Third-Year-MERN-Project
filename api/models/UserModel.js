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
    fullName: {
      type: String,
      required: true,
      unique: true,
      default: "default..."
    },
    contact: {
      type: String,
      required: true,
      default: "default..."
    },
    date: {
      type: String,
      default: "default..."

    },
    instrument: {
      type: String,
      default: "Tabla..."
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
