import Payment from './pages/Payment'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Success from './pages/Success'
// import {cre}
// import './App.css'

function App() {
  return (
   <main className=''>
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
