import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios'

import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import BlogHistory from './components/BlogHistory'
import Movies from './components/Movies'
import Nav from './components/Nav'
import News from './components/News'
import WritersPortal from './components/WritersPortal'
import LoginModal from './components/LoginModal'


function App() {



  return <div className="App"></div>;

  <div>
    <Header/>
    <Nav/>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path ="/About" element={<About/>}></Route>
        <Route path ="/Movies" element={<Movies/>}></Route>
        <Route path ="/News" element={<News/>}></Route>
        <Route path ="/LoginModal" element={<LoginModal/>}></Route>
        <Route path ="/WritersPortal" element={<WritersPortal/>}></Route>
        <Route path ="/BlogHistory" element={<BlogHistory/>}></Route>
      </Routes>
     </div>
}

export default App;
