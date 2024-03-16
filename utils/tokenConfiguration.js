import jwt from "jsonwebtoken";

const tokenConfiguration = (userId, res) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });
    res.cookie("jwt", token, {
      maxAge: 10 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
    });
  } catch (error) {
    console.log("error in token config");
    res.status(400).json({
      error: error.message,
    });
  }
};

export default tokenConfiguration;
