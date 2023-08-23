import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BrandsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String
  },
  site: {
    type: String,
  },
});

const Brands = mongoose.model("Brands", BrandsSchema);

export default Brands;
