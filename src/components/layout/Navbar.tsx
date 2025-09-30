import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Logo from "../ui/Logo";
import menu from "./menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div>
      <div className="flex items-center justify-between bg-slate-900 text-white px-5 py-4 fixed top-0 left-0 right-0 z-99 border-b-4 border-slate-800 backdrop-blur-md">
        <Logo />
        <div className="md:hidden">
          {!open ? (
            <LuMenu
              className="text-3xl hover:cursor-pointer"
              onClick={handleClick}
            />
          ) : (
            <IoIosClose
              className="text-3xl hover:cursor-pointer"
              onClick={handleClick}
            />
          )}
        </div>
        <div className="text-lg hidden md:flex lg:m-auto items-center space-x-10">
          {menu.map((item, index) => (
            <NavLink
              to={item.href}
              key={index}
              className={({ isActive }: { isActive: boolean }) =>
                `hover:bg-teal-600 hover:text-cyan-300 font-bold px-5 py-2 rounded-xl ${
                  isActive ? "text-white" : "text-slate-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div
        className={`bg-slate-800 fixed w-full -top-17 overflow-hidden transition-all duration-300 ease-in-out  md:hidden flex flex-col space-y-4 py-3 px-8 ${
          open ? "translate-y-32 opacity-100" : ""
        }`}
      >
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.href}
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "text-white" : "text-cyan-300"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
