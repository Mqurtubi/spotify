import Hero from "./components/Hero";
import SectionTopPlaylistIndonesia from "./components/SectionTopPlaylistIndonesia";
import SectionTopPlaylistGlobal from "./components/SectionTopPlaylistGlobal";
import { getUserProfile, getRefreshTokenAuth } from "../../api";
import { useEffect, useState } from "react";
export default function Home() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    async function init() {
      const tokenAuth = localStorage.getItem("access_token");
      const tokenExpire = Number(
        localStorage.getItem("spotify_token_expire_auth")
      );
      if (tokenAuth && tokenExpire > Date.now()) {
        const userProfile = await getUserProfile(tokenAuth);
        console.log(userProfile);
        return;
      } else {
        const refrehToken = await getRefreshTokenAuth();
        console.log(refrehToken);
      }
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
