import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shobhit9999999:FSG0Z0ZWN9fKHXv2@cluster0.spk7o2q.mongodb.net/smallTalks"
    );
    console.log("successfully connected to db");
  } catch (error) {
    console.log("connection to db failed", error.message);
  }
};
export default connectToMongo;
