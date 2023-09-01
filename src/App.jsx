import './App.css'
import Navbar from './pages/Navbar'
import Earth from './pages/Earth'
import Main from './pages/Main'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
function App() {
 
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/earth" element={<Earth/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
