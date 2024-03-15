import express from "express";
import dotenv from "dotenv";
import rootRoute from "./routes/index.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    msg: "server is up",
  });
});

app.use("/api/v1", rootRoute);

app.listen(PORT);