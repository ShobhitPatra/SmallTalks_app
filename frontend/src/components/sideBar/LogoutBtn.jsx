import React from "react";
import { TbLogout2 } from "react-icons/tb";
import { useLogout } from "../../hooks/useLogout";

const LogoutBtn = () => {
  const { loading, logout } = useLogout();
  return (
    <>
      <div className="mt-auto ">
        <TbLogout2 className="h-9 w-9 cursor-pointer px-2" onClick={logout} />
      </div>
    </>
  );
};

export default LogoutBtn;
