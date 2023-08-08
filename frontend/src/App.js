import React from "react";
import Auth from "./Pages/Auth/Auth";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Chat from "./Pages/Chat/Chat";
import Navbar from "./Components/Navbar";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/auth" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
};

export default App;
