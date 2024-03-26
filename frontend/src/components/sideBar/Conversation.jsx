import React from "react";

const Conversation = ({ name = "Hardy Sandhu", avatar }) => {
  return (
    <div className="flex ">
      <div>{name}</div>
      <div>
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
