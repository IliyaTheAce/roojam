import mongoose from "mongoose";
import { number } from "prop-types";
// role 1 is admin
const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  role: { type: Number, require: true },
  viewName: { type: String, require: true },
  profilePic: { type: String, require: false },
});
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
