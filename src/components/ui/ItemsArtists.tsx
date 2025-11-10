import { numberFormatFollowers } from "../../utils/numberFormatFollowers";
import { FaPlay } from "react-icons/fa";
export default function ItemsArtist({ items }) {
  const genre = items.genres;
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl flex flex-col justify-center items-center w-full py-6 space-y-2 group px-3">
      <div className="rounded-full overflow-hidden w-48 relative">
        <img
          src={items.images[0].url}
          alt=""
          className="group-hover:scale-101 transition-all duration-300 opacity-100 group-hover:opacity-80"
        />
        <div className="absolute bg-cyan-400 p-5 h-14 top-17 right-16  justify-center items-center rounded-full flex opacity-0 group-hover:opacity-100 transition-all duration-400">
          <FaPlay className="text-lg" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-white group-hover:text-purple-500 transition-colors duration-300">
          {items.name}
        </p>
        <p className="text-slate-500">
          {numberFormatFollowers(items.followers.total)}
        </p>
      </div>
      <div className="flex gap-3 flex-wrap justify-center">
        {genre.map((item, index) => (
          <p
            className="bg-cyan-500/30 px-2 text-cyan-500 rounded border border-cyan-700 py-1"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
