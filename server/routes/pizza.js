import express from "express";
import {
  createPizza,
  deleteSinglePizza,
  getPizza,
  getSinglePizza,
} from "../controllers/pizzaControllers.js";

const pizzaRouter = express.Router();
pizzaRouter.post("/create", createPizza);
pizzaRouter.get("/", getPizza);
pizzaRouter.get("/:id", getSinglePizza);
pizzaRouter.delete("/:id", deleteSinglePizza);

export default pizzaRouter;
