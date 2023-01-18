import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Payment from './pages/Payment'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Success from './pages/Success'
// import {cre}
// import './App.css'

function App() {
  return (
   <main>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Payment />} />
      <Route path='/success' element={ <Success />} />
    </Routes>
    </BrowserRouter>
   </main>
  )
}

export default App
