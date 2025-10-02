import { NavLink } from "react-router-dom";
export default function Hero() {
  return (
    <div className="bg-radial-[at_40%_50%] from-cyan-800 via-slate-800  to-85% text-white flex flex-col items-center space-y-5 px-5 py-10 mt-16">
      <div>
        <p className="font-bold text-5xl/snug bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Discover Your <br />
          Next Favorite
        </p>
      </div>
      <div className="text-center text-slate-300">
        <p>
          Explore millions of songs, discover new artists, and dive into curated{" "}
          <br className="hidden md:block" />
          playlists powered by Spotify's vast music library.
        </p>
      </div>
      <div className="flex flex-col w-full text-center space-y-5 sm:flex-row sm:space-y-0 justify-center space-x-5">
        <NavLink
          className={`bg-gradient-to-r from-cyan-500 to-slate-700 to-99% py-2 rounded-2xl text-slate-950 hover:-translate-y-1 transition-all duration-200  hover:shadow-cyan-500/50 hover:shadow-lg sm:w-1/2 md:w-1/5`}
        >
          Start Music
        </NavLink>
        <NavLink
          className={`border border-slate-400 py-2 rounded-2xl hover:opacity-70 transition-all duration-300 ease-in-out sm:w-1/2 md:w-1/5`}
        >
          Browse Music
        </NavLink>
      </div>
    </div>
  );
}
