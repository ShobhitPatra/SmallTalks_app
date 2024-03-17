import User from "../models/user.model";
import jwt from "jsonwebtoken";

const protectRoute = (req, res, next) => {
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

  const user = User.findById(decoded.userId).select("-password");
  if (!user) {
    return res.status(401).json({
      msg: "user not found",
    });
  }

  req.user = user;
  next();
};
