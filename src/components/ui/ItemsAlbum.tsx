import { NavLink } from "react-router-dom";
import { LuMusic2 } from "react-icons/lu";
import { VscDebugStart } from "react-icons/vsc";
import { SpotifyPlaylist } from "../../api";
interface ItemsAlbum {
  items: SpotifyPlaylist;
}
export default function ItemsAlbum({ items }: ItemsAlbum) {
  return (
    <div className="border rounded-2xl overflow-hidden group">
      <div className="relative">
        <img
          src={items.images[0].url}
          alt=""
          className="object-cover w-full h-96 group-hover:scale-101 transition-all duration-300 opacity-100 hover:opacity-80"
        />
        <LuMusic2 className="absolute top-5 right-6 text-white text-2xl drop-shadow-lg drop-shadow-white" />
        <NavLink
          className={`opacity-0 group-hover:opacity-100 flex items-center bg-cyan-500  justify-center text-lg rounded-lg w-11/12 absolute left-6 xl:left-4 bottom-5 py-1 transition-all duration-300`}
          to={items.href}
        >
          <VscDebugStart />
          play playlist
        </NavLink>
      </div>
      <div className="px-5 pt-2 pb-8 space-y-5">
        <div className="space-y-1">
          <p className="text-white font-semibold group-hover:text-cyan-500 transition-all duration-300">
            {items.name}
          </p>
        </div>
        <p className="text-slate-600">{items.tracks.total} tracks</p>
      </div>
    </div>
  );
}
