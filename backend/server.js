import express from "express";
import dotenv from "dotenv";
import rootRoute from "./routes/index.js";
import connectToMongo from "../db/connetTOMongo.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    msg: "server is up",
  });
});

app.use("/api/v1", rootRoute);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connectToMongo();
});
