import './App.css'
import { Routes, Route } from 'react-router-dom'
import Courses from './pages/Courses'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Hero from './components/home/Hero'
import Footer from './components/home/Footer'
import SignApp from './pages/SignApp'
import Login from './pages/Login'
import GraphicDesign from './components/course/GraphicDesign'
import UxUi from './components/course/UxUi'
import MobilApp from './components/course/MobilApp'
import WebDesign from './components/course/WebDesign'
import FrontEnd from './components/course/FrontEnd'


function App() {
  return (
    <>
      <Hero/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<SignApp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/GraphicDesign' element={<GraphicDesign/>}/>
          <Route path='/UxUi' element={<UxUi/>}/>
          <Route path='/MobilApp' element={<MobilApp/>}/>
          <Route path='/WebDesign' element={<WebDesign/>}/>
          <Route path='/FrontEnd' element={<FrontEnd/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
