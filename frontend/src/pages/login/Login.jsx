import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen justify-center min-w-96 mx-auto">
        <div className="flex bg-slate-800 flex-col rounded-lg p-8">
          <div className="text-3xl font-semibold text-slate-40000 my-2 flex items-center justify-center">
            <h1>LOGIN</h1>
          </div>
          <form className="flex flex-col items-center ">
            <input
              type="text"
              placeholder="username"
              className="input input-bordered input-info w-full max-w-xs  my-2"
            />
            <input
              type="text"
              placeholder="password"
              className="input input-bordered input-info w-full max-w-xs  my-2"
            />
            <Link
              to="/signup"
              className="text-blue-500 my-2 hover:text-pink-400"
            >
              Not registered yet ?
            </Link>
            <button className="btn btn-outline btn-accent my-2">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};
