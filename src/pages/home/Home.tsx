import Hero from "./components/Hero";
import SectionTopPlaylistIndonesia from "./components/SectionTopPlaylistIndonesia";
import SectionTopPlaylistGlobal from "./components/SectionTopPlaylistGlobal";
import {
  getUserProfile,
  getPlaylistUser,
  getPlayerUser,
  getTopArtistsUser,
  getTopTracksUser,
  getArtistRelated,
} from "../../api";
import { useEffect, useState } from "react";
import SectionTopArtistsUser from "./components/SectionTopArtistsUser";
export default function Home() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    async function init() {
      const profile = await getUserProfile();
      const playlist = await getPlaylistUser();
      const player = await getPlayerUser();
      const topArtist = await getTopArtistsUser();
      const topTrack = await getTopTracksUser();
      const artistRelated = await getArtistRelated();

      console.log(artistRelated);
      if (profile) {
        console.log(topArtist);
        setAuth(true);
        return;
      }
      return console.log("data tidak ada");
    }
    init();
  }, []);
  return (
    <div className="md:ml-60 ">
      <Hero />
      <SectionTopPlaylistIndonesia />
      <SectionTopPlaylistGlobal />
      {auth && <SectionTopArtistsUser />}
    </div>
  );
}
