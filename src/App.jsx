import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CitizenList from "./pages/CitizenList";
import Header from "./components/Header";
import CitizenProfile from "./pages/CitizenProfile";

const App = () => {
  const [isOpened, setIsOpened] = useState(true);
  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className="h-screen flex flex-col">
      <Header toggleMenu={toggleMenu} />

      <div className="flex flex-1">
        <Sidebar isOpened={isOpened} />

        <div className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/citizenList" element={<CitizenList />} />
            <Route path="/citizenProfile" element={<CitizenProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
