import { IoPlayOutline } from "react-icons/io5";

export default function ItemsTrack({ items, number }) {
  const image = items.album.images[0].url;
  const artist = items.artists[0].name;
  const title = items.name;
  return (
    <div className="text-white flex space-x-7 bg-slate-800/50 relative pt-2 pb-4 px-2 rounded-2xl items-center border border-slate-800 group">
      <div>
        <img src={image} alt="" className="max-w-16 relative left-3 top-1" />
        <p className="absolute top-2 left-1 py-1 px-3 bg-cyan-500 rounded-full text-md">
          {number}
        </p>
        <IoPlayOutline className="absolute top-8 left-10 text-2xl  group-hover:opacity-100 opacity-0 transition-all duration-300" />
      </div>
      <div className="">
        <p className="group-hover:text-cyan-500 transition-colors duration-300">
          {title}
        </p>
        <p className="text-slate-500">{artist}</p>
      </div>
    </div>
  );
}
