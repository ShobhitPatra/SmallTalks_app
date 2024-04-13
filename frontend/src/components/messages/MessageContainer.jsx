import React from "react";
import Header from "./Header";
import Messages from "./Messages";
import Input from "./Input";
import { useConversation } from "../../store/useConversation";
import toast from "react-hot-toast";

const MessageContainer = () => {
  const { selectedConversation } = useConversation();
  return (
    <>
      {selectedConversation ? (
        <div className="flex flex-col md:min-w-[450px] bg-slate-900 w-full">
          <Header />
          <Messages />
          <Input />
        </div>
      ) : (
        <Welcome />
      )}
    </>
  );
};

const Welcome = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center ">
        <div className="hero min-h-screen bg-slate-950">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                What's stopping you ? <br />
                Start a conversation right now
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  toast(
                    "Hello User! Click on any conversation to start messaging",
                    {
                      icon: "👏",
                      style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                      },
                    }
                  );
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageContainer;
