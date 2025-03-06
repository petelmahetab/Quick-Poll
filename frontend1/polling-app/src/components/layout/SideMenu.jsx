import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const SideMenu = ({ activeMenu }) => {
  const { clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      handelLogout();
      return;
    }

    navigate(route);
  };

  const handelLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-gray-700 border-r text-white border-slate-100/70 p-5 sticky top-[61px] z-20">
      {SIDE_MENU_DATA.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[15px]  ${
            activeMenu == item.label ? "flex items-center gap-3 text-sm text-white bg-gray-800 hover:bg-black px-5 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out" : ""
          } py-4 px-6 rounded-full mb-3`}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-xl" /> {item.label}
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
