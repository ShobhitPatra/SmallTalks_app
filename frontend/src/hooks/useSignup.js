import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
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
    setLoading(true);

    try {
      console.log("inside try");
      const userData = await axios.post(
        "http://localhost:8000/api/v1/auth/signup",
        {
          fullname,
          username,
          gender,
          password,
          confirmedPassword,
        }
      );
      console.log(JSON.stringify(userData));
      localStorage.setItem("user-info", JSON.stringify(userData.data));
      setAuthUser(userData);
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
    console.log("Please fill all the feilds");

    toast.error("Please fill in all fields");

    return false;
  }

  if (password !== confirmedPassword) {
    console.log("Passwords does not match ");
    toast.error("Passwords does not match ");
    return false;
  }

  if (password.length < 8) {
    console.log("Password too short");
    toast.error("Password too short");
    return false;
  }
  return true;
};

export default UseSignup;
