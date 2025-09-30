export default function Hero() {
  return (
    <div className="bg-radial-[at_40%_50%] from-cyan-800 via-slate-800  to-85% text-white flex flex-col items-center space-y-5 px-5 py-10">
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
      <div></div>
    </div>
  );
}
