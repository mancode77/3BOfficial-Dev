import { Fragment } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Profil from "./Pages/Profil";
import Home from "./Pages/Home";
import Layanan from "./Pages/Layanan";
import Portfolio from "./Pages/Portfolio";
import Kontak from "./Pages/Kontak";


function App() {
  return (
    <Fragment>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Layanan" element={<Layanan />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Kontak" element={<Kontak />} />
        </Routes>
      </HashRouter>
    </Fragment>
  );
}

export default App;
