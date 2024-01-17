import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";

const app = express();
const db = async () => {
  await mongoose
    .connect(
      "mongodb+srv://fasiledesshmels09:fasil@cluster0.5gcpmdy.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("the databse is connected");
    });
};
db();
app.listen(3001, () => {
  console.log("server is running the node mon is also working");
});
app.use("/api/", userRoutes);
