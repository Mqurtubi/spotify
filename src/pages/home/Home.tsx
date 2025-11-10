import Hero from "./components/Hero";
import SectionTopPlaylistIndonesia from "./components/SectionTopPlaylistIndonesia";
import SectionTopPlaylistGlobal from "./components/SectionTopPlaylistGlobal";
import {
  getUserProfile,
  getPlaylistUser,
  getPlayerUser,
  getTopTracksUser,
} from "../../api";
import { useEffect, useState } from "react";
import SectionTopArtistsUser from "./components/SectionTopArtistsUser";
import SectionTopTrackUser from "./components/SectionTopTrackUser";
export default function Home() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    async function init() {
      const profile = await getUserProfile();
      const playlist = await getPlaylistUser();
      const player = await getPlayerUser();
      if (profile) {
        console.log(playlist);
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
      {auth && (
        <>
          <SectionTopArtistsUser />
          <SectionTopTrackUser />
        </>
      )}
    </div>
  );
}
