import React from "react";

const Conversation = ({ name = "Hardy Sandhu", avatar }) => {
  return (
    <>
      <div className="flex bg-slate-700 px-6 py-1  m-2  rounded-md hover:bg-transparent">
        <div id="avatar">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <div
          id="name"
          className="text-xl px-2 font-semibold flex items-center justify-center"
        >
          <div>{name}</div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
