import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckBox } from "../../components/CheckBox";
import GenderCheckBox from "./GenderCheckBox";
import UseSignup from "../../hooks/UseSignup";

export const Signup = () => {
  const [inputs, setInputs] = useState([
    {
      // fullname, username, gender, password, confirmedPassword
      fullname: "",
      username: "",
      gender: "",
      password: "",
      confirmedPassword: "",
    },
  ]);

  const { signup, loading } = UseSignup();

  const handleGenderChange = (gender) => {
    setInputs({ ...inputs, gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  };

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
              value={inputs.fullname}
              onChange={(e) => {
                setInputs({ ...inputs, fullname: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="username"
              value={inputs.username}
              onChange={(e) => {
                setInputs({ ...inputs, username: e.target.value });
              }}
              className="input input-bordered input-info w-full max-w-xs  my-2"
            />
            <input
              type="text"
              placeholder="password"
              value={inputs.password}
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
              className="input input-bordered input-info w-full max-w-xs  my-2"
            />
            <input
              type="text"
              placeholder="confirm password"
              value={inputs.confirmPassword}
              onChange={(e) => {
                setInputs({ ...inputs, confirmedPassword: e.target.value });
              }}
              className="input input-bordered input-info w-full max-w-xs  my-2"
            />

            <GenderCheckBox
              onGenderChange={handleGenderChange}
              selectedGender={inputs.gender}
            />
            <Link
              to="/login"
              className="text-blue-500 my-2 hover:text-pink-400 hover:cursor-pointer"
            >
              Already an user?
            </Link>
            <button
              className="btn btn-outline btn-accent my-2"
              onClick={handleSubmit}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
