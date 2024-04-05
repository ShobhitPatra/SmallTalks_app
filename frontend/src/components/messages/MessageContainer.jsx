import React from "react";
import Header from "./Header";
import Messages from "./Messages";
import Input from "./Input";

const MessageContainer = () => {
  return (
    <>
      <div className="flex flex-col md:min-w-[450px] bg-slate-900 w-full">
        <Header />
        <Messages />
        <Input />
      </div>
    </>
  );
};

export default MessageContainer;
