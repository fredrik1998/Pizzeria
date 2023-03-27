import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Adminscreen from './screens/Adminscreen/Adminscreen'
import Homescreen from './screens/Homescreen/Homescreen'
import Loginscreen from './screens/Loginscreen/Loginscreen'
import Menuscreen from './screens/Menuscreen/Menuscreen'
import Orderscreen from './screens/Orderscreen/Orderscreen'
import Success from './screens/Success/Success'
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Homescreen/>}/>
      <Route path='/menu' element={<Menuscreen/>}/>
      <Route path='/order' element={<Orderscreen/>}/>
      <Route path="/success/:orderId" element={<Success />}/>
      <Route path='/login' element={<Loginscreen/>}/>
      <Route path='/admin' element={<Adminscreen/>}/>
    </Routes>
  )
}

export default App
