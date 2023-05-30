import React from "react";
import Anketa from "./components/Anketa";
import CelostnaPodoba from "./components/CelostnaPodoba";
import Animacija from "./components/Animacija";
import Objekt from "./components/Objekt";
import KnjigaPohvalInPritozb from "./components/KnjigaPohvalInPritozb";
import Da from "./components/Da";
import Ne from "./components/Ne";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Anketa />} />
      <Route path='/CelostnaPodoba' element={<CelostnaPodoba />} />
      <Route path='/animacija' element={<Animacija />} />
      <Route path='/objekt' element={<Objekt />} />
      <Route
        path='/knjiga_pohval_in_pritožb'
        element={<KnjigaPohvalInPritozb />}
      />
      <Route path='/da' element={<Da />} />
      <Route path='/ne' element={<Ne />} />
    </Routes>
  );
}

export default App;
