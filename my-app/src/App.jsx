import './App.css';

import './index.css'
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Organise from "./Organise";
// import Register from './Register';
import Find from './Find';

function App() {
  
  return (
    
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/home" element={<Home />} /> 
        <Route path="/organise" element={<Organise />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/find" element={<Find />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;