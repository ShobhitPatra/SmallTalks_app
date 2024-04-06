import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const UseSignup = () => {
  const [loading, setLoading] = useState(false);
  console.log("inside useSignup");
  const signup = async ({
    fullname,
    username,
    gender,
    password,
    confirmedPassword,
  }) => {
    console.log("inside signup");

    const success = handleInputErrors({
      fullname,
      username,
      password,
      gender,
      confirmedPassword,
    });
    if (!success) {
      return;
    }

    try {
      console.log("inside try");
      const data = await axios.post(
        "http://localhost:8000/api/v1/auth/signup",
        {
          fullname,
          username,
          gender,
          password,
          confirmedPassword,
        }
      );
      console.log(JSON.stringify(data));
      localStorage.setItem("chat-user", JSON.stringify(data));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};
const handleInputErrors = ({
  fullname,
  username,
  password,
  gender,
  confirmedPassword,
}) => {
  console.log("inside handleInputErrors");

  if (!fullname || !username || !password || !confirmedPassword || !gender) {
    toast.error("Please fill all the feilds");
    return false;
  }

  if (password !== confirmedPassword) {
    toast.error("Passwords does not match ");
    return false;
  }

  if (password.length < 8) {
    toast.error("Password should be atleast 8 characters long");
    return false;
  }
  return true;
};

export default UseSignup;
