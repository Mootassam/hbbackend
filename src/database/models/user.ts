import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  password: {
    type: String,
    maxlength: 255,
    required: true,
  },
  phone: {
    type: Number,
  },
  username: {
    type: String,
  },
  address: {
    erc20: {
      type: String,
    },
    trc20: {
      type: String,
    },
  },
  invitationCode: {
    type: String,
  },
  vip: {
    type: mongoose.Types.ObjectId,
    ref: "vip",
  },
});

const User = mongoose.model("User", userSchema);
export default User;
