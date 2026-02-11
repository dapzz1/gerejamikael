import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JadwalMisa from "./pages/JadwalMisa";
import Tentang from "./pages/Tentang";

const routeOrder = {
  "/": 0,
  "/jadwal-misa": 1,
  "/tentang": 2,
};

function AnimatedRoutes() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const prevIndex = routeOrder[prevPath.current] ?? 0;
    const currentIndex = routeOrder[location.pathname] ?? 0;

    if (currentIndex > prevIndex) {
      setDirection("right"); // maju → geser kanan
    } else {
      setDirection("left"); // mundur → geser kiri
    }

    prevPath.current = location.pathname;
  }, [location.pathname]);

  return (
    <div className={`page-wrapper slide-${direction}`} key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/jadwal-misa" element={<JadwalMisa />} />
        <Route path="/tentang" element={<Tentang />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
