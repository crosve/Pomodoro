
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from './routes/LandingPage';
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Header from "./components/Header";


function App() {

  return (
    <Router>
      <div className='w-screen h-screen overflow-auto relative'>
        <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App
