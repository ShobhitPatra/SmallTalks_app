import User from "../models/user.model";

export const getUsers = async () => {
  try {
    const loggedInUserId = req.user._id;
    const users = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );

    res.status(201).json({ users });
  } catch (error) {
    console.log("error in get users controller", error.message);
    res.status(401).json({
      error: "internal server error",
    });
  }
};
