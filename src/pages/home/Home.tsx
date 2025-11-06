import Hero from "./components/Hero";
import SectionTopPlaylistIndonesia from "./components/SectionTopPlaylistIndonesia";
import SectionTopPlaylistGlobal from "./components/SectionTopPlaylistGlobal";
import {
  getUserProfile,
  getPlaylistUser,
  getPlayerUser,
  getTopArtistsUser,
  getTopTracksUser,
} from "../../api";
import { useEffect, useState } from "react";
export default function Home() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    async function init() {
      const profile = await getUserProfile();
      const playlist = await getPlaylistUser();
      const player = await getPlayerUser();
      const topArtist = await getTopArtistsUser();
      const topTrack = await getTopTracksUser();
      if (profile) {
        console.log(profile);
        console.log(playlist);
        console.log(player);
        console.log(topArtist);
        console.log(topTrack);
        return;
      }
      return console.log("data tidak ada");
    }
    init();
  }, []);
  return (
    <div className="">
      <Hero />
      <SectionTopPlaylistIndonesia />
      <SectionTopPlaylistGlobal />
    </div>
  );
}
