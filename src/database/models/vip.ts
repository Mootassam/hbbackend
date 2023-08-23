import mongoose from "mongoose";

const Schema = mongoose.Schema;

export default (database) => {
  try {
  } catch (error) {}

  const vipSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    taskprice: {
      type: Number,
    },
    monthly: {
      type: Number,
    },
    daily: {
      type: Number,
    },
    taskNumber: {
      type: Number,
    },
    expiration: {
      type: Number,
    },
  });
};
