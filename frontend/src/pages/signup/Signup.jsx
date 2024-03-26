import React from "react";
import { Link } from "react-router-dom";
import { CheckBox } from "../../components/CheckBox";

export const Signup = () => {
  return (
    <>
      <div className="flex flex-col h-screen min-w-96 mx-auto items-center justify-center ">
        <div className="bg-slate-800 rounded-lg p-8">
          <div className="text-3xl font-semibold text-slate-400 my-2 flex items-center justify-center">
            <h1>SIGNUP</h1>
          </div>
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="fullname"
              className="input input-bordered input-info w-full max-w-xs  my-2"
            />
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
            <input
              type="text"
              placeholder="confirm password"
              className="input input-bordered input-info w-full max-w-xs  my-2"
            />
            <div className="flex  ">
              <CheckBox label="male" />
              <CheckBox label="female" />
            </div>

            <Link
              to="/login"
              className="text-blue-500 my-2 hover:text-pink-400 hover:cursor-pointer"
            >
              Already an user?
            </Link>
            <button className="btn btn-outline btn-accent my-2">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
