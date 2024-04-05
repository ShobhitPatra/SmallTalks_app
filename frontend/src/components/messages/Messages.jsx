import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <>
      <div className="flex flex-col p-2 overflow-auto h-screen">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </>
  );
};

export default Messages;
