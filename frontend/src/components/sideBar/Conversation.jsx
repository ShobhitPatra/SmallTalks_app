import React from "react";

const Conversation = ({ conversation, lastIndex }) => {
  return (
    <>
      <div className="flex bg-slate-700 px-6 py-1  m-2  rounded-md hover:bg-transparent">
        <div id="avatar">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src={conversation.avatar} />
            </div>
          </div>
        </div>
        <div
          id="name"
          className="text-xl px-2 font-semibold flex items-center justify-center"
        >
          <div>{conversation.fullname}</div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
