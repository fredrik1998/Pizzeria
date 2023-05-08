import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/Loader/Loader';

const Adminscreen = lazy(() => import('./screens/Adminscreen/Adminscreen'));
const Homescreen = lazy(() => import('./screens/Homescreen/Homescreen'));
const Loginscreen = lazy(() => import('./screens/Loginscreen/Loginscreen'));
const Menuscreen = lazy(() => import('./screens/Menuscreen/Menuscreen'));
const Orderscreen = lazy(() => import('./screens/Orderscreen/Orderscreen'));
const Success = lazy(() => import('./screens/Success/Success'));
const Registerscreen = lazy(() => import('./screens/Registerscreen/Registerscreen'));
const Userscreen = lazy(() => import('./screens/Userscreen/Userscreen'));

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Homescreen/>}/>
      <Route path='/menu' element={<Menuscreen/>}/>
      <Route path='/order' element={<Orderscreen/>}/>
      <Route path="/success/:orderId" element={<Success />}/>
      <Route path='/login' element={<Loginscreen/>}/>
      <Route path='/admin' element={<Adminscreen/>}/>
      <Route path='/register' element={<Registerscreen/>}/>
      <Route path='/userscreen/:userId' element={<Userscreen/>}/>
    </Routes>
  )
}

export default function AppWrapper(){
  return(
    <Suspense fallback={<Loader/>}>
      <App/>
    </Suspense>
  )
}
