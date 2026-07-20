import React from 'react'
import Home from '../pages/Home'
import Posters from '../pages/Posters'
import Videos from '../pages/Videos'
import Contact from '../pages/Contact'
import QrCode from '../pages/QrCode'
import { Routes, Route } from 'react-router-dom'

function Routers() {
  return (
    <main className="flex-1 pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posters" element={<Posters />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qr" element={<QrCode />} />
      </Routes>
    </main>
  )
}

export default Routers
