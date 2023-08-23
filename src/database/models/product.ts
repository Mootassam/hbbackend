import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  image: {
    type: String,
  }, // Assuming you want to store the image URL as a string
  title: {
    type: String,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand", // Reference to the Brand model
  },
  vip: {
    type: Schema.Types.ObjectId,
    ref: "Vip", // Reference to the Vip model
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
