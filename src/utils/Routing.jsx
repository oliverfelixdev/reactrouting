import React from "react";
import { Route, Routes } from "react-router-dom";
import PLayground from "../components/PLayground";
import Azul from "../components/Azul";
import Home from "../components/Home";
import UserDetail from "../components/UserDetail";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/azul" element={<Azul />} />
        <Route path="/playground/" element={<PLayground />} />
        <Route path="/playground/:name" element={<UserDetail />} />
      </Routes>
    </div>
  );
};

export default Routing;
