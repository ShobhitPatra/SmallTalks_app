import React from "react";

export const CheckBox = ({ label }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span>
        <input type="checkbox" className="checkbox checkbox-primary mx-2" />
      </label>
    </div>
  );
};
