import React, { useState } from "react";

const GenderCheckBox = ({ onGenderChange, selectedGender }) => {
  return (
    <div className="flex  ">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">male</span>

          <input
            type="checkbox"
            className="checkbox checkbox-primary mx-2"
            checked={selectedGender === "male"}
            onChange={() => {
              onGenderChange("male");
            }}
          />
        </label>
      </div>{" "}
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">female</span>

          <input
            type="checkbox"
            className="checkbox checkbox-primary mx-2"
            checked={selectedGender === "female"}
            onChange={() => {
              onGenderChange("female");
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
