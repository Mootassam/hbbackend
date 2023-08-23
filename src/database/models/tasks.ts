import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  products: {
    type: mongoose.Types.ObjectId, 
    ref :"product"
  },
});
const Tasks = mongoose.model("Tasks", tasksSchema);
export default Tasks;
