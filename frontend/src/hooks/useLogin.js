import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";

export const useLogin = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const login = async (username, password) => {
    const success = handleInputErrors(username, password);
    if (!success) {
      setLoading(true);
      return;
    }
    try {
      const userData = await axios.post(
        "http://localhost:8000/api/v1/auth/signin",
        {
          username,
          password,
        }
      );
      localStorage.setItem("user-info", userData.data);
      setAuthUser(userData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

const handleInputErrors = (username, password) => {
  if (!username || !password) {
    toast.error("please fill in all feilds");
    return false;
  }
  return true;
};
