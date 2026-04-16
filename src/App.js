import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Ex from './Components/Ex'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import MenuCategory from './Components/MenuCategory' // ✅ correct import

const App = () => {
  return (
    <Router>
      <Ex />

      <Routes>
        {/* Home Page */}
        <Route path='/' element={<Banner />} />

        {/* Menu Category Page */}
        <Route path="/service" element={<MenuCategory />} />

        {/* Menu Items */}
        <Route path="/menu/:type" element={<Menu />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App