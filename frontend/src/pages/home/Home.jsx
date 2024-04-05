import React from "react";

import MessageContainer from "../../components/messages/MessageContainer";
import { SideBar } from "../../components/sideBar/SideBar";

export const Home = () => {
  return (
    <div className="flex h-screen w-full rounded-lg overflow-hidden">
      <SideBar />
      <MessageContainer />
    </div>
  );
};
