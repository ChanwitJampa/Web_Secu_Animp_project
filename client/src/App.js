import { BrowserRouter, Redirect, Route ,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navbar from './component/Navbar';
import TopAnimePage from './pages/TopAnimePage';
import SingleAnimePage from './pages/SingleAnimePage';
import SeasonnalAnimePage from './pages/SeasonalAnimePage';
import AnimeMapPage from './pages/AnimeMapPage';
import NotFoundPage from './pages/NotFoundPage';
import React, { useState, useEffect } from "react";
import './App.scss'
function App() {
  const AuthApp=()=>{
    return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/topanime" element={<TopAnimePage/>}/>
        <Route path="/anime/:id" element={<SingleAnimePage/>}/>
        <Route path="/allanime" element={<SeasonnalAnimePage/>}/>
        <Route path="/mymap" element={<AnimeMapPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    )
  }
  return (
    <div>
      <Navbar/>
      <AuthApp/>
    </div>
  );
}

export default App;
