import { useEffect } from "react";
import { getValidToken } from "./api/index";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/home/Home";
import Callback from "./pages/callback/Callback";
import Sidebar from "./components/layout/Sidebar";
function App() {
  useEffect(() => {
    async function init() {
      const token = await getValidToken();
      if (!token) {
        return;
      }
    }
    init();
  }, []);
  return (
    <div className="bg-slate-900 relative overflow-hidden">
      <Sidebar />
      <Navbar />

      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Callback />} path="/callback" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
