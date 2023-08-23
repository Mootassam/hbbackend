import mongoose from "mongoose";
const Schema = mongoose.Schema;

const retraitSettings = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  amount: {
    type: Number,
  },
});

const Retrait = mongoose.model("Retrait", retraitSettings);

export default Retrait;
