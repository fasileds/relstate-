import express from "express";

const routes = express.Router();

routes.get("/", async (req, res) => {
  res.send("that is the firs one to connect to the router");
});
export default routes;
