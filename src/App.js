import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Pages/Home/NavBar";
import Home from "./Pages/Home/HomeScreen";
import About from "./Pages/Home/AboutScreen/AboutScreen";
import Contact from "./Pages/Home/ContactScreen/ContactScreen";

function ScrollToTopOnPageChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          
          <ScrollToTopOnPageChange />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutMe" element={<About />} />
            <Route path="/ContactMe" element={<Contact />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
