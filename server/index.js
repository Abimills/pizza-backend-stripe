import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import pizzaRouter from "./routes/pizza.js";

import cors from "cors";
import paymentRouter from "./routes/payment.js";

dotenv.config();
const app = express();

// middleware
app.use(express.json());

// check for cors
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/api", pizzaRouter);
app.use("/payment", paymentRouter);

// database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log(error);
  }
};

//the environment port
const port = process.env.PORT || 5000;

try {
  app.listen(port, () => {
    connect();
    console.log(`Server is running on ${port}`);
  });
} catch (error) {
  console.log(error);
}
