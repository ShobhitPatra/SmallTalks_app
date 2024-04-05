import React from "react";
import { MdSend } from "react-icons/md";
const Input = () => {
  return (
    <>
      <form className="w-full flex ">
        <input
          type="text"
          className="rounded-sm p-3 md:text-xl bg-gray-700 md:w-full m-2 "
        ></input>
        <button cursor="pointer" className="p-1 m-2  rounded-lg">
          <MdSend className="md:h-8 md:w-8 hover:text-blue-600 hover:h-10 hover:w-10 text-white" />
        </button>
      </form>
    </>
  );
};

export default Input;
