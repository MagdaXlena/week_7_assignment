import { useState } from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import NavBar from './components/NavBar'
import CryptoPrices from './components/CryptoPrices'
import MyBag from './Pages/MyBag'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<CryptoPrices />} />
        <Route path='/MyBag' element={<MyBag />} />
      </Routes>
    </div>
  )
}

export default App
