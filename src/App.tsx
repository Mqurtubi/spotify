import { useEffect } from "react";
import { getValidToken } from "./api/index";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";
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
    <div className="bg-slate-900 h-screen">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
