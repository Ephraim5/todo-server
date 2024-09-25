import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});
const todoModel = mongoose.model("todoCD", todoSchema);
export default todoModel;
