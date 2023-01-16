import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Chat from "./views/chat/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>          
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
