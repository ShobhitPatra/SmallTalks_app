import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({
        msg: "token not recieved",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        msg: "unauthorized token",
      });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({
        msg: "user not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("error in protectRoute middleware", error.message);
    res.status(401).json({
      error: error.message,
    });
  }
};

export default protectRoute;
