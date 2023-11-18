import mongoose from "mongoose";
//! User Model
mongoose.connect("mongodb://localhost:27017/?directConnection=true");
const userSchema = new mongoose.Schema({
    username: String,
    userId: Number,
    email: String,
});
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
//# sourceMappingURL=User.js.map