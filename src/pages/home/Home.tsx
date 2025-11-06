import Hero from "./components/Hero";
import SectionTopPlaylistIndonesia from "./components/SectionTopPlaylistIndonesia";
import SectionTopPlaylistGlobal from "./components/SectionTopPlaylistGlobal";
import {
  getUserProfile,
  getRefreshTokenAuth,
  getPlaylistUser,
} from "../../api";
import { useEffect, useState } from "react";
export default function Home() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    async function init() {
      const profile = await getUserProfile();
      const playlist = await getPlaylistUser();
      if (profile) {
        console.log(profile);
        console.log(playlist);
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
