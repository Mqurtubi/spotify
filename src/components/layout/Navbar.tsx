import { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { login } from "../../api";
import { useAuthProfile } from "../../store/useAuthProfile";
import { defaultProfile } from "../../utils/defaultProfile";
import { logout } from "../../api";
import { useDrawer } from "../../store/useDrawer";
export default function Navbar() {
  const [openProfile, setOpenProfile] = useState(false);
  const { fetchProfile, profile, authProfile } = useAuthProfile();
  const { open, setOpen } = useDrawer();
  const handleClickProfile = () => {
    setOpenProfile(!openProfile);
  };

  useEffect(() => {
    const data = async () => {
      await fetchProfile();
    };
    data();
  }, []);
  return (
    <div>
      <div className=" md:flex-row-reverse flex items-center justify-between bg-slate-900 text-white px-5 py-4 fixed top-0 left-0 right-0 z-10 border-b border-slate-800 ">
        <div
          onClick={setOpen}
          className={`md:hidden ${
            open ? "translate-x-56" : "-translate-x-0"
          } transition-all duration-300`}
        >
          {open ? (
            <IoIosClose className="text-5xl" />
          ) : (
            <LuMenu className="text-3xl" />
          )}
        </div>
        <div className="flex space-x-5 items-center">
          {!authProfile ? (
            <button
              className="bg-cyan-400 py-2 px-3 text-sm font-semibold rounded-xl text-slate-950 hover:-translate-y-1 transition-all duration-200  hover:shadow-cyan-500/50 hover:shadow-lg hover:cursor-pointer"
              onClick={login}
            >
              Connect Spotify
            </button>
          ) : (
            <div className="relative" onClick={handleClickProfile}>
              <div className="w-11 h-11 rounded-full bg-amber-800 text-center hover:cursor-pointer">
                {profile.images.length == 0 ? (
                  <p className="pt-1 text-2xl">
                    {defaultProfile(profile.display_name)}
                  </p>
                ) : (
                  <img src={profile.images.url} />
                )}
              </div>
              <div
                className={`absolute bg-slate-800 -left-14 mt-2 ${
                  openProfile ? "block" : "hidden"
                }`}
              >
                <ul className="space-y-3 pl-5 pr-13 py-3 flex flex-col">
                  <button onClick={logout}>logout</button>
                  <li>profile</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
