import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import tokenConfiguration from "../../utils/tokenConfiguration.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, gender, password, confirmedPassword } =
      req.body;
    if (password !== confirmedPassword) {
      res.status(400).json({
        msg: " passwords does not match",
      });
    }

    const existingUser = await User.findOne({
      username,
    });
    if (existingUser) {
      res.status(400).json({
        msg: "username taken",
      });
    }

    const avatar_male = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const avatar_female = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullname,
      username,
      gender,
      password: hashedPassword,
      avatar: gender === "male" ? avatar_male : avatar_female,
    });
    tokenConfiguration(newUser._id, res);
    res.status(201).json({
      _id: newUser._id,
      username,
      fullname,
    });
  } catch (error) {
    console.log("error in signup function");
    res.status(500).json({
      error: "internal server error",
    });
  }
};
export const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const passwordCheck = await bcrypt.compare(password, user?.password || "");
    if (!user || !passwordCheck) {
      res.status(400).json({
        msg: "invalid username or password",
      });
    }
    tokenConfiguration(user._id, res);
    res.status(201).json({
      userId: user._id,
      fullname: user.fullname,
      username: user.username,
    });
  } catch (error) {
    console.log("error in signin");
    res.status(400).json({
      error: "internal server error",
    });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ msg: "logged out successfully" });
  } catch (error) {
    console.log("error in logout controller", error.message);
    res.status(400).json({
      error: "internal server error",
    });
  }
};
