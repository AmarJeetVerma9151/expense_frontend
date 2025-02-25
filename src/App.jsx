
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/navbar'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Signup/>}/>
          {/* <Route path='/trial' element={<Trial/>}/> */}

      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
