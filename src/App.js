import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  { useEffect, useState } from 'react';
import Navbar from "./Pages/Home/NavBar";
import Home from "./Pages/Home/HomeScreen";
import About from "./Pages/Home/AboutScreen";

function App() {
  const [pageTitle, setPageTitle] = useState('Çağrı Kuzaytepe');

  useEffect(() => {   
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    
    <div className="App">
      
       <h1>{pageTitle}</h1>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/AboutMe" element={<About />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router> 
    </div>
  );
}

export default App;
