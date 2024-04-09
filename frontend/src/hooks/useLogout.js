import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/logout",
        {}
      );
      if (response.error) {
        throw new Error(response.error);
      }
      localStorage.removeItem("user-info");
      setAuthUser(null);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};
