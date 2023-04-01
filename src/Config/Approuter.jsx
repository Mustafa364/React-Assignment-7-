import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Screens/Home'
import About from '../Screens/About'
import Contact from '../Screens/Contact';
import Signup from '../Screens/signup';
import Dashboard from '../Screens/Dashboard';
import Institude from '../Screens/Institude';

function Approuter() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='signup' element={<Signup />}></Route>
          <Route path='/dashboard/*' element={<Dashboard />}></Route>
          <Route path='/institude/*' element={<Institude />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Approuter;
