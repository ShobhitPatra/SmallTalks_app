import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex text-4xl p-4  bg-slate-400 bg-opacity-25 ">
        <div className="avatar">
          <div className="w-10 mx-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <span className="font-bold  "> Hari Patel</span>
      </div>
    </>
  );
};

export default Header;
