import mongoose from "mongoose";
const Schema = mongoose.Schema;
const settingsSchema = new Schema({
  app: {
    type: String,
  },
});
const Settigns = mongoose.model("Settings", settingsSchema);
export default Settigns;
