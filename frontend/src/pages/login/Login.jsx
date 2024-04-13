import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

export const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen justify-center min-w-96 mx-auto">
        <div className="flex bg-slate-800 flex-col rounded-lg p-8">
          <div className="text-3xl font-semibold text-slate-400 my-2 flex items-center justify-center">
            <h1>LOGIN</h1>
          </div>
          <form className="flex flex-col items-center ">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="input input-bordered input-info w-full max-w-xs  my-2"
            />
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="input input-bordered input-info w-full max-w-xs  my-2"
            />
            <Link
              to="/signup"
              className="text-blue-500 my-2 hover:text-pink-400 hover:cursor-pointer"
            >
              Not registered yet ?
            </Link>
            <button
              className="btn btn-outline btn-accent my-2"
              onClick={handleSubmit}
            >
              {loading ? (
                <span className="loading loading-spinner loading-lg"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
