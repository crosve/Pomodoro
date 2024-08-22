import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from './routes/LandingPage';


function App() {

  return (
    <Router>
      <div className='w-screen h-screen'>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App
