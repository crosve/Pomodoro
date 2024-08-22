
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from './routes/LandingPage';
import Header from "./components/Header";


function App() {

  return (
    <Router>
      <div className='w-screen h-screen overflow-auto relative'>
        <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App
