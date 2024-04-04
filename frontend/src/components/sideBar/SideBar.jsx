import React from "react";
import SearchBar from "./SearchBar";
import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";

const SideBar = () => {
  return (
    <div className="flex flex-col h-screen  p-4 bg-slate-800">
      <SearchBar />
      <div className="divider px-2"></div>
      <Conversations />
      <LogoutBtn />
    </div>
  );
};

export default SideBar;
