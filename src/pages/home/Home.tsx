import Hero from "./components/Hero";
import SectionTopPlaylistIndonesia from "./components/SectionTopPlaylistIndonesia";
import SectionTopPlaylistGlobal from "./components/SectionTopPlaylistGlobal";
import { getUserProfile, getRefreshTokenAuth } from "../../api";
import { useEffect, useState } from "react";
export default function Home() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    async function init() {
      const profile = await getUserProfile();

      if (profile) {
        return console.log(profile);
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
