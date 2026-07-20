import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import BottomNav from './BottomNav'
import ScrollToTop from './ScrollToTop'
import Routers from '../routers/Routers'
import { BrowserRouter as Router } from 'react-router-dom'

function Layout() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-[100dvh] flex-col bg-gray-50">
        <Header />
        <Routers />
        <Footer />
        <BottomNav />
      </div>
    </Router>
  )
}

export default Layout
