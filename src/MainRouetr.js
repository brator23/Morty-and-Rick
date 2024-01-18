import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Rick from './components/Rick'
import Morty from './components/Morty'
import HomePage from './components/HomePage'

const MainRouetr = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/rick' element={<Rick /> } />
      <Route path='/rick/:id' element={<Morty />} />
    </Routes>
  )
}

export default MainRouetr
