import Logo from "../ui/Logo";
import { useDrawer } from "../../store/useDrawer";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import menu from "./menu";
export default function Sidebar() {
  const { open } = useDrawer();
  useEffect(() => {
    console.log(open);
  }, []);
  return (
    <div
      className={`h-screen w-60 bg-[#0f172a] fixed z-50 top-0 border-r border-slate-800 md:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-60"
      } transition-all duration-300 space-y-5`}
    >
      <div className="border-b border-slate-800 px-5 py-6">
        <Logo />
      </div>
      <div className="space-y-2 px-3 border-b border-slate-800 pb-8 ">
        {menu.map((item, index) => (
          <div
            className="flex space-x-2 text-slate-300 items-center hover:bg-slate-400/20 px-2 rounded py-1"
            key={index}
          >
            <item.Icon />
            <NavLink to={item.href}>{item.label}</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
