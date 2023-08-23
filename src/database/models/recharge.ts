import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rechargeSchema = new Schema({
  amount: {
    type: Number,
  },
  orderNumber: {
    type: String,
  },
  date: { type: Date },
  photo: {},
  hash: {
    type: String,
  },
  paymentDate: {
    type: String,
  },
});

const Recharge = mongoose.model("Recharge", rechargeSchema);
export default Recharge;
