import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from "./assets/views/HomePage";
import ServicesPage from "./assets/views/ServicesPage";
import HeaderMaster from './assets/components/HeaderMaster'; 
import WhatsAppContact from './assets/components/wpp';

const App = () => {
  return (
    <div>
      <HeaderMaster />
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/services" element={<ServicesPage/>} />
      </Routes>
      <WhatsAppContact/>
    </div>
  )
}

export default App
