import React from "react";
import Albums from "./components/Albums/mainAlbums";
import MainLayout from "./components/Layouts/mainLayouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts/mainPosts";
import Home from "./components/Home/mainHome";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};
export default App;
