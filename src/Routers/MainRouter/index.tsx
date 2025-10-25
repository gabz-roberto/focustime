import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Home from "../../pages/Home";
import About from "../../pages/About";
import NotFound from "../../pages/NotFound";
import History from "../../pages/History";
import { useEffect } from "react";

const SrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro/' element={<About />} />
        <Route path='/history/' element={<History />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <SrollToTop />
    </BrowserRouter>
  );
};

export default MainRouter;
