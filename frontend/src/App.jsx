import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homescreen from './screens/Homescreen/Homescreen'
import Menuscreen from './screens/Menuscreen/Menuscreen'
import Orderscreen from './screens/Orderscreen/Orderscreen'
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Homescreen/>}/>
      <Route  path='/menu' element={<Menuscreen/>}/>
      <Route path='/order' element={<Orderscreen/>}/>
    </Routes>
  )
}

export default App
