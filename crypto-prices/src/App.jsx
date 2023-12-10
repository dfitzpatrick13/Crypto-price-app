import './App.css'
import { Routes, Route} from "react-router-dom"
import Currencies from './pages/Currencies'
import Nav from './components/Nav'
import Main from './pages/Main'
import Prices from './pages/Price'
import About from './pages/About'




function App() {
 

  return (
    
      <>
      <Nav/>

      <Routes> 
          <Route path = "/" element = {<Main />}  />
          <Route path = "/currencies" element = {<Currencies />} />
          <Route path = "/price/:symbol" element = {<Prices/>} />
          <Route path="/about" element={<About />} />

      </Routes>
         
      
       </>
    
  )
}

export default App
