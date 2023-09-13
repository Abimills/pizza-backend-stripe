import mongoose from "mongoose";
const pizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  img: {
    type: String,
    required: [true, "please provide an image"],
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  size: {
    type: String,
    default: "medium",
  },

  description: {
    type: String,
  },
});
const Pizza = mongoose.model("Pizza", pizzaSchema);
export default Pizza;
