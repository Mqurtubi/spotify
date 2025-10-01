import { useEffect } from "react";
import { getValidToken } from "./api/index";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/home/Home";
import {
  getPlaylistTopIndo,
  getPlaylistFeatured,
  getPlaylistTopGlobal,
} from "./api/index";
function App() {
  useEffect(() => {
    async function init() {
      const token = await getValidToken();
      if (!token) {
        return;
      }
      const playlist = await getPlaylistFeatured();
      const topPlalist = await getPlaylistTopIndo();
      const playlistGlobal = await getPlaylistTopGlobal();
      console.log(playlistGlobal);
      console.log(topPlalist);
      console.log(playlist);
    }
    init();
  }, []);
  return (
    <div className="bg-slate-900">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
