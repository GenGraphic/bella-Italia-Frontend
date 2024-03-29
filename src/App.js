import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ShopingCart from "./pages/ShopingCart";
import Rezepte from "./pages/Rezepte";


function App() {
  return (
    <div className='App'> 
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Einkaufswagen" element={<ShopingCart />} />
          <Route path="/Rezepte" element={<Rezepte />} />
       </Routes>
    </div>
  );
}

export default App;
