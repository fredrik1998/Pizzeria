import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homescreen from './screens/Homescreen/Homescreen'
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Homescreen/>}/>
    </Routes>
  )
}

export default App
