import Pizza from "../models/Pizza.js";
import cloudinary from "../util/cloudinary.js";

const cloudinaryOptions = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

export const createPizza = async (req, res) => {
  try {
    const newPizza = await Pizza.create(req.body);

    res.status(201).json({ success: true, msg: "created new pizza", newPizza });
  } catch (error) {
    console.log({ msg: "Error in creating a new pizza", error });
  }
};

export const getPizza = async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    if (!pizzas) {
      res.status(404).json({ success: false, msg: "pizzas not found" });
    } else {
      res
        .status(200)
        .json({
          count: pizzas?.length,
          success: true,
          msg: "here is all your pizza",
          pizzas,
        });
    }
  } catch (error) {
    console.log({ msg: "error in getting all pizza", error });
  }
};

export const getSinglePizza = async (req, res) => {
  try {
    const { id } = req.params;
    const singlePizza = await Pizza.findById(id);
    if (!singlePizza) {
      res.status(404).json({ success: false, msg: "pizza not found" });
    } else {
      res
        .status(200)
        .json({ success: true, msg: "we found your pizza", singlePizza });
    }
  } catch (error) {
    console.log({ msg: "error in getting a single pizza", error });
  }
};
export const deleteSinglePizza = async (req, res) => {
  try {
    const { id } = req.params;
    const pizzaToBeDeleted = await Pizza.findByIdAndDelete(id);

    res
      .status(200)
      .json({ success: true, msg: "you deleted a pizza from the database" });
  } catch (error) {
    console.log({ msg: "error deleting a pizza", error });
  }
};
