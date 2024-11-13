import React from "react";
import Navbar from "./components/Navbar";
import Routing from "./utils/Routing";
const App = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />
      <Routing />
    </div>
  );
};

export default App;
