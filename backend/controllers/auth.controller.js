import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";

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

    res.status(201).json({
      _id: newUser._id,
      username,
      fullname,
    });
  } catch (error) {
    console.log("error in signup function");
    res.status(500).json({
      error: error.message,
    });
  }
};
export const signin = (req, res) => {
  res.json({
    msg: "hi form signin",
  });
};
export const logout = (req, res) => {
  res.json({
    msg: "hi form logout",
  });
};
